import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}
  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get(`http://localhost:3000/messages?folder=${folder}`)
      .pipe(map((response: any) => response));
  }
}
