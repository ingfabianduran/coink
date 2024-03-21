import { Component, OnInit } from '@angular/core';
import { StepsForm } from '../interface/interfaces';
import { FormGroup } from '@angular/forms';
import { ToastService } from '../services/toast.service';

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

  constructor(private toastService: ToastService) { }

  ngOnInit() {

  }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el primer step del formulario padre.
    * @param $event Evento emitido por el componente hijo.
  */
  onSendFormStepOne($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepOneForm = $event;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el segundo step del formulario padre.
    * @param $event Evento emitido por el componente hijo.
  */
  onSendFormStepTwo($event: FormGroup): void {
    this.step++;
    this.dataStepsForm.stepTwoForm = $event;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el tercer step del formulario padre.
    * @param $event Evento emitido por el componente hijo.
  */
  onSendFormStepThree($event: FormGroup): void {
    this.dataStepsForm.stepThreeForm = $event;
    this.toastService.showToast({ message: 'El cliente se ha registrado' });
  }
}