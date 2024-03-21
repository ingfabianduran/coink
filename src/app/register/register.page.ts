import { Component, OnInit } from '@angular/core';
import { StepsForm } from '../interface/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  step: number = 1;
  nameStep: string[] = ['NÚMERO CELULAR', 'DATOS DE CUENTA', 'FINALIZAR'];
  dataStepsForm: StepsForm = {
    stepOneForm: new FormGroup({
      phone: new FormControl('', [Validators.required])
    }),
    stepTwoForm: new FormGroup({
      typeDocument: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
      expeditionDate: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
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
    private toastService: ToastService,
    private router: Router,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {

  }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el primer step del formulario padre.
    * @param $event Evento emitido por el componente hijo.
  */
  onSendFormStepOne(): void {
    this.step++;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el segundo step del formulario padre.
    * @param $event Evento emitido por el componente hijo.
  */
  onSendFormStepTwo(): void {
    this.step++;
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que setea el tercer step del formulario padre.
    * @param $event Evento emitido por el componente hijo.
  */
  async onSendFormStepThree(): Promise<void> {
    const loader = await this.loaderService.showLoader({ message: 'Por favor espere...' });
    setTimeout(async () => {
      const toast = await this.toastService.showToast({ message: 'El cliente se ha registrado' });
      this.loaderService.hideLoader(loader);
      console.log('Información del cliente', this.dataStepsForm);
      toast.onDidDismiss().then(() => {
        this.router.navigate(['login']);
      });
    }, 3000);
  }
}