import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AnalyticsComponent } from './analytics/analytics.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ApplicationsComponent } from './applications/applications.component';

import { SettingsComponent } from './settings/settings.component';
import { TablayoutComponent } from './tablayout/tablayout.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AnalyticsComponent,
    OpportunitiesComponent,
    ApplicationsComponent,
    SettingsComponent,
    TablayoutComponent,
    ForecastComponent,
    CurrentWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
