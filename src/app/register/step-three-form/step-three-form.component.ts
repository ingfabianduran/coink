import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrls: ['./step-three-form.component.css'],
})
export class StepThreeFormComponent implements OnInit {
  @Input() formThreeStep: FormGroup = new FormGroup({});
  @Output() sendThreeForm: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que envia los datos del formulario al componente padre.
  */
  onSubmitForm(): void {
    if (this.formThreeStep.valid) this.sendThreeForm.emit();
    else this.formThreeStep.markAllAsTouched();
  }
}