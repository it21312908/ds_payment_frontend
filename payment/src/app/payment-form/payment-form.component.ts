import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {

  paymentForm: FormGroup;

  constructor(){
    this.paymentForm = new FormGroup({
      studentID: new FormControl(""),
      course: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      fee: new FormControl(""),
      paymentMethod: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    })
  }

  onsubmit(){
    const isFormValid = this.paymentForm.valid;
    debugger;
  }

}
