import { FormGroup } from '@angular/forms';

export interface HttpError {
  status: number,
  message: string
};

export interface StepsForm {
  stepOneForm: FormGroup | null,
  stepTwoForm: FormGroup | null,
  stepThreeForm: FormGroup | null
};

export interface DocumentType {
  id: number;
  notation: string;
  description: string;
};

export interface GenderType {
  id: number;
  notation: string;
  description: string;
};