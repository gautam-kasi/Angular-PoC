import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
})
export class AnalyticsComponent implements OnInit {
  city: string = "";
  currentWeather: any;
  forecast: any;

  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          this.weatherService.getWeatherByCoords(latitude, longitude).subscribe(
            (data: any) => {
              this.city = data.name;
              this.search();
            },
            (error: any) => {
              console.error("Error fetching weather by coordinates:", error);
            }
          );
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }
  search() {
    let incomingData;
    const groupedData: any = {};
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.currentWeather = data;
    });

    this.weatherService.getForecast(this.city).subscribe((data) => {
      for (const listItem of data.list) {
        const dateOnly = listItem.dt_txt.split(" ")[0];

        if (!groupedData[dateOnly]) {
          groupedData[dateOnly] = [];
        }

        groupedData[dateOnly].push(listItem);
      }

      // Convert groupedData dictionary to a list of objects
      incomingData = Object.entries(groupedData).map(([date, items]) => ({
        date,
        items,
      }));
      this.forecast = { data: data.city, weather: incomingData };
      console.log(this.forecast);
    });
  }
}
