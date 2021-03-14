import {Component, Input, OnInit} from '@angular/core';
import {Secret} from '../../../model/secret';

@Component({
  selector: 'app-secret-list-item',
  templateUrl: './secret-list-item.component.html',
  styleUrls: ['./secret-list-item.component.css']
})
export class SecretListItemComponent implements OnInit {

  @Input() secret: Secret;

  constructor() {
  }

  ngOnInit(): void {
  }

}
