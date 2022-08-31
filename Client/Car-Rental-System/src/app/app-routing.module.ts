import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AddEditCarPageComponent} from './add-edit-car-page/add-edit-car-page.component';
import {CarListComponent} from './car-list/car-list.component';
import {CarReturnComponent} from './car-return/car-return.component';
import {DataHoraLocacaoComponent} from './data-hora-locacao/data-hora-locacao.component';
import {FeedbackPageComponent} from './feedback-page/feedback-page.component';
import {OptionsLocacaoComponent} from './options-locacao/options-locacao.component';
import {ClientRegistrationComponent} from './client-registration/client-registration.component'


const routes: Routes = [
  { path: '', component:  HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'addedit', component: AddEditCarPageComponent},
  { path: 'carlist', component: CarListComponent},
  { path: 'carreturn', component: CarReturnComponent},
  { path: 'location', component: DataHoraLocacaoComponent},
  { path: 'feedback', component: FeedbackPageComponent},
  { path: 'options', component: OptionsLocacaoComponent},
  { path: 'clientregistration', component: ClientRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
