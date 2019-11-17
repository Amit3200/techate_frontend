import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddFuncsService } from '../add-funcs.service';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2'; 
@Component({
  selector: 'app-show-presents-qr',
  templateUrl: './show-presents-qr.component.html',
  styleUrls: ['./show-presents-qr.component.css']
})
export class ShowPresentsQRComponent implements OnInit {
  allStudents:any;
  presentStudents:any;

  constructor(private router:Router,private addFuncObj:AddFuncsService,private cookObj:CookieService) { }
  ngOnInit() {
    if(!this.addFuncObj.valiDateSignIn(this.cookObj.get("userName"))){
      this.router.navigateByUrl('/teacherdashboard');
    }
     this.getterResp();
  }
  getallStudents(){
      return new Promise((res,rej)=>{
        this.addFuncObj.getUserDetais()
        .toPromise()
        .then(
          response=>{
            this.allStudents=JSON.parse(response.text())
            res(this.allStudents)
          },
          msg=>{rej(msg)}
        );
      });
  }
  getpresentStudents(){
    return new Promise((res,rej)=>{
      this.addFuncObj.getPresentsQR(this.cookObj.get("qrcode"))
      .toPromise()
      .then(
        response=>{
          this.presentStudents=JSON.parse(response.text())
          res(this.presentStudents)
        },
        msg=>{rej(msg)}
      );
    });
  }
  renderFrontend(){
    var p=(<HTMLElement>document.getElementById("tbody_show"))
    for(var i=0;i<this.allStudents["student"].length;i++){
      var trCreate=document.createElement("tr");
      var td0=document.createElement("td");
      var textNode0=document.createTextNode((i+1).toString());
      td0.appendChild(textNode0);
      var td1=document.createElement("td");
      var textNode1=document.createTextNode(this.allStudents["student"][i].username);
      td1.appendChild(textNode1);
      var td2=document.createElement("td");
      var textNode2=document.createTextNode(this.allStudents["student"][i].registration);
      td2.appendChild(textNode2);
      var td3=document.createElement("td");
      var textNode3=document.createTextNode(this.allStudents["student"][i].email);
      var td4=document.createElement("td");
      var divui=document.createElement("div")
      divui.setAttribute("class","custom-control custom-control-alternative custom-checkbox mb-3")
      var checkbox4=document.createElement("input")
      checkbox4.setAttribute("type","checkbox");
      checkbox4.setAttribute("class","custom-control-input")
      checkbox4.setAttribute("id",this.allStudents["student"][i].registration);
      var label4=document.createElement("label")
      label4.setAttribute("class","custom-control-label")
      label4.setAttribute("for",this.allStudents["student"][i].registration);
      var v1=document.createTextNode("Attendance Status")
      label4.appendChild(v1);
      divui.appendChild(checkbox4);
      divui.appendChild(label4);
      td3.appendChild(textNode3);
      td4.appendChild(divui);
      trCreate.appendChild(td0);
      trCreate.appendChild(td1);
      trCreate.appendChild(td2);
      trCreate.appendChild(td3);
      trCreate.appendChild(td4);
      p.appendChild(trCreate);
    }
    for(var i=0;i<this.presentStudents["students"].length;i++){
      (<HTMLInputElement>document.getElementById(this.presentStudents["students"][i])).checked=true;
    }
  }
  markSuccess(){
    var d={"present":[]};
    for(var i=0;i<this.allStudents["student"].length;i++){
      if((<HTMLInputElement>document.getElementById(this.allStudents["student"][i].registration)).checked==true){
        d["present"].push(<HTMLInputElement>document.getElementById(this.allStudents["student"][i].registration));
      }
    }
    console.log(d);
    this.addFuncObj.sendFinalProd(d);
    swal.fire("Attendance Marked","Attendance Marked Succesfully","success")
    this.router.navigateByUrl("/teacherdashboard")
  }
  async getterResp(){
    await this.getallStudents();
    await this.getpresentStudents();
    await this.renderFrontend();
  }

}
