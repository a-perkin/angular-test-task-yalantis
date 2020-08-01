import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersService } from './users.service';
import { UsersComponent } from './user/users.component';
import { HttpClientModule }    from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeUA from '@angular/common/locales/uk';

registerLocaleData(localeUA);

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, UsersComponent ],
  providers:    [ UsersService, { provide: LOCALE_ID, useValue: 'uk_UA' }, ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
