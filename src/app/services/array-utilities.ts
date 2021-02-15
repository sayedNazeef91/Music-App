import { Injectable } from '@angular/core';

@Injectable()
export class ArrayUtilities {

    constructor() {

    }

    // array : is the object array needs to be sort
    // field : is the name of data field on which basic the array should be sort
    // order : is the order to sort the array by default it is true it will sort the array in ascending order
    sortObjectArray(array: Array<any>, field: string, order = true, isString?: boolean) {

        array = array || [];
        array.sort((a: any, b: any) => {

            const key1 = !!isString ? (a[field] || '').toLowerCase() : a[field];
            const key2 = !!isString ? (b[field] || '').toLowerCase() : b[field];
            if (key1 < key2) {

                return order ? -1 : 1;
            } else if (key1 > key2) {

                return order ? 1 : -1;
            } else {

                return 0;
            }
        });
        return array;
    }

    intersectionOfArrays(array1: Array<any>, array2: Array<any>) {

        let setA = new Set(array1);
        let setB = new Set(array2);
        let intersection = new Set([...setA].filter(x => setB.has(x)));
        return Array.from(intersection);
    }

    arrayToObject(dataArray: Array<any>, keyField: string, valueField: string) {

        return (dataArray || []).reduce((obj, item) => {

          obj[item[keyField]] = item[valueField];
          return obj;
        }, {});
    }

    objectToArray(dataObject: object, keyName: string, valueKeyName: string, defaultValue: any) {

        let dataArray = [];
        defaultValue = defaultValue || {};
        Object.keys(dataObject || {}).forEach((key) => {

            let item = {};
            item[keyName] = key;
            item[valueKeyName] = dataObject[key];
            Object.assign(item, defaultValue);
            dataArray.push(item);
        });
        return dataArray;
    }

    move(arr, from, to) {

        arr = arr || [];
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
    }
}

