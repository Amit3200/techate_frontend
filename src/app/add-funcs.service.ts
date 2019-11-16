import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Http, Response, Headers } from "@angular/http";
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AddFuncsService {
  //https://api.myjson.com/bins/etxmq
  allUsersUrl:string="https://techbackend.herokuapp.com/api/"
  qrCodeUrl:string="https://techbackend.herokuapp.com/api/qrcode/open"
  presentQrUrl:string="https://techbackend.herokuapp.com/api/qrcode/close/"
  markPresentQrlUrl:string="https://techbackend.herokuapp.com/api/qrcode/"
  constructor(private cookieObj:CookieService,private http:Http,private router:Router) { }
  valiDateSignIn(userName:string):boolean{
    if(this.cookieObj.get("userloginId")==("12"+userName+"xuv12uvx")){
      return true;
    }
    return false;
  }
  getUserDetais(){
    return this.http.get(this.allUsersUrl)
  }
  getQRCode(){
    return this.http.get(this.qrCodeUrl)
  }
  getPresentsQR(qrCodedigit:string){
    return this.http.get(this.presentQrUrl+qrCodedigit+"/")
  }
  destroyCookie(){
    this.cookieObj.deleteAll();
    this.router.navigateByUrl('/login')
  }
  markPresentQr(result){
    console.log(this.markPresentQrlUrl+result.toString()+"/"+JSON.parse(this.cookieObj.get("fullObj"))["registration"].toString());
    return this.http.get(this.markPresentQrlUrl+result.toString()+"/"+JSON.parse(this.cookieObj.get("fullObj"))["registration"].toString());
  }

}
