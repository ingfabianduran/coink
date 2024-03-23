import { Component, OnInit } from '@angular/core';
import { StepsForm } from '../interface/interfaces';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { ModalController } from '@ionic/angular';
import { ModalSuccessComponent } from './modal-success/modal-success.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  step: number = 1;
  nameStep: string[] = ['NÚMERO CELULAR', 'DATOS DE CUENTA', 'FINALIZAR'];
  nameImgStep: string[] = ['assets/images/step_1.png', 'assets/images/step_2.png', 'assets/images/step_3.png'];
  dataStepsForm: StepsForm = {
    stepOneForm: new FormGroup({
      phone: new FormControl('', [Validators.required])
    }),
    stepTwoForm: new FormGroup({
      typeDocument: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
      expeditionDate: new FormControl('00/00/0000', [Validators.required]),
      birthdate: new FormControl('00/00/0000', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      confirmEmail: new FormControl('', [Validators.required, Validators.email]),
      securityPin: new FormControl('', [Validators.required]),
      confirmSecurityPin: new FormControl('', [Validators.required]),
    }),
    stepThreeForm: new FormGroup({
      acceptContract: new FormControl(false, [Validators.required])
    })
  };

  constructor(
    private loaderService: LoaderService,
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataStepsForm.stepTwoForm.get('confirmEmail')?.setValidators([Validators.required, Validators.email, this.matchValidator('email')]);
    this.dataStepsForm.stepTwoForm.get('confirmSecurityPin')?.setValidators([Validators.required, this.matchValidator('securityPin')]);
    this.dataStepsForm.stepTwoForm.get('confirmEmail')?.updateValueAndValidity();
    this.dataStepsForm.stepTwoForm.get('confirmSecurityPin')?.updateValueAndValidity();
  }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-22
    * Metodo que resta el valor del step y si esta en 1 entonces redirecciona al login.
  */
  onClickButtonBack(): void {
    let tempStep = this.step;
    tempStep--;
    this.step = tempStep === 0 ? 1 : tempStep;
    if (tempStep === 0) this.router.navigate(['login']);
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el primer step del formulario padre.
  */
  onSendFormStepOne(): void {
    this.step++;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el segundo step del formulario padre.
  */
  onSendFormStepTwo(): void {
    this.step++;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el tercer step del formulario padre.
  */
  async onSendFormStepThree(): Promise<void> {
    const loader = await this.loaderService.showLoader({ message: 'Por favor espere...' });
    setTimeout(async () => {
      console.log('Informacion del formulario', this.dataStepsForm);
      this.loaderService.hideLoader(loader);
      const modal = await this.modalController.create({
        component: ModalSuccessComponent,
        cssClass: 'custom-modal'
      });
      modal.present();
    }, 3000);
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-22
    * Validacion personalizada que compara si dos campos son iguales.
    * @param matchTo Campo a comparar.
  */
  matchValidator(matchTo: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const field = this.dataStepsForm.stepTwoForm.get(matchTo)?.value;
      const fieldToCompare = control.value;
      if (!fieldToCompare || !field) return null;
      if (field !== fieldToCompare) return { matchValidator: true };
      if (field === fieldToCompare) return null;
      return null;
    };
  }
}