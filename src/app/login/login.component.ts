import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  @Input() credentials: any = {
    username: "",
    password: "",
  };
  passwordFieldType = "password";
  showPassword = false;
  public error = {
    message: "",
    alert: false,
  };
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    this.showPassword = !this.showPassword;
  }
  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticatedUser()) {
      this.router.navigate(["/dashboard"], { replaceUrl: true });
    }
  }

  closeError(value: any) {
    this.error.alert = value;
  }

  onCredSubmit() {
    const { username, password } = this.credentials;
    console.log(username);
    this.authService.authenticate(username, password).subscribe({
      next: (isValid) => {
        if (isValid) {
          console.log("Login successful");
          localStorage.setItem("access_token", this.credentials.username);
          this.router.navigate(["/dashboard"], { replaceUrl: true });
        } else {
          // console.log("Invalid username or password");
          this.error = { message: this.authService.error, alert: true };
        }
      },
      error: (error) => {},
    });
  }
}
