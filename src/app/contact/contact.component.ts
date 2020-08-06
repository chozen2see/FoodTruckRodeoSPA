import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // used for reactive forms
    this.contactForm = new FormGroup({
      contactName: new FormControl('', Validators.required),
      contactEmail: new FormControl('', [Validators.required, Validators.email]),
      contactMessage: new FormControl('', Validators.required)
    });
  }

  sendMessage() {
    console.log(this.contactForm.value);
  }

}
