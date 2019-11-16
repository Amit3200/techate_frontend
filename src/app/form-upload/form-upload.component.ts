import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AddFuncsService } from '../add-funcs.service';
@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  constructor(private router:Router,private cookObj:CookieService,private addFuncObj:AddFuncsService) { }

  ngOnInit() {
    if(!this.addFuncObj.valiDateSignIn(this.cookObj.get("userName"))){
      this.router.navigateByUrl('/teacherdashboard');
    }
  }
  uploadImg(){
    setTimeout(function(){ this.router.navigateByUrl("/presentFaces") }, 500);
  }
}
