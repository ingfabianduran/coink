import { Component, OnInit } from '@angular/core';
import { StepsForm } from '../interfaces/interfaces';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  step: number = 1;
  dataStepsForm: StepsForm = {
    stepOneForm: null,
    stepTwoForm: null,
    stepThreeForm: null
  };

  constructor() { }

  ngOnInit() {

  }

  onSendFormStepOne($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepOneForm = $event;
  }

  onSendFormStepTwo($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepTwoForm = $event;
  }

  onSendFormStepThree($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepThreeForm = $event;
  }
}