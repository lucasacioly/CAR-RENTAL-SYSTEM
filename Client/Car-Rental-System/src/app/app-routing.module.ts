import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AddCarPageComponent} from './add-car-page/add-car-page.component';
import {CarListComponent} from './car-list/car-list.component';
import {CarReturnComponent} from './car-return/car-return.component';
import {LocationPageComponent} from './location-page/location-page.component';
import {FeedbackPageComponent} from './feedback-page/feedback-page.component';
import {OptionsLocationComponent} from './options-location-page/options-location-page.component';
import {ClientRegistrationComponent} from './client-registration/client-registration.component';
import { EditCarPageComponent } from './edit-car-page/edit-car-page.component';
import { CarHistoryComponent } from './car-history/car-history.component';

const routes: Routes = [
  { path: '', component:  HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'addcar', component: AddCarPageComponent},
  { path: 'carlist', component: CarListComponent},
  { path: 'carreturn/:id', component: CarReturnComponent},
  { path: 'location/:id', component: LocationPageComponent},
  { path: 'feedback/:id', component: FeedbackPageComponent},
  { path: 'options/:id', component: OptionsLocationComponent},
  { path: 'clientregistration', component: ClientRegistrationComponent},
  { path: 'editcar/:id', component: EditCarPageComponent},
  { path: 'carhistory', component: CarHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
