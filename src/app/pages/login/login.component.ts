import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private http: HttpClient,private router: Router) {}
userEmail:any
  onTemplateSubmit(val: any) {
   this.userEmail=val.email
    const loginData = {
      email: val.email,
      password: val.password,
    };

    const backendUrl = 'http://localhost:8080/validateLogin';
    this.http.post(backendUrl, loginData, { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);
        if(response=== 'false'){
          console.log("your response is a false response")
          this.router.navigate(['/register']);
        }
        else{
          console.log("you are in else part")
          localStorage.setItem('user',this.userEmail);
        this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.error('Error registering user', error);
        this.router.navigate(['/register']);
      }
    );
  }
}
