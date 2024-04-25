import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      course: new FormControl(""),
      fee: new FormControl(""),
      paymentMethod: new FormControl(""),
      description: new FormControl("")
    })
  }

}
