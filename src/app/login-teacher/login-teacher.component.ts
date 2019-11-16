import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFuncsService } from '../add-funcs.service';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {
  email:string
  password:string
  userJson:Object
  constructor(private router:Router,private addFucs:AddFuncsService,private cookObj:CookieService) { }
  ngOnInit() {
    if(this.addFucs.valiDateSignIn(this.cookObj.get("userName"))){
      this.router.navigateByUrl('/teacherdashboard');
    }
     this.getterResp();
  }
  async getterResp(){
    await this.getServerResponse();
  }
  getServerResponse():Promise<any>{
    return new Promise((res,rej)=>{
      this.addFucs.getUserDetais()
      .toPromise()
      .then(
        response=>{
          this.userJson=JSON.parse(response.text())
          res(this.userJson)
        },
        msg=>{rej(msg)}
      );
    });
  }

  validateDetail(){
    if(this.email[0]=="t"){
      console.log(this.email,this.userJson);
      for(var i=0;i<this.userJson["teacher"].length;i++){
        if(this.userJson["teacher"][i].registration==this.email && this.userJson["teacher"][i].password==this.password){
          this.cookObj.set("userName",this.email)
          this.cookObj.set("userloginId","12"+this.email+"xuv12uvx")
          this.cookObj.set("type","teacher");
          this.cookObj.set("fullObj",JSON.stringify(this.userJson["teacher"][i]));
          this.router.navigateByUrl('/teacherdashboard')
        }
        else{
          swal.fire('Oops','User Not Found','error');
          // this.router.navigateByUrl('/login')
        }
      }
    }
      else{
        for(var i=0;i<this.userJson["student"].length;i++){
          if(this.userJson["student"][i].registration==this.email && this.userJson["student"][i].password==this.password){
            this.cookObj.set("userName",this.email)
            this.cookObj.set("userloginId","12"+this.email+"xuv12uvx")
            this.cookObj.set("type","student");
            this.cookObj.set("fullObj",JSON.stringify(this.userJson["student"][i]));
            // this.router.navigateByUrl('/teacherdashboard')
          }
          else{
            swal.fire('Oops','User Not Found','error');
            // this.router.navigateByUrl('/login')
          }
        }
      }
  }
  async loginVerification(){
    await this.validateDetail();
  }
  getDetail(){
    this.email=(<HTMLInputElement>document.getElementById("email")).value;
    this.password=(<HTMLInputElement>document.getElementById("password")).value;
    console.log(this.email,this.password)
    this.loginVerification();
    
  }

}
