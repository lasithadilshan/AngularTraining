import { Component } from '@angular/core';

@Component({
  selector: 'arc-tutorials-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTraining';

  success_msg = true;

  contacts = [
    {
      'firstName' : 'ARC',
      'lastName'  : 'Tutorials',
      'contactId' : 1234
    },
    {
      'firstName' : 'Mark',
      'lastName'  : 'Hender',
      'contactId' : 6767
    },
    {
      'firstName' : 'Ben',
      'lastName'  : 'Strokes',
      'contactId' : 3434
    }
  ]
  
}
