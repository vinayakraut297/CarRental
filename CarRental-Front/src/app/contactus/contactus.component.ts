import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Submitted!', contactForm.value);
      contactForm.reset();
      alert('Thank you for contacting us! We will get back to you soon.');
    }
  }
}
