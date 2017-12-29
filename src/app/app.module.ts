import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatTabsModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { BlogCard } from './shared/blog_card/blog_card';
import { BodyComponent } from './body/body_component';
import { PublicationCard } from './shared/publication_card/publication_card';
import { HeroDetailComponent } from './shared/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogCard,
    BodyComponent,
    PublicationCard,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
