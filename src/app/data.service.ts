import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class DataService {
  

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  getUsers() {
    return this.http.get('http://demo.dinsnatural.com/public/members');
  }

  setUser(formData) {
    // const formData = new FormData();
    // formData.append('username', 'Groucho');

    return this.http.post('http://demo.dinsnatural.com/public/register', formData).subscribe(
      (res) =>  this.router.navigate(["/home"]),
      (err) => console.log(err)
    );

  }
}
