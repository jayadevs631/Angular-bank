import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
     data="welcome to bank"
     data1="enter you ac no"
     acno:any
     pwd:any
     userdetails:any={
      1000:{username:"binladen",acno:1000,password:"abc123",balance:0},
      1001:{username:"x",acno:1001,password:"abc12",balance:0},
      1002:{username:"y",acno:1002,password:"abc1",balance:0},
      1003:{username:"z",acno:1003,password:"abc",balance:0}
    }

    login(){
      var acnum=this.acno
      var pwd=this.pwd
      var userdetails=this.userdetails
      if(acnum in userdetails){
        if(pwd==userdetails[acnum]["password"]){
          alert('login success')
        }
        else{
          alert('incorrect password')
        }
      }  
      else{
        alert('no such account number')
      }  
    }
  

    acnoChange(event:any){
      this.acno=event.target.value
      console.log(this.acno);  
    }

    pwdChange(event:any){
      this.pwd=event.target.value
       console.log(this.pwd);
    }
}


