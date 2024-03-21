import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocumentType, GenderType } from '../../interface/interfaces';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.css'],
})
export class StepTwoFormComponent implements OnInit {
  @Output() sendTwoForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  typesDocument: DocumentType[] = [];
  typesGender: GenderType[] = [
    { id: 1, description: 'Femenino', notation: 'F' },
    { id: 2, description: 'Masculino', notation: 'M' }
  ];
  formTwoStep: FormGroup = new FormGroup({
    typeDocument: new FormControl('', [Validators.required]),
    document: new FormControl('', [Validators.required]),
    expeditionDate: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email]),
    securityPin: new FormControl('', [Validators.required]),
    confirmSecurityPin: new FormControl('', [Validators.required]),
  });

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.getTypesDocument();
  }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-21
    * Metodo que retorna los tipos de documento.
  */
  getTypesDocument(): void {
    this.registerService.getTypesDocument().subscribe(res => {
      this.typesDocument = res;
    });
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que envia los datos del formulario al componente padre.
  */
  onSubmitForm(): void {
    if (this.formTwoStep.valid) this.sendTwoForm.emit(this.formTwoStep);
    else this.formTwoStep.markAllAsTouched();
  }
}