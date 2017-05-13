import { Component, OnInit } from '@angular/core';
import { InstrumentSelector } from '../class-type';
import { DataService } from '../service.data';

@Component({
  selector: 'app-select-panel',
  templateUrl: './select-panel.component.html',
  styleUrls: ['./select-panel.component.css']

})

export class SelectPanelComponent implements OnInit {

    instrumentSelectors: InstrumentSelector[];
    routerLink: string;

    constructor (private dataService: DataService){};

      ngOnInit() {
          this.getInstrumentSelectors();
      }

      getInstrumentSelectors(){
          this.instrumentSelectors = this.dataService.getInstrumentSelectors();
      }


}
