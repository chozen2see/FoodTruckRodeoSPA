import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../_services/contact.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private contactService: ContactService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    // used for reactive forms
    this.contactForm = new FormGroup({
      contactName: new FormControl('', Validators.required),
      contactEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      contactMessage: new FormControl('', Validators.required),
    });
  }

  sendMessage(contactData) {
    this.contactService.PostMessage(contactData).subscribe(
      (response) => {
        this.router.navigate(['/']);
        this.alertify.success('Thank you for your submission. We will contact you shortly!');
      },
      (error) => {
        // console.warn(error.responseText);
        this.alertify.error(error);
      }
    );
  }
}
