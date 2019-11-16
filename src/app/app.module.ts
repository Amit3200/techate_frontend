import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { TeacherHomepageComponent } from './teacher-homepage/teacher-homepage.component';
import { AttendaceMarkComponent } from './attendace-mark/attendace-mark.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { MentorRequestTeacherComponent } from './mentor-request-teacher/mentor-request-teacher.component';
import { TeacherFeedbackComponent } from './teacher-feedback/teacher-feedback.component';
import { UploadSyllabusComponent } from './upload-syllabus/upload-syllabus.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ChatSystemComponent } from './chat-system/chat-system.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { ClassReportComponent } from './class-report/class-report.component';
import { ShowQrCodeComponent } from './show-qr-code/show-qr-code.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';
import { ShowPresentsQRComponent } from './show-presents-qr/show-presents-qr.component';
const routes: Routes = [
  { path: '',component: LoginTeacherComponent},
  { path: 'teacherdashboard', component: TeacherHomepageComponent },
  { path: 'attendancemark', component: AttendaceMarkComponent },
  { path: 'login', component: LoginTeacherComponent },
  { path: 'mentorfeedback', component: TeacherFeedbackComponent },
  { path: 'showqrcode',component: ShowQrCodeComponent},
  { path: 'showPresentQR',component:ShowPresentsQRComponent},
  { path: '**',component:TeacherHomepageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    LoginTeacherComponent,
    TeacherHomepageComponent,
    AttendaceMarkComponent,
    StudentReportComponent,
    MentorRequestTeacherComponent,
    TeacherFeedbackComponent,
    UploadSyllabusComponent,
    CreateTestComponent,
    ChatSystemComponent,
    ShowResultsComponent,
    ClassReportComponent,
    ShowQrCodeComponent,
    ShowPresentsQRComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) { 
        
    // to print only path eg:"/login"
}
 }
