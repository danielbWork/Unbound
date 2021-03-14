import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Secret} from '../model/secret';
import {NewSecret} from '../model/newSecret';
import * as uuid from 'uuid';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SecretsService {

  secretsUrl = 'http://localhost:3000/secrets/';

  constructor(private http: HttpClient) {
  }

  getSecretList(): Observable<Secret[]> {
    return this.http.get<Secret[]>(this.secretsUrl);
  }

  addSecret(newSecret: NewSecret): Observable<Secret> {
    return this.http.post<Secret>(this.secretsUrl, newSecret, httpOptions);
  }

  getSecret(id: string): Observable<Secret> {
    return this.http.get<Secret>(`${this.secretsUrl}${id}`);
  }
}
