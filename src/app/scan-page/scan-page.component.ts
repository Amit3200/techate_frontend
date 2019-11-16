import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFuncsService } from '../add-funcs.service';
import { CookieService } from 'ngx-cookie-service';
import  swal from 'sweetalert2';
@Component({
  selector: 'app-scan-page',
  templateUrl: './scan-page.component.html',
  styleUrls: ['./scan-page.component.css']
})
export class ScanPageComponent implements OnInit {

  constructor(private addFuncObj: AddFuncsService,private cookObj: CookieService,private router:Router) { }
  userJson:any;
  ngOnInit() {
  }
  handleQrCodeResult(result:string){
    var d=new Promise((res,rej)=>{
      this.addFuncObj.markPresentQr(result)
      .toPromise()
      .then(
        response=>{
          this.userJson=JSON.parse(response.text())
          res(this.userJson)
        },
        msg=>{rej(msg)}
      );
    });
    if(this.userJson.hasOwnProperty("message")){
      swal.fire("Attendance Marked","Scan Done! Attendance Marked","success");
      this.router.navigateByUrl("/studentdashboard")
    }
  }
}
