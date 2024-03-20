import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrls: ['./step-one-form.component.scss'],
})
export class StepOneFormComponent implements OnInit {
  @Output() sendOneForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  formOneStep: FormGroup = new FormGroup({
    phone: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() { }

  onSubmitForm(): void {
    if (this.formOneStep.valid) this.sendOneForm.emit(this.formOneStep);
    else this.formOneStep.markAllAsTouched();
  }
}