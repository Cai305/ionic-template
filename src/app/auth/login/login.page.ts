import { Component, OnInit } from '@angular/core';
//import { Router } from  "@angular/router";
//import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //private  authService:  AuthService, private  router:  Router
   constructor() { }

  ngOnInit() {
  }
  login(form){
    // this.authService.login(form.value).subscribe((res)=>{
    //   this.router.navigateByUrl('home');
    // });
  }

}
