import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule }  from "ag-grid-angular";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngRx/reducer';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgRxComponent } from './ngRx/ngRx.component';

const appRoutes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'ngRx', component: NgRxComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgRxComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([AppComponent]),
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
