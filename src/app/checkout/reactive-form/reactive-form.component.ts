import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      phNo: ['', Validators.required],
    });
  }

  getFormData() {
    if (this.contactForm.valid) {
      console.log('Fomr Data: ', this.contactForm.value);
      alert('your data store in console');
      this.router.navigate(['//products']);
    }
  }
}
