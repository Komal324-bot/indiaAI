import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { authGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: LayoutComponent }, 
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },  //logged-in users can access the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
