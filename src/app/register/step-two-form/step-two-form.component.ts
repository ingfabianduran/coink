import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DocumentType, GenderType } from '../../interface/interfaces';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.css'],
})
export class StepTwoFormComponent implements OnInit {
  @Input() formTwoStep: FormGroup = new FormGroup({});
  @Output() sendTwoForm: EventEmitter<void> = new EventEmitter<void>();
  typesDocument: DocumentType[] = [];
  typesGender: GenderType[] = [
    { id: 1, description: 'Femenino', notation: 'F' },
    { id: 2, description: 'Masculino', notation: 'M' }
  ];

  constructor(
    private registerService: RegisterService,
  ) { }

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
    if (this.formTwoStep.valid) this.sendTwoForm.emit();
    else this.formTwoStep.markAllAsTouched();
  }
}