import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app.routing'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SelectPanelComponent } from './select-panel/select-panel.component';
import { CompanysComponent } from './companys/companys.component';
import { DataService } from './service.data';

const appRoutes:Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "instrument",
        component : SelectPanelComponent
    },
    {
        path: "companies",
        component: CompanysComponent
    }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectPanelComponent,
    CompanysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
