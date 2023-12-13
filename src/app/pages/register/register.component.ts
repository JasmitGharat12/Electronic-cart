import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.reactiveForm = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required],
    });
  }

  onReactiveSubmit(formData: any) {
    if (this.reactiveForm.valid) {
      const user = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };
      // console.log(user);

      this.http
        .post('http://localhost:8080/addUser', user, {
          //.post('http://localhost:3000/api/register', user, {
          responseType: 'text',
        })
        .subscribe(
          (response) => {
            console.log('User details send', response);
            this.reactiveForm.reset();
          },
          (error) => {
            console.error('Error registering user', error);
          }
        );
    } else {
      console.log('invalid');
    }
  }

  data: User[] = [];
  getData() {
    this.http
      .get<User[]>('http://localhost:3000/api/userData', {
        responseType: 'json',
      })
      .subscribe(
        (response) => {
          this.data = response;
          console.log(this.data);
        },
        (error) => {
          console.error('Error getting user details', error);
        }
      );
  }
}
