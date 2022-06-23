import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  getUsers(): Observable<Array<IUser>> {
    return this.httpClient.get<Array<IUser>>(
      'https://jsonplaceholder.typicode.com/posts/1/users'
    );
  }
}
