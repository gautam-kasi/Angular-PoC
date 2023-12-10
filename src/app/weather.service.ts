// weather.service.ts
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private apiKey = "a39bdb004b8617fa21963143c965895e";
  private apiUrl = "https://api.openweathermap.org/data/2.5";

  constructor(private http: HttpClient) {}
  getWeatherByCoords(latitude: number, longitude: number): Observable<any> {
    const url = `${this.apiUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error("An error occurred:", error.error.message || error.message);
    return throwError("Something went wrong. Please try again later.");
  }
}
