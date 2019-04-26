import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  message = 'Today is Happy day!';

  //Create new email and binding value when type in input
  email = new FormControl('');

  //Update email when click update email
  updateEmail() {
    this.email.setValue('honghuynhit@gmail.com');
  }

  //Reset email from form control
  resetEmail() {
    this.email.reset('');
  }

  //Onchange model
  modelChanged(Object) {
    var Object = Object;
    console.log(Object);
  }
}
