import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PageNotFoundComponent } from './page-not-found.component';
import { IndexRoutingModule } from './components/index-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { IndexModule } from './components/index.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,  
  MatInputModule,
  MatIconModule,
  MatRadioModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
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
    IndexModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatPaginatorModule,
    CdkTableModule,
    MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
