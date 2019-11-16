import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFuncsService } from '../add-funcs.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-show-qr-code',
  templateUrl: './show-qr-code.component.html',
  styleUrls: ['./show-qr-code.component.css']
})
export class ShowQrCodeComponent implements OnInit {
  QRJson:any;
  userQR:any;
  QrDigiCode:any;
  constructor(private router:Router,private addFuncObj:AddFuncsService,private cookObj:CookieService) { }
  ngOnInit() {
    if(!this.addFuncObj.valiDateSignIn(this.cookObj.get("userName"))){
      this.router.navigateByUrl('/login');
    }
    this.getterResp()
  }
  async getterResp(){
    await this.getServerResponse();
    this.userQR=this.QRJson["tag"]
    this.QrDigiCode=this.QRJson["code"]
    this.cookObj.set("qrcode",this.QrDigiCode);
  }
  getServerResponse():Promise<any>{
    return new Promise((res,rej)=>{
      this.addFuncObj.getQRCode()
      .toPromise()
      .then(
        response=>{
          this.QRJson=JSON.parse(response.text());
          res(this.QRJson)
        },
        msg=>{rej(msg)}
      );
    });
  }
}
