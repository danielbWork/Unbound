import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NewSecret} from '../../../model/newSecret';
import {Observable, Subscription} from 'rxjs';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AddItemMatcher} from './AddItemMatcher';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  name = '';
  secret = '';
  allowExport = false;

  @Input() secretEvents: Observable<any>;
  @Output() addSecret: EventEmitter<NewSecret> = new EventEmitter<NewSecret>();

  @ViewChild(NgForm) public myform: NgForm;

  matcher = new AddItemMatcher();

  constructor() {
  }

  ngOnInit(): void {
    this.secretEvents.subscribe(result => {

      if (result.isError) {
        if (result.error.status === 409) {
          this.matcher.usedName = true;
        }
      } else {
        this.matcher.usedName = false;

        this.myform.resetForm();
      }


    });
  }

  onSubmit(): void {

    this.matcher.usedName = false;

    console.log(this.myform);

    const secret: NewSecret = {
      name: this.name,
      text: this.secret,
      allowExport: this.allowExport
    };
    this.addSecret.emit(secret);

  }

  getErrorText(): string {

    return this.matcher.usedName ? 'Already has secret with that name' : 'Secret name can\'t be empty';

  }
}
