import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.css'],
})
export class StepOneFormComponent implements OnInit {
  @Input() formOneStep: FormGroup = new FormGroup({});
  @Output() sendOneForm: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que envia los datos del formulario al componente padre.
  */
  onSubmitForm(): void {
    if (this.formOneStep.valid) this.sendOneForm.emit();
    else this.formOneStep.markAllAsTouched();
  }
}