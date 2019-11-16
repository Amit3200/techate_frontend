import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFuncsService } from '../add-funcs.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-teacher-homepage',
  templateUrl: './teacher-homepage.component.html',
  styleUrls: ['./teacher-homepage.component.css']
})
export class TeacherHomepageComponent implements OnInit {
  userName:string;
  boxObj:Object;
  constructor(private addFuncObj: AddFuncsService,private cookObj: CookieService,private router:Router) { }

  ngOnInit() {
    if(!this.addFuncObj.valiDateSignIn(this.cookObj.get("userName"))){
      this.router.navigateByUrl('/login');
    }
    this.boxObj=JSON.parse(this.cookObj.get('fullObj'))
    this.userName=this.boxObj["name"];
  }
  logout(){
    this.addFuncObj.destroyCookie();
  }

}
