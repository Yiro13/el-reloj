import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ContactModule { }
