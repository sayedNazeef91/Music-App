import { Injectable } from '@angular/core';
import deepEqual from 'deep-equal';

@Injectable()
export class ObjectUtilities {

    constructor() { }

    compareObject(item1, item2, deepComparision:boolean = true) {

        return deepEqual(item1, item2, deepComparision);
    }

}

