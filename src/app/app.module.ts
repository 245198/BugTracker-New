import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugupdationComponent } from './bugupdation/bugupdation.component';
import { BComponent } from './bugdashboard/b.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreatebugComponent } from './createbug/createbug.component';

@NgModule({
  declarations: [
    AppComponent,
    BugupdationComponent,
    BComponent,
    AboutComponent,
    ContactComponent,
    CreatebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
