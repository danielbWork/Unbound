import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Secret} from '../../model/secret';
import {SecretsService} from '../../service/secrets.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  secret: Secret;
  secretFound: boolean;

  constructor(private route: ActivatedRoute, private secretService: SecretsService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id: string = params.secretId;

      this.secretService.getSecret(id).subscribe(secret => {
        this.secret = secret;
        console.log(secret.name);
        this.secretFound = true;
      });
    }, error => {
      if (error.status === 404) {
        this.secretFound = false;
      }
    });

  }

  getTitleText(): string {
    return this.secretFound ? this.secret.name : 'No Such Secret';
  }

}
