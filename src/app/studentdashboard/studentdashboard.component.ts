import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFuncsService } from '../add-funcs.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  boxObj:any;
  userName:any;
  constructor(private addFuncObj: AddFuncsService,private cookObj: CookieService,private router:Router) { }

  ngOnInit() {
    if(!this.addFuncObj.valiDateSignIn(this.cookObj.get("userName"))){
      this.router.navigateByUrl('/login');
    }
    this.boxObj=JSON.parse(this.cookObj.get('fullObj'))
    this.userName=this.boxObj["username"];
  }
  logout(){
    this.addFuncObj.destroyCookie();
  }
}
