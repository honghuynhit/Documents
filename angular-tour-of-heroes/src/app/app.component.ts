/*
 * @Author: honghuynhit 
 * @Date: 2019-04-26 17:24:58 
 * @Last Modified by: honghuynhit
 * @Last Modified time: 2019-04-26 21:50:27
 */

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
  listContact = [];
  contact = {};
  id: number;
  

  //Update email when click update email
  updateEmail() {
    this.email.setValue('honghuynhit@gmail.com');
    
  }

  //Function add contact
  addContact(){
    if(!this.email.value){
      console.log('This value is empty');
      return;
    }
    
    //check last id;
    this.id = this.listContact.length;

    //Add address to listContact
    this.listContact.push(
      {id: this.id + 1, email: this.email.value}
    );
    
  }

  //Reset email from form control
  resetEmail() {
    this.email.reset('');
  }

  //Onchange model
  modelChanged(Object) {
    var Object = Object;
    if(!Object){
      console.log('This value is empty!');
      return;
    }
    console.log(Object);
  }

  //Reset list contact
  resetList(){
    this.listContact.length = 0;
  }
}
