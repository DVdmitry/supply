import { Component, OnInit } from '@angular/core';
import { COMPANIES } from './company-model.component';
import { Company } from './company-model.component';

@Component({
  moduleId: module.id,
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.css']
})
export class CompanysComponent implements OnInit {
    public companies = COMPANIES;

  constructor() { }

  ngOnInit() {
  }

}
