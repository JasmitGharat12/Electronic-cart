import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetUserDataService {
  constructor(private http: HttpClient) {}
  data: string = '';
  getData() {
    this.http
      .get('http://localhost:3000/api/userData', { responseType: 'text' })
      .subscribe(
        (response: string) => {
          this.data = response;
          console.log('got User details', response);
        },
        (error) => {
          console.error('Error getting user details', error);
        }
      );
      return this.data
  }


}
