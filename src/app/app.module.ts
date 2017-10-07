import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatTabsModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import {PrimeCard} from './shared/prime_card';
import {BodyComponent} from './body/body_component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeCard,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
