import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { InfoSectionComponent } from './Component/info-section/info-section.component';
import { AboutComponent } from './Component/about/about.component';
import { ValuesComponent } from './Component/values/values.component';
import { FeatureComponent } from './Component/feature/feature.component';
import { EligibleComponent } from './Component/eligible/eligible.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { FaqComponent } from './Component/faq/faq.component';
import { ProfileComponent } from './Component/footer/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoSectionComponent,
    AboutComponent,
    ValuesComponent,
    FeatureComponent,
    EligibleComponent,
    FooterComponent,
    DashboardComponent,
    LayoutComponent,
    FaqComponent,
    ProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
