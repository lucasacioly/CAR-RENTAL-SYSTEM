import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { DataHoraLocacaoComponent } from './data-hora-locacao/data-hora-locacao.component';
import { OptionsLocacaoComponent } from './options-locacao/options-locacao.component';
import { CarReturnComponent } from './car-return/car-return.component';
import { CardFeedbackComponent } from './card-feedback/card-feedback.component';
import { AddEditCarPageComponent } from './add-edit-car-page/add-edit-car-page.component';
import { CarListComponent } from './car-list/car-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CarListCardComponent } from './car-list-card/car-list-card.component';
import { ListFiltersComponent } from './list-filters/list-filters.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { EditCarPageComponent } from './edit-car-page/edit-car-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    FeedbackPageComponent,
    DataHoraLocacaoComponent,
    OptionsLocacaoComponent,
    CarReturnComponent,
    CardFeedbackComponent,
    AddEditCarPageComponent,
    CarListComponent,
    LoginPageComponent,
    CarListCardComponent,
    ListFiltersComponent,
    ClientRegistrationComponent,
    EditCarPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
