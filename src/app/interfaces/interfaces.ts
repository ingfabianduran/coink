import { FormGroup } from '@angular/forms';

export interface StepsForm {
  stepOneForm: FormGroup | null,
  stepTwoForm: FormGroup | null,
  stepThreeForm: FormGroup | null
};