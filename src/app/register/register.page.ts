import { Component, OnInit } from '@angular/core';
import { StepsForm } from '../interface/interfaces';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  step: number = 1;
  nameStep: string[] = ['NÚMERO CELULAR', 'DATOS DE CUENTA', 'FINALIZAR'];
  dataStepsForm: StepsForm = {
    stepOneForm: null,
    stepTwoForm: null,
    stepThreeForm: null
  };

  constructor() { }

  ngOnInit() {

  }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el primer step del formulario padre.
  */
  onSendFormStepOne($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepOneForm = $event;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el segundo step del formulario padre.
  */
  onSendFormStepTwo($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepTwoForm = $event;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el tercer step del formulario padre.
  */
  onSendFormStepThree($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepThreeForm = $event;
  }
}