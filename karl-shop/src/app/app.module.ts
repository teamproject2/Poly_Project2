import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { PageNotFoundComponent } from './page-not-found.component';
import { IndexRoutingModule } from './components/index-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { IndexModule } from './components/index.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    IndexRoutingModule,
    AdminModule,
    IndexModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
