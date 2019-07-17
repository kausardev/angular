import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent ,

  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	}
