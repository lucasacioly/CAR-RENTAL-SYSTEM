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


const routes: Routes = [
  { path: '', component:  HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'addcar', component: AddCarPageComponent},
  { path: 'carlist', component: CarListComponent},
  { path: 'carreturn', component: CarReturnComponent},
  { path: 'location', component: LocationPageComponent},
  { path: 'feedback', component: FeedbackPageComponent},
  { path: 'options', component: OptionsLocationComponent},
  { path: 'clientregistration', component: ClientRegistrationComponent},
  { path: 'editcar', component: EditCarPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
