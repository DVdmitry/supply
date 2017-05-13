import { Injectable } from '@angular/core';
import { LinkArray } from './class-type';
import { CategorySelectors } from './class-type';
import { SubCategorySelectors } from './class-type';
import { ArrayTM } from './class-type';
import { InstrumentSelector } from './class-type';

import { LINKARRAY } from './data';
import { CATEGORYSELECTORS } from './data';
import { SUBCATEGORYSELECTORS } from './data';
import { ARRAYTM } from './data';
import { INSTRUMENTSELECTORS } from './data';
import { BUILDINSTRUMENTS } from './data';
import { BUILDMATERIALS } from './data';
import { TAPS } from './data';
import { GARDEN } from './data';
import { HOZ } from './data';
import { KANC } from './data';
import { ELECTRO } from './data';

@Injectable()
export class DataService{
    getLinkArray(): LinkArray[]{
        return LINKARRAY;
    };

    getCategorySelectors(): CategorySelectors[]{
        return CATEGORYSELECTORS;
    };

    getSubCategorySelectors(val): SubCategorySelectors[]{
        if (val === "BUILDINSTRUMENTS"){
        return BUILDINSTRUMENTS;
    };
        if (val === "BUILDMATERIALS"){
        return BUILDMATERIALS;
    };
        if (val === "TAPS"){
        return TAPS;
    };
        if (val === "ELECTRO"){
        return ELECTRO;
    };
        if (val === "GARDEN"){
        return GARDEN;
    };
        if (val === "HOZ"){
        return HOZ;
    };
        if (val === "KANC"){
        return KANC;
    };
    };

    getArrayTM(): ArrayTM[] {
        return ARRAYTM;
    }

    getInstrumentSelectors(): InstrumentSelector[]{
        return INSTRUMENTSELECTORS;
    }

}
