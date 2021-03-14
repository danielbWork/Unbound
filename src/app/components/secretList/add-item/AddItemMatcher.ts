import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class AddItemMatcher implements ErrorStateMatcher {

  usedName = false;

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return this.usedName || (control.invalid && control.dirty);
  }

}
