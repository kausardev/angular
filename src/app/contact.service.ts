import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  ServerUrl = 'http://localhost:3000/positrust-backend/';
  errorData  = [];
  HttpOptions = {
    headers: new HttpHeaders({'content-type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  contactForm(formData: Contact){
    return this.http.post<Contact>(this.ServerUrl + 'send'+formData, this.HttpOptions).pipe(
      catchError(this.handleError)
      );
  }

  

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
  
}

