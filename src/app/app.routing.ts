import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectPanelComponent } from './select-panel/select-panel.component';
import { CompanysComponent } from './companys/companys.component';

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

@NgModule ({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule{}
