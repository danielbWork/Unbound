import {Component, OnInit} from '@angular/core';
import {Secret} from '../../../model/secret';
import {SecretsService} from '../../../service/secrets.service';
import {NewSecret} from '../../../model/newSecret';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-secret-list',
  templateUrl: './secret-list.component.html',
  styleUrls: ['./secret-list.component.css']
})
export class SecretListComponent implements OnInit {

  secrets: Secret[];

  secretAdded = new Subject<any>();

  constructor(private secretService: SecretsService) {
  }

  ngOnInit(): void {
    this.secretService.getSecretList().subscribe(secrets => this.secrets = secrets);

  }

  addSecret(newSecret: NewSecret): void {
    this.secretService.addSecret(newSecret).subscribe(secret => {
        this.secrets.push(secret);
        this.secretAdded.next({isError: false});
      },
      error => {
        this.secretAdded.next({isError: true, error});
      });
  }
}
