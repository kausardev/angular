import { Component } from '@angular/core';
import {ContactService} from './home/contact.service';
import {Contact} from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'positrust';

  constructor(
    private contactService: ContactService) { }
  model = new Contact();
  submitted = false;
  error = {};
  onSubmit(){
    console.log(this.model)
    this.submitted = true;
   
   return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }
}
