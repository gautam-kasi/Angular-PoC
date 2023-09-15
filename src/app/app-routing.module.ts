import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AnalyticsComponent } from './analytics/analytics.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ApplicationsComponent } from './applications/applications.component';
import { SettingsComponent } from './settings/settings.component';
import { TablayoutComponent } from './tablayout/tablayout.component';

const routes: Routes = [
  {
    path: '',
    component: TablayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'opportunities',
        component: OpportunitiesComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'applications',
        component: ApplicationsComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'org-settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },

  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
