import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usersUrl = "../assets/users.json";
  public error: string = "";
  constructor(private http: HttpClient) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map((users) => {
        const user = users.find((u) => u.email === username || u.mobile === username);

        if (user) {
          if (user.password === password) {
            // User with the provided username and matching password found
            console.log("Login successful");
            localStorage.setItem("access_token", username);
            return true;
          } else {
            // Username exists, but password is incorrect
            this.error = "Incorrect password";
            return false;
          }
        } else {
          // Username not found
          this.error = "Username not found";
          return false;
        }
      })
    );
  }

  isAuthenticatedUser(): boolean {
    return ![null, undefined, ""].includes(localStorage.getItem("access_token"));
  }
}
