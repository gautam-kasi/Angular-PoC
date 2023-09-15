import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = '../assets/users.json';

  constructor(private http: HttpClient) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map((users) => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        console.log(user !== undefined);

        return user !== undefined;
      })
    );
  }

  isAuthenticatedUser(): boolean {
    return ![null, undefined, ''].includes(
      localStorage.getItem('access_token')
    );
  }
}
