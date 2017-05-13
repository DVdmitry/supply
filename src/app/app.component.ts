import { Component, OnInit } from '@angular/core';
import  {HomeComponent} from './home/home.component';
import { Select } from './class-type';
import { LinkArray } from './class-type';
import { CategorySelectors } from './class-type';
import { SubCategorySelectors } from './class-type';
import { ArrayTM } from './class-type';
import { DataService } from './service.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

    linkArray: LinkArray[];
    categorySelectors: CategorySelectors[];
    subCategorySelectors: SubCategorySelectors[];
    arrayTM: ArrayTM[];
    buildInstruments: SubCategorySelectors[];

    constructor (private dataService: DataService){};


    ngOnInit(): void{
        this.getLinkArray();
        this.getCategorySelectors();
        this.getArrayTM();
    };

    getLinkArray(): void {
        this.linkArray = this.dataService.getLinkArray();
    };

    getCategorySelectors(): void {
        this.categorySelectors = this.dataService.getCategorySelectors();
    };


    getArrayTM(): void {
        this.arrayTM = this.dataService.getArrayTM();
    };

    activeSearch = {
        category : "",
        subCategory : "",
        TM : ""
    };

    getCL (): void{
        this.subCategorySelectors = this.dataService.getSubCategorySelectors(this.activeSearch.category);
    }

}
