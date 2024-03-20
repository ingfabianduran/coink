import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrls: ['./step-two-form.component.scss'],
})
export class StepTwoFormComponent implements OnInit {
  @Output() sendTwoForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
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

  constructor() { }

  ngOnInit() { }

  onSubmitForm(): void {
    if (this.formTwoStep.valid) this.sendTwoForm.emit(this.formTwoStep);
    else this.formTwoStep.markAllAsTouched();
  }
}
