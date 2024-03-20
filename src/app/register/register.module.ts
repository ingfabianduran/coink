import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { StepOneFormComponent } from './step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './step-two-form/step-two-form.component';
import { StepThreeFormComponent } from './step-three-form/step-three-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [
    RegisterPage,
    StepOneFormComponent,
    StepTwoFormComponent,
    StepThreeFormComponent
  ]
})
export class RegisterPageModule { }
