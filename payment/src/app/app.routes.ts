import { Routes } from '@angular/router';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'payment',
        component: PaymentFormComponent,
    },
];
