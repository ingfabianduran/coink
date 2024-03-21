import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrls: ['./step-three-form.component.css'],
})
export class StepThreeFormComponent implements OnInit {
  @Output() sendThreeForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  formThreeStep: FormGroup = new FormGroup({
    acceptContract: new FormControl(false, [Validators.required])
  });

  constructor() { }

  ngOnInit() { }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-20
    * Metodo que envia los datos del formulario al componente padre.
  */
  onSubmitForm(): void {
    if (this.formThreeStep.valid) this.sendThreeForm.emit(this.formThreeStep);
    else this.formThreeStep.markAllAsTouched();
  }
}