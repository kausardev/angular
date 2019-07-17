import { Injectable } from '@angular/core';
import { Contact } from './../contact';
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
ServerUrl = 'http://localhost:3000/';
  errorData  = [];
  HttpOptions = {
    headers: new HttpHeaders({'content-type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  contactForm(formData: Contact){
    //console.log(formData)
    return this.http.post<Contact>(this.ServerUrl + 'send',formData).pipe(
      catchError(this.handleError)
      );
  }

  

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
	  //errorMessage = `${error.status}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
	  //errorMessage = `${error.status}`;
    }
	//console.log(errorMessage);
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
  
}

