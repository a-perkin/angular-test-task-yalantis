import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersService } from './users.service';
import { UsersComponent } from './user/users.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, UsersComponent ],
  providers:    [ UsersService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
