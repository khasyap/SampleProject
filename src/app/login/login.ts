import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user={
    username:"",
    password:""
  }
  reqpwd:any;
  users:any=[];
  checkLogin(form:any){
  this.reqpwd=this.user.username.slice(0,3)+"123";
  if(this.user.password==this.reqpwd){
       alert("login success")
       this.users.push(form.value);
       this.user={
        username:"",
        password:""
       }
  }
  else{
    alert("login failed")
  }
  form.reset()


  }
}
