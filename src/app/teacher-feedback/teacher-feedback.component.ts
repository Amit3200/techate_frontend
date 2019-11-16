import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFuncsService } from '../add-funcs.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-teacher-feedback',
  templateUrl: './teacher-feedback.component.html',
  styleUrls: ['./teacher-feedback.component.css']
})
export class TeacherFeedbackComponent implements OnInit {
  userName:string;
  boxObj:string;
  constructor(private router:Router,private addFuncObj:AddFuncsService,private cookObj:CookieService) { }

  ngOnInit() {
    if(!this.addFuncObj.valiDateSignIn(this.cookObj.get("userName"))){
      this.router.navigateByUrl('/login');
    }
    this.boxObj=JSON.parse(this.cookObj.get('fullObj'))
    this.userName=this.boxObj["name"];
  }

}
