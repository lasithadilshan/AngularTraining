import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadsListingComponent } from './leads/leads-listing/leads-listing.component';
import { HighlightDirective } from './highlight.directive';
// import { ProfileModule } from '';

@NgModule({
  declarations: [
    AppComponent,
    LeadsListingComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
