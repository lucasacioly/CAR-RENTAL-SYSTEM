import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { OptionsLocationComponent } from './options-location-page/options-location-page.component';
import { CarReturnComponent } from './car-return/car-return.component';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { AddCarPageComponent } from './add-car-page/add-car-page.component';
import { CarListComponent } from './car-list/car-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CarListCardComponent } from './car-list-card/car-list-card.component';
import { ListFiltersComponent } from './list-filters/list-filters.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { EditCarPageComponent } from './edit-car-page/edit-car-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CarHistoryComponent } from './car-history/car-history.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FeedbackPageComponent,
    LocationPageComponent,
    OptionsLocationComponent,
    CarReturnComponent,
    CardFeedbackComponent,
    AddCarPageComponent,
    CarListComponent,
    LoginPageComponent,
    CarListCardComponent,
    ListFiltersComponent,
    ClientRegistrationComponent,
    EditCarPageComponent,
    CarHistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
