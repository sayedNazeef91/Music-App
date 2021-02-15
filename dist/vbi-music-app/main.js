(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+mDg":
/*!*********************************************!*\
  !*** ./src/app/services/array-utilities.ts ***!
  \*********************************************/
/*! exports provided: ArrayUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtilities", function() { return ArrayUtilities; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ArrayUtilities {
    constructor() {
    }
    // array : is the object array needs to be sort
    // field : is the name of data field on which basic the array should be sort
    // order : is the order to sort the array by default it is true it will sort the array in ascending order
    sortObjectArray(array, field, order = true, isString) {
        array = array || [];
        array.sort((a, b) => {
            const key1 = !!isString ? (a[field] || '').toLowerCase() : a[field];
            const key2 = !!isString ? (b[field] || '').toLowerCase() : b[field];
            if (key1 < key2) {
                return order ? -1 : 1;
            }
            else if (key1 > key2) {
                return order ? 1 : -1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
    intersectionOfArrays(array1, array2) {
        let setA = new Set(array1);
        let setB = new Set(array2);
        let intersection = new Set([...setA].filter(x => setB.has(x)));
        return Array.from(intersection);
    }
    arrayToObject(dataArray, keyField, valueField) {
        return (dataArray || []).reduce((obj, item) => {
            obj[item[keyField]] = item[valueField];
            return obj;
        }, {});
    }
    objectToArray(dataObject, keyName, valueKeyName, defaultValue) {
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
ArrayUtilities.ɵfac = function ArrayUtilities_Factory(t) { return new (t || ArrayUtilities)(); };
ArrayUtilities.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArrayUtilities, factory: ArrayUtilities.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayUtilities, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\Orion-webapp-new-1\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    apiBaseUrl: '',
};


/***/ }),

/***/ "EkNo":
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_array_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/array-utilities */ "+mDg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");









const _c0 = ["tabContent"];
function TabsComponent_div_0_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r3.text, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tab_r3.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.matIcon);
} }
function TabsComponent_div_0_span_2_span_3_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_div_0_span_2_span_3_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const menuItem_r10 = ctx.$implicit; const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.tabChange(menuItem_r10, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-tab-menu", ctx_r9.selectedTab === menuItem_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", menuItem_r10.tabClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r10.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r10.matIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", menuItem_r10.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TabsComponent_div_0_span_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_div_0_span_2_span_3_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TabsComponent_div_0_span_2_span_3_button_10_Template, 6, 6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tab_r3.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.matIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", tab_r3.menuWrapperClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r3.menu);
} }
function TabsComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_div_0_span_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.tabChange(tab_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabsComponent_div_0_span_2_span_2_Template, 7, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabsComponent_div_0_span_2_span_3_Template, 11, 6, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-tab", i_r4 == ctx_r1.selectedIndex)("left-border", i_r4 != 0 && i_r4 != ctx_r1.selectedIndex + 1 && i_r4 != ctx_r1.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", tab_r3.tabClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tab_r3.showMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!tab_r3.showMenu);
} }
function TabsComponent_div_0_div_3_ng_template_1_Template(rf, ctx) { }
function TabsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_div_0_div_3_ng_template_1_Template, 0, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return {}; };
const _c2 = function () { return []; };
function TabsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabsComponent_div_0_span_2_Template, 4, 7, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabsComponent_div_0_div_3_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.tabData.tabWrapperClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (ctx_r0.tabData || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1)).tabs || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tabData.useComponents);
} }
class TabsComponent {
    constructor(router, componentFactoryResolver, arrayUtils) {
        this.router = router;
        this.componentFactoryResolver = componentFactoryResolver;
        this.arrayUtils = arrayUtils;
        this.tabChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.tabData = (this.tabConfig || {});
        if (this.tabData.display == undefined || !!this.tabData.display) {
            this.tabData.display = true;
            if (this.tabData.sortingField != undefined) {
                this.tabData.tabs = this.arrayUtils.sortObjectArray(this.tabData.tabs, this.tabData.sortingField, this.tabData.sortAsc);
            }
            let menuItems = [];
            this.tabData.tabs = (this.tabData.tabs || []).filter(tab => {
                if (tab.display != undefined && !tab.display) {
                    return false;
                }
                else if (!!tab.isMenuItem) {
                    menuItems.push(tab);
                    return false;
                }
                return true;
            });
            if (!!(this.tabData.menuConfig || {}).display && menuItems.length > 0) {
                (this.tabData.menuConfig || {})['menu'] = menuItems;
                (this.tabData.menuConfig || {})['showMenu'] = true;
                this.tabData.tabs.push(this.tabData.menuConfig);
            }
        }
    }
    ngAfterViewInit() {
        let thisRef = this;
        setTimeout(() => {
            let tabsArray = (thisRef.tabData.tabs || []);
            if (!!this.selectedTab) {
                for (let i = 0; i < (tabsArray || []).length; i++) {
                    if (!!tabsArray[i]['showMenu']) {
                        (tabsArray[i].isMenuItem || []).forEach(element => {
                            if (element.value === thisRef.selectedTab) {
                                (!!thisRef.tabData.useComponents) ? thisRef.tabChange(element, i) : thisRef.selectedIndex = i;
                            }
                        });
                    }
                    else if (tabsArray[i].value === thisRef.selectedTab) {
                        (!!thisRef.tabData.useComponents) ? thisRef.tabChange(thisRef.tabData.tabs[i], i) : thisRef.selectedIndex = i;
                        break;
                    }
                }
            }
            else if (!!thisRef.tabData.useComponents) {
                thisRef.tabChange((tabsArray[0] || {}), 0);
            }
        }, 200);
    }
    tabChange(tab, index) {
        this.tabChanged.emit(tab);
        this.selectedIndex = index;
        this.selectedTab = tab.value;
        if (this.tabData.useComponents) {
            this.loadComponent(tab, index);
        }
        else {
            this.router.navigateByUrl(tab.link);
        }
    }
    loadComponent(value, index) {
        try {
            for (let i = 0; i < (this.tabData || []).length; i++) {
                this.tabData[i]["active"] = (i === index);
            }
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(value.containerRef);
            this.tabContent.clear();
            const dynamicComponent = this.tabContent.createComponent(componentFactory).instance;
            if (dynamicComponent['tabEvent'] !== undefined) {
                dynamicComponent['tabEvent'].subscribe(val => this.tabEvent.emit(val));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_array_utilities__WEBPACK_IMPORTED_MODULE_2__["ArrayUtilities"])); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["custom-tabs"]], viewQuery: function TabsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabContent = _t.first);
    } }, inputs: { selectedTab: "selectedTab", tabConfig: "tabConfig" }, outputs: { tabChanged: "tabChanged", tabEvent: "tabEvent" }, decls: 1, vars: 3, consts: [[4, "ngIf"], [1, "tab-group", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "tab-body", 4, "ngIf"], [1, "tab", 3, "ngClass", "click"], ["mat-button", ""], [1, "tab-label"], [1, "tab-icon", 3, "src"], [1, "tab-icon"], ["mat-button", "", 3, "matMenuTriggerFor", "click"], ["xPosition", "before", 1, "tab-menu"], ["tabMenu", "matMenu"], [3, "ngClass"], ["mat-menu-item", "", 3, "active-tab-menu", "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "ngClass", "click"], [1, "tab-body"], ["tabContent", ""]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabsComponent_div_0_Template, 4, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((ctx.tabData || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1)).tabs || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2)).length > 0 && !!ctx.tabData.display);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]], styles: [".tab-group {\n  display: inline-block;\n  opacity: 0.8;\n  color: #333333;\n  margin-top: 5px;\n  width: 100%;\n}\n.tab-group .tab {\n  width: 50%;\n  display: inline-block;\n  min-width: 120px;\n  color: #bdc3c7;\n  background: rgba(0, 0, 0, 0.93);\n}\n.tab-group .tab.left-border {\n  border-left: 1px solid gray;\n}\n.tab-group .tab button {\n  width: 100%;\n  text-align: left;\n  vertical-align: bottom;\n  height: 40px;\n}\n.tab-group .tab button .tab-icon {\n  float: right;\n  padding-top: 7px;\n}\n.tab-group .active-tab {\n  border-top: 2px solid #0f61fd;\n  color: #0f61fd;\n  background: none !important;\n}\n.tab-menu {\n  background: #E2E2E2;\n  color: #333333;\n  min-width: 120px !important;\n}\n.tab-menu .active-tab-menu {\n  border-left: 2px solid #0f61fd;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FBRVI7QUFEUTtFQUNJLDJCQUFBO0FBR1o7QUFBUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUVaO0FBQVk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFFSTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBQVI7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBQUo7QUFFSTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBUiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1ncm91cHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAudGFiIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjYmRjM2M3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45Myk7XHJcbiAgICAgICAgJi5sZWZ0LWJvcmRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAudGFiLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmUtdGFiIHtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzBmNjFmZDtcclxuICAgICAgICBjb2xvcjogIzBmNjFmZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLnRhYi1tZW51IHtcclxuICAgIGJhY2tncm91bmQ6ICNFMkUyRTI7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIG1pbi13aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAuYWN0aXZlLXRhYi1tZW51IHtcclxuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwZjYxZmQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-tabs',
                templateUrl: './tabs.component.html',
                styleUrls: ['./tabs.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _services_array_utilities__WEBPACK_IMPORTED_MODULE_2__["ArrayUtilities"] }]; }, { selectedTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['selectedTab']
        }], tabConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tabConfig']
        }], tabChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "JLS/":
/*!*****************************************!*\
  !*** ./src/material/material-module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");














































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_44__["FlexLayoutModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_44__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_44__["FlexLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datasource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/datasource-service */ "oFEj");
/* harmony import */ var _services_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/helpers/constants */ "TILX");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search-box/search-box.component */ "XPJ/");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");









const _c0 = function () { return {}; };
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Singer(s): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Album: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r3.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ((song_r3 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0)).title || "").length > ctx_r0.constants.SONG_TITLE_LENGTH ? song_r3.title : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((song_r3 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0)).title || "").length > ctx_r0.constants.SONG_TITLE_LENGTH ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, song_r3.title, 0, ctx_r0.constants.SONG_TITLE_LENGTH - 1) + ".." : song_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (((song_r3 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0)).album || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0)).user || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0)).user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((song_r3 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0)).album || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0)).title, "");
} }
function HomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No songs found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(dataSourceService, constants) {
        this.dataSourceService = dataSourceService;
        this.constants = constants;
        this.usersDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/users',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.albumsDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/albums',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.songsDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/photos',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.viewDataSources = [{
                'id': 1,
                'dataSourceName': 'users',
                'config': this.usersDataConfig
            }, {
                'id': 2,
                'dataSourceName': 'albums',
                'config': this.albumsDataConfig
            }, {
                'id': 3,
                'dataSourceName': 'songs',
                'config': this.songsDataConfig
            }];
        this.userMap = {};
        this.albumMap = {};
        this.songs = [];
        this.uISongs = [];
        this.itemsSize = 30;
        this.tabs = [
            {
                display: true,
                text: 'All Songs',
                link: '/musicapp/home',
                value: 'all-songs',
                sequence: 1,
                isMenuItem: false
            },
            {
                display: true,
                text: 'Play Lists',
                link: '/musicapp/playlist',
                value: 'playlist',
                sequence: 2,
                isMenuItem: false
            }
        ];
        this.tabsMenu = {
            display: false,
            text: 'Menu'
        };
        this.tabsConfig = {
            display: true,
            useComponents: false,
            menuConfig: this.tabsMenu,
            tabs: this.tabs
        };
        this.searchTerm = '';
        this.selectedTab = 'all-songs';
        this.searchedSongs = [];
        this.noSongsFound = false;
    }
    ngOnInit() {
        let dataSourceConfig = this.dataSourceService.fetchData(this.viewDataSources);
        dataSourceConfig.songs().subscribe((songsRresponse) => {
            if (songsRresponse && songsRresponse.data) {
                this.songs = (songsRresponse.data || []);
                let allSongs = ((this.searchTerm) ? this.searchedSongs : this.songs);
                this.uISongs = allSongs.slice(0, this.itemsSize + 1);
                this.noSongsFound = allSongs.length === 0;
            }
        });
        dataSourceConfig.users().subscribe((usersResponse) => {
            if (usersResponse && usersResponse.data) {
                this.userMap = this.createMap(usersResponse.data, 'id');
            }
            dataSourceConfig.albums().subscribe((albumsResponse) => {
                if (albumsResponse && albumsResponse.data) {
                    let albums = (albumsResponse.data || []).map((album) => {
                        album['user'] = { 'id': album.userId, 'user': (this.userMap[album.userId] || {}).name };
                        return album;
                    });
                    this.albumMap = this.createMap(albums, 'id');
                    this.songs = (this.songs || []).map((song) => {
                        song['album'] = { 'id': song.albumId, 'title': (this.albumMap[song.albumId] || {}).title, 'user': (this.albumMap[song.albumId] || {}).user };
                        return song;
                    });
                    let allSongs = ((this.searchTerm) ? this.searchedSongs : this.songs);
                    this.uISongs = allSongs.slice(0, this.itemsSize + 1);
                    this.noSongsFound = allSongs.length === 0;
                }
            });
        });
    }
    createMap(data, field) {
        data = data || [];
        field = field || 'id';
        let dataMap = {};
        for (let dataObj of data) {
            dataMap[dataObj[field]] = dataObj;
        }
        return dataMap;
    }
    onWindowScroll(event) {
        if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 2)) {
            this.uISongs = this.uISongs.concat(((this.searchTerm) ? this.searchedSongs : this.songs).slice((this.uISongs.length + 1), ((this.uISongs.length * 2) + 1)));
        }
    }
    onSearchChange($event) {
        this.searchTerm = $event;
        let allSongs = this.searchSongs();
        this.uISongs = allSongs.slice(0, this.itemsSize + 1);
        this.noSongsFound = allSongs.length === 0;
    }
    searchSongs() {
        if (this.searchTerm) {
            let operatorRegex = new RegExp(this.searchTerm, 'igm');
            this.searchedSongs = this.songs.filter((songObj) => {
                return (((songObj['title'].match(operatorRegex) || []).length > 0) || ((songObj['album']['title'].match(operatorRegex) || []).length > 0) || ((songObj['album']['user']['user'].match(operatorRegex) || []).length > 0));
            });
            return this.searchedSongs;
        }
        else {
            this.searchedSongs = [];
            return this.songs;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_datasource_service__WEBPACK_IMPORTED_MODULE_1__["DataSourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-music"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 6, consts: [[1, "tabs-container"], [3, "selectedTab", "tabConfig"], [1, "header-css"], [1, "title-css"], [1, "search-box-container"], [3, "searchPlaceHolder", "searchBoxChangeEmt"], [1, "content"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid", 4, "ngIf"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%"], [1, "song-wrapper", "c-half"], [1, "song-img-wrap"], [1, "song-img", 3, "src"], [1, "song-content"], [1, "title", 3, "matTooltip"], [1, "date"], [1, "col-h"], [1, "col-d"], [2, "color", "#b0d7f1"], [2, "color", "#bdc3c7"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "custom-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-search-box", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchBoxChangeEmt", function HomeComponent_Template_app_search_box_searchBoxChangeEmt_7_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 19, 16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTab", ctx.selectedTab)("tabConfig", ctx.tabsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchPlaceHolder", "Search by Songs, Album ....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uISongs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uISongs.length === 0 && !ctx.noSongsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noSongsFound);
    } }, directives: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__["SearchBoxComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.tabs-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.search-box-container[_ngcontent-%COMP%] {\n  width: 400px;\n  float: right;\n  display: block;\n}\n\n.header-css[_ngcontent-%COMP%] {\n  width: 98%;\n  display: block;\n  min-height: 50px;\n  margin: 10px 10px 0px 15px;\n}\n\n.title-css[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #bdc3c7;\n  margin-bottom: 0px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.col-h[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.col-d[_ngcontent-%COMP%] {\n  font: normal normal 400 12px/12px \"Roboto\", sans-serif;\n}\n\n.song-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.14);\n  background: #1d1e22;\n  position: relative;\n  display: inline-block;\n  margin-bottom: 24px;\n}\n\n.song-wrapper.c-full[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  width: calc(100% - 190px);\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 90px;\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  width: calc(100% - 110px);\n  padding: 8px 0px 0px 8px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 115px;\n  width: 150px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%]   .song-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-left: 12px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n  cursor: pointer;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #bdc3c7;\n  font: normal normal 500 16px \"Roboto\", sans-serif;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .song-desc[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  position: absolute;\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxzREFBQTtBQUNKOztBQUVBO0VBQ0ksMEhBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNRO0VBQ0kseUJBQUE7QUFDWjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUNRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDWjs7QUFDUTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7QUFDWjs7QUFFSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBUjs7QUFDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ1o7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ1o7O0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFDWjs7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFDWjs7QUFDUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDWiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vX2NvbnN0YW50cy5zY3NzJztcclxubWF0LXRvb2xiYXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGFicy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXItY3NzIHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMTVweDtcclxufVxyXG5cclxuLnRpdGxlLWNzcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2JkYzNjNztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uY29sLWgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jb2wtZCB7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIDQwMCAxMnB4LzEycHggJHJvYm87XHJcbn1cclxuXHJcbi5zb25nLXdyYXBwZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggNHB4IDVweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAxMHB4IDBweCByZ2IoMCAwIDAgLyAxNCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzFkMWUyMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAmLmMtZnVsbCB7XHJcbiAgICAgICAgLnNvbmctY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxOTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5jLWhhbGYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLnNvbmctaW1nLXdyYXAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc29uZy1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDBweCAwcHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb25nLWltZy13cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgLnNvbmctaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29uZy1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgLmNsb3NlLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgY29sb3I6ICNiZGMzYzc7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgJGJvbGQgJGhlYWRlci1mb250ICRyb2JvO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvbmctZGVzYyB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNkU2RTZFO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-music',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _services_datasource_service__WEBPACK_IMPORTED_MODULE_1__["DataSourceService"] }, { type: _services_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() { }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app-name"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "VBI Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["mat-sidenav-content[_ngcontent-%COMP%] {\n  margin-left: 50px !important;\n}\n\n.main-content-container[_ngcontent-%COMP%] {\n  min-height: 900px;\n  margin-top: 55px;\n}\n\n.app-name[_ngcontent-%COMP%] {\n  color: #0f61fd;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNEJBQUE7QUFDRDs7QUFFQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLGNBQUE7RUFDRyxZQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGVudCB7XHJcblx0bWFyZ2luLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tY29udGVudC1jb250YWluZXIge1xyXG5cdG1pbi1oZWlnaHQ6IDkwMHB4O1xyXG5cdG1hcmdpbi10b3A6IDU1cHg7XHJcbn1cclxuXHJcbi5hcHAtbmFtZSB7XHJcblx0Y29sb3I6ICMwZjYxZmQ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TILX":
/*!***********************************************!*\
  !*** ./src/app/services/helpers/constants.ts ***!
  \***********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
class Constants {
    constructor() {
        this.SONG_TITLE_LENGTH = 50;
        this.PLAYLIST_TITLE_LENGTH = 50;
        this.REST_CONSTANTS = {
            POST: 'POST',
            GET: 'GET'
        };
        this.WEBSOCKET = 'WEBSOCKET';
        this.authorization = 'Authorization';
    }
}
Constants.intervalformats = {
    minutes: 'Minutes',
    hours: 'Hours',
    days: 'Days',
    weeks: 'weeks',
    months: 'months'
};


/***/ }),

/***/ "XPJ/":
/*!***************************************************************!*\
  !*** ./src/app/components/search-box/search-box.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class SearchBoxComponent {
    constructor() {
        this.searchBoxChangeEmt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchPlaceHolder = 'Search here';
        this.searchInterval = null;
    }
    ngOnInit() { }
    onTextChange() {
        if (this.searchInterval) {
            try {
                clearTimeout(this.searchInterval);
            }
            catch (error) {
                console.log(error);
            }
        }
        this.searchInterval = setTimeout(() => {
            this.searchBoxChangeEmt.emit(this.searchedText);
        }, 800);
    }
}
SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) { return new (t || SearchBoxComponent)(); };
SearchBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBoxComponent, selectors: [["app-search-box"]], inputs: { searchPlaceHolder: "searchPlaceHolder" }, outputs: { searchBoxChangeEmt: "searchBoxChangeEmt" }, decls: 5, vars: 2, consts: [[1, "search-bar"], [1, "search-bar-form"], ["matInput", "", "type", "search", "autocomplete", "off", 1, "search-input", 3, "ngModel", "placeholder", "ngModelChange", "input"], ["matSuffix", "", 2, "color", "#bdc3c7"]], template: function SearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBoxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchedText = $event; })("input", function SearchBoxComponent_Template_input_input_2_listener() { return ctx.onTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchedText)("placeholder", ctx.searchPlaceHolder);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"]], styles: [".search-bar[_ngcontent-%COMP%] {\n  display: contents;\n  width: 220px;\n  height: 48px;\n  margin-right: 17px;\n  position: relative;\n  top: 10px;\n}\n\n.search-bar-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  background: #333 !important;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;\n}\n\n.mat-input-element[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n}\n\n.mat-form-field-label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #bdc3c7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDRyxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDQyxXQUFBO0FBQ0Q7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLHFJQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJzZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG5cdGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJhci1mb3JtIHtcclxuXHR3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDBweCA0cHggNXB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDEwcHggMHB4IHJnYigwIDAgMCAvIDEyJSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1pbnB1dC1lbGVtZW50IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsID4gc3BhbiB7XHJcbiAgICBjb2xvcjogI2JkYzNjNyAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-box',
                templateUrl: './search-box.component.html',
                styleUrls: ['./search-box.component.scss']
            }]
    }], function () { return []; }, { searchBoxChangeEmt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material-module */ "JLS/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_rest_connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/rest-connector */ "dJN1");
/* harmony import */ var _services_helpers_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/helpers/constants */ "TILX");
/* harmony import */ var _services_date_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/date-utilities */ "pw0b");
/* harmony import */ var _services_array_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/array-utilities */ "+mDg");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/playlist/playlist.component */ "bT9p");
/* harmony import */ var _services_datasource_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/datasource-service */ "oFEj");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search-box/search-box.component */ "XPJ/");
/* harmony import */ var _components_dialogBoxes_add_playlist_add_playlist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dialogBoxes/add-playlist/add-playlist.component */ "nEOk");
/* harmony import */ var _components_dialogBoxes_confirmation_deleteconfirmation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dialogBoxes/confirmation/deleteconfirmation.component */ "nd2/");
/* harmony import */ var _views_editplaylist_editplaylist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/editplaylist/editplaylist.component */ "q+Ge");
/* harmony import */ var _views_addsongplaylist_addsongplaylist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/addsongplaylist/addsongplaylist.component */ "zobR");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _services_object_utilities__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/object-utilities */ "kF7M");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_rest_connector__WEBPACK_IMPORTED_MODULE_9__["RestConnector"],
        _services_helpers_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"],
        _services_date_utilities__WEBPACK_IMPORTED_MODULE_11__["DateUtilityService"],
        _services_array_utilities__WEBPACK_IMPORTED_MODULE_12__["ArrayUtilities"],
        _services_datasource_service__WEBPACK_IMPORTED_MODULE_15__["DataSourceService"],
        _services_object_utilities__WEBPACK_IMPORTED_MODULE_22__["ObjectUtilities"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _views_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_14__["PlayListComponent"],
        _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_16__["SearchBoxComponent"],
        _components_dialogBoxes_add_playlist_add_playlist_component__WEBPACK_IMPORTED_MODULE_17__["AddPlayListComponent"],
        _components_dialogBoxes_confirmation_deleteconfirmation_component__WEBPACK_IMPORTED_MODULE_18__["DeleteConfirmationComponent"],
        _views_editplaylist_editplaylist_component__WEBPACK_IMPORTED_MODULE_19__["EditPlayListComponent"],
        _views_addsongplaylist_addsongplaylist_component__WEBPACK_IMPORTED_MODULE_20__["AddSongPlayListComponent"],
        _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_21__["TabsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _views_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_14__["PlayListComponent"],
                    _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_16__["SearchBoxComponent"],
                    _components_dialogBoxes_add_playlist_add_playlist_component__WEBPACK_IMPORTED_MODULE_17__["AddPlayListComponent"],
                    _components_dialogBoxes_confirmation_deleteconfirmation_component__WEBPACK_IMPORTED_MODULE_18__["DeleteConfirmationComponent"],
                    _views_editplaylist_editplaylist_component__WEBPACK_IMPORTED_MODULE_19__["EditPlayListComponent"],
                    _views_addsongplaylist_addsongplaylist_component__WEBPACK_IMPORTED_MODULE_20__["AddSongPlayListComponent"],
                    _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_21__["TabsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [
                    _services_rest_connector__WEBPACK_IMPORTED_MODULE_9__["RestConnector"],
                    _services_helpers_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"],
                    _services_date_utilities__WEBPACK_IMPORTED_MODULE_11__["DateUtilityService"],
                    _services_array_utilities__WEBPACK_IMPORTED_MODULE_12__["ArrayUtilities"],
                    _services_datasource_service__WEBPACK_IMPORTED_MODULE_15__["DataSourceService"],
                    _services_object_utilities__WEBPACK_IMPORTED_MODULE_22__["ObjectUtilities"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bT9p":
/*!******************************************************!*\
  !*** ./src/app/views/playlist/playlist.component.ts ***!
  \******************************************************/
/*! exports provided: PlayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListComponent", function() { return PlayListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_dialogBoxes_add_playlist_add_playlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dialogBoxes/add-playlist/add-playlist.component */ "nEOk");
/* harmony import */ var _components_dialogBoxes_confirmation_deleteconfirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dialogBoxes/confirmation/deleteconfirmation.component */ "nd2/");
/* harmony import */ var _services_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/helpers/constants */ "TILX");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_date_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/date-utilities */ "pw0b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/search-box/search-box.component */ "XPJ/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");















const _c0 = function () { return {}; };
const _c1 = function () { return []; };
function PlayListComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Created: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Songs: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayListComponent_div_12_div_1_Template_mat_icon_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const playlist_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.editPlaylist(playlist_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayListComponent_div_12_div_1_Template_mat_icon_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const playlist_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.deletePlayListPopup(playlist_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ((playlist_r3 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0)).title || "").length > ctx_r2.constants.PLAYLIST_TITLE_LENGTH ? playlist_r3.title : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((playlist_r3 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0)).title || "").length > ctx_r2.constants.PLAYLIST_TITLE_LENGTH ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 4, playlist_r3.title, 0, ctx_r2.constants.PLAYLIST_TITLE_LENGTH - 1) + ".." : playlist_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getTime(playlist_r3.createdDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((playlist_r3 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0)).songs || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1)).length, "");
} }
function PlayListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayListComponent_div_12_div_1_Template, 22, 12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.uIplayLists);
} }
function PlayListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No playlists found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlayListComponent {
    constructor(constants, dialog, dateUtilityService, router, activeRoute) {
        this.constants = constants;
        this.dialog = dialog;
        this.dateUtilityService = dateUtilityService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.playLists = [];
        this.uIplayLists = [];
        this.itemsSize = 30;
        this.tabs = [
            {
                display: true,
                text: 'All Songs',
                link: '/musicapp/home',
                value: 'all-songs',
                sequence: 1,
                isMenuItem: false
            },
            {
                display: true,
                text: 'Play Lists',
                link: '/musicapp/playlist',
                value: 'playlist',
                sequence: 2,
                isMenuItem: false
            }
        ];
        this.tabsMenu = {
            display: false,
            text: 'Menu'
        };
        this.tabsConfig = {
            display: true,
            useComponents: false,
            menuConfig: this.tabsMenu,
            tabs: this.tabs
        };
        this.searchTerm = '';
        this.selectedTab = 'playlist';
        this.searchedPlayLists = [];
    }
    ngOnInit() {
        try {
            this.playLists = (JSON.parse((window.localStorage.getItem('VBIplayLists'))) || []).sort((a, b) => ((a.id - b.id) * 1));
        }
        catch (error) {
            this.playLists = [];
        }
        this.uIplayLists = (((this.searchTerm) ? this.searchedPlayLists : this.playLists) || []).slice(0, this.itemsSize + 1);
    }
    onWindowScroll(e) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            this.uIplayLists = this.uIplayLists.concat(((this.searchTerm) ? this.searchedPlayLists : this.playLists).slice((this.uIplayLists.length + 1), ((this.uIplayLists.length * 2) + 1)));
        }
    }
    onSearchChange($event) {
        this.searchTerm = $event;
        this.uIplayLists = this.searchPlaylist().slice(0, this.itemsSize + 1);
    }
    searchPlaylist() {
        if (this.searchTerm) {
            let operatorRegex = new RegExp(this.searchTerm, 'igm');
            this.searchedPlayLists = this.playLists.filter((playListObj) => {
                return (((playListObj['title'].match(operatorRegex) || []).length > 0));
            });
            return this.searchedPlayLists;
        }
        else {
            this.searchedPlayLists = [];
            return (this.playLists || []);
        }
    }
    openPlayListPopup() {
        const dialogRef = this.dialog.open(_components_dialogBoxes_add_playlist_add_playlist_component__WEBPACK_IMPORTED_MODULE_1__["AddPlayListComponent"], {
            data: (this.playLists || [])
        });
        const subscribeDialog = dialogRef.componentInstance.buttonClickedEmt.subscribe((data) => {
            if (data.event === 'save') {
                let dated = new Date().getTime();
                this.playLists.push({ 'id': this.playLists.length + 1, 'title': data.title, 'songs': [], 'createdDate': dated, 'lastModifiedDate': dated });
                window.localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
                this.uIplayLists = this.searchPlaylist().slice(0, this.itemsSize + 1);
                console.log('playlist added successfully');
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            subscribeDialog.unsubscribe();
        });
    }
    getTime(time) {
        return this.dateUtilityService.convertTimeInterval(time);
    }
    deletePlayListPopup(id) {
        const dialogRef = this.dialog.open(_components_dialogBoxes_confirmation_deleteconfirmation_component__WEBPACK_IMPORTED_MODULE_2__["DeleteConfirmationComponent"], {
            data: id
        });
        const subscribeDialog = dialogRef.componentInstance.buttonClickedEmt.subscribe((data) => {
            if (data.event === 'delete') {
                this.playLists = this.playLists.filter((playListObj) => (playListObj.id !== data.id));
                window.localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
                this.uIplayLists = this.searchPlaylist().slice(0, this.itemsSize + 1);
                console.log('playlist deleted successfully');
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            subscribeDialog.unsubscribe();
        });
    }
    editPlaylist(id) {
        this.router.navigateByUrl('/musicapp/playlist/edit/' + id);
    }
}
PlayListComponent.ɵfac = function PlayListComponent_Factory(t) { return new (t || PlayListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_utilities__WEBPACK_IMPORTED_MODULE_5__["DateUtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
PlayListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayListComponent, selectors: [["app-playlist"]], hostBindings: function PlayListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function PlayListComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 5, consts: [[1, "tabs-container"], [3, "selectedTab", "tabConfig"], [1, "header-css"], [1, "title-css"], [1, "action-icons"], ["title", "Create Playlist", "matSuffix", "", 1, "action-icon", 3, "click"], [1, "search-box-container"], [3, "searchPlaceHolder", "searchBoxChangeEmt"], [1, "content"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", 4, "ngFor", "ngForOf"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%"], [1, "song-wrapper", "c-half"], [1, "song-content"], [1, "title", 3, "matTooltip"], [1, "date"], [1, "col-h"], [1, "col-d"], [1, "playlist-action-icon-div"], ["title", "Edit Playlist", "matSuffix", "", 1, "playlist-action-icon", 3, "click"], ["title", "Delete Playlist", "matSuffix", "", 1, "playlist-action-icon", 3, "click"], [2, "color", "#bdc3c7"]], template: function PlayListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "custom-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayListComponent_Template_mat_icon_click_7_listener() { return ctx.openPlayListPopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-search-box", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchBoxChangeEmt", function PlayListComponent_Template_app_search_box_searchBoxChangeEmt_10_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayListComponent_div_12_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayListComponent_div_13_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTab", ctx.selectedTab)("tabConfig", ctx.tabsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchPlaceHolder", "Search by Songs, Album ....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uIplayLists.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uIplayLists.length === 0);
    } }, directives: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_10__["SearchBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.tabs-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.search-box-container[_ngcontent-%COMP%] {\n  width: 400px;\n  float: right;\n  display: block;\n}\n\n.header-css[_ngcontent-%COMP%] {\n  width: 98%;\n  display: block;\n  min-height: 50px;\n  margin: 10px 10px 0px 15px;\n}\n\n.title-css[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #bdc3c7;\n  margin-bottom: 0px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.col-h[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.col-d[_ngcontent-%COMP%] {\n  font: normal normal 400 12px/12px \"Roboto\", sans-serif;\n}\n\n.song-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.14);\n  background: #1d1e22;\n  position: relative;\n  display: inline-block;\n  margin-bottom: 24px;\n}\n\n.song-wrapper.c-full[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100px;\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 90px;\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  width: calc(100% - 110px);\n  padding: 8px 0px 0px 8px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 115px;\n  width: 150px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%]   .song-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-left: 12px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n  cursor: pointer;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #bdc3c7;\n  font: normal normal 500 16px \"Roboto\", sans-serif;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .song-desc[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  position: absolute;\n  bottom: 10px;\n}\n\n.action-icons[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  height: 48px;\n}\n\n.action-icons[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  color: #0f61fd;\n  font-size: 30px;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.playlist-action-icon-div[_ngcontent-%COMP%] {\n  width: 5%;\n  display: inline-block;\n  float: right;\n}\n\n.playlist-action-icon[_ngcontent-%COMP%] {\n  float: right;\n  padding: 5px 0px 0px 5px;\n  color: #0f61fd;\n  cursor: pointer;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGF5bGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksc0RBQUE7QUFDSjs7QUFFQTtFQUNJLDBIQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDUTtFQUNJLFVBQUE7QUFDWjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQVI7O0FBQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNaOztBQUNRO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQUNaOztBQUVJO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUNRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDWjs7QUFFSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUNRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDWjs7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUNaOztBQUNRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUNaOztBQUNRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNaOztBQUlBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREo7O0FBRUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQVI7O0FBSUE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJwbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL19jb25zdGFudHMuc2Nzcyc7XHJcbm1hdC10b29sYmFyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhYnMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGVyLWNzcyB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZS1jc3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNiZGMzYzc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50ID4gbWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmNvbC1oIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY29sLWQge1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTJweC8xMnB4ICRyb2JvO1xyXG59XHJcblxyXG4uc29uZy13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMHB4IDRweCA1cHggMHB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAxcHggMTBweCAwcHggcmdiKDAgMCAwIC8gMTQlKTtcclxuICAgIGJhY2tncm91bmQ6ICMxZDFlMjI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgJi5jLWZ1bGwge1xyXG4gICAgICAgIC5zb25nLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuYy1oYWxmIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIC5zb25nLWltZy13cmFwIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvbmctY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMTBweCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwcHggMHB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29uZy1pbWctd3JhcCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIC5zb25nLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvbmctY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmRjM2M3O1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsICRib2xkICRoZWFkZXItZm9udCAkcm9ibztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb25nLWRlc2Mge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzZFNkU2RTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLmFjdGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzBmNjFmZDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnBsYXlsaXN0LWFjdGlvbi1pY29uLWRpdiB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1hY3Rpb24taWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICBjb2xvcjogIzBmNjFmZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist',
                templateUrl: './playlist.component.html',
                styleUrls: ['./playlist.component.scss'],
            }]
    }], function () { return [{ type: _services_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _services_date_utilities__WEBPACK_IMPORTED_MODULE_5__["DateUtilityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "dJN1":
/*!********************************************!*\
  !*** ./src/app/services/rest-connector.ts ***!
  \********************************************/
/*! exports provided: RestConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestConnector", function() { return RestConnector; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class RestConnector {
    constructor(http) {
        this.http = http;
    }
    getHeaders(observe, responseType, contentType, headers) {
        let headerModel = { observe };
        headerModel = !!responseType ? Object.assign(headerModel, { 'responseType': responseType }) : headerModel;
        if (!headers) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        }
        if (!!contentType) {
            headers = headers.set('Content-Type', contentType);
        }
        headerModel.headers = headers;
        return headerModel;
    }
    getRequest(url, responseType, contentType) {
        url = url || '';
        return this.http.get(url, this.getHeaders('response', responseType, contentType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => { throw err; }));
    }
    postRequest(url, requestBody, responseType, contentType, headers) {
        requestBody = requestBody || {};
        url = url || '';
        return this.http.post(url, requestBody, this.getHeaders('response', responseType, contentType, headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => { throw err; }));
    }
    putRequest(url, requestBody, responseType, contentType) {
        requestBody = requestBody || {};
        url = url || '';
        return this.http.put(url, requestBody, this.getHeaders('response', responseType, contentType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => { throw err; }));
    }
    deleteRequest(url, responseType, contentType) {
        url = url || '';
        return this.http.delete(url, this.getHeaders('response', responseType, contentType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            return {
                status: response.status,
                headers: response.headers,
                data: response.body
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => { throw err; }));
    }
}
RestConnector.ɵfac = function RestConnector_Factory(t) { return new (t || RestConnector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestConnector.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestConnector, factory: RestConnector.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestConnector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kF7M":
/*!**********************************************!*\
  !*** ./src/app/services/object-utilities.ts ***!
  \**********************************************/
/*! exports provided: ObjectUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtilities", function() { return ObjectUtilities; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ "f66B");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);



class ObjectUtilities {
    constructor() { }
    compareObject(item1, item2, deepComparision = true) {
        return deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(item1, item2, deepComparision);
    }
}
ObjectUtilities.ɵfac = function ObjectUtilities_Factory(t) { return new (t || ObjectUtilities)(); };
ObjectUtilities.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ObjectUtilities, factory: ObjectUtilities.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectUtilities, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nEOk":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dialogBoxes/add-playlist/add-playlist.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddPlayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayListComponent", function() { return AddPlayListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class AddPlayListComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.buttonClickedEmt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playlistTitle = '';
        this.errorMessage = '';
    }
    buttonClicked(clickedButton) {
        let playLists = this.data || [];
        let playListAlreadyExist = playLists.filter((playListObj) => ((playListObj.title || '').trim().toLowerCase() === (this.playlistTitle || '').trim().toLowerCase())).length > 0;
        if (playListAlreadyExist) {
            this.errorMessage = 'Playlist Already Exists';
        }
        else {
            this.dialogRef.close();
            this.errorMessage = '';
            this.buttonClickedEmt.emit({ 'event': 'save', 'title': this.playlistTitle });
        }
    }
}
AddPlayListComponent.ɵfac = function AddPlayListComponent_Factory(t) { return new (t || AddPlayListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AddPlayListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPlayListComponent, selectors: [["add-playlist"]], decls: 19, vars: 4, consts: [[1, "cnfrm-div"], [1, "cnfrm-header"], [1, "cnfrm-close-icon"], ["mat-dialog-close", "", 1, "pull-right"], [1, "cnfrm-title"], [1, "form"], [1, "form-div"], ["matInput", "", "type", "search", "autocomplete", "off", "placeholder", "Title", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "error"], [1, "btn-sect"], ["mat-button", "", "cdkFocusInitial", "", 1, "primary-button", 3, "disabled", "click"], ["mat-button", "", 1, "default-button", 3, "mat-dialog-close", "click"]], template: function AddPlayListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create PlayList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPlayListComponent_Template_input_ngModelChange_11_listener($event) { return ctx.playlistTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPlayListComponent_Template_button_click_15_listener() { return ctx.buttonClicked("save"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPlayListComponent_Template_button_click_17_listener() { return ctx.buttonClicked("cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playlistTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx.playlistTitle || "").trim().length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".cnfrm-div[_ngcontent-%COMP%] {\n  height: 160px;\n  padding: 20px 10px;\n}\n.cnfrm-div[_ngcontent-%COMP%]   .cnfrm-header[_ngcontent-%COMP%] {\n  padding: 0px 0px 30px 10px;\n}\n.cnfrm-div[_ngcontent-%COMP%]   .cnfrm-close-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: right;\n  cursor: pointer;\n}\n.cnfrm-div[_ngcontent-%COMP%]    > .cnfrm-title[_ngcontent-%COMP%] {\n  padding: 0px 0px 10px 10px;\n  display: inline-block;\n}\n.cnfrm-div[_ngcontent-%COMP%]    > .btn-sect[_ngcontent-%COMP%] {\n  padding: 0px 5px 10px;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #1d1e22;\n  color: #bdc3c7;\n}\n.form[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n.form[_ngcontent-%COMP%]   .form-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFBSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtBQUVSO0FBQUk7RUFDSSxxQkFBQTtBQUVSO0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSwwQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0FBRVI7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNuZnJtLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgLmNuZnJtLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAzMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY25mcm0tY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICA+LmNuZnJtLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICA+LmJ0bi1zZWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHggMTBweDtcclxuICAgIH1cclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWQxZTIyO1xyXG4gICAgY29sb3I6ICNiZGMzYzc7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgLmZvcm0tZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPlayListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-playlist',
                templateUrl: './add-playlist.component.html',
                styleUrls: ['./add-playlist.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "nd2/":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dialogBoxes/confirmation/deleteconfirmation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeleteConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationComponent", function() { return DeleteConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class DeleteConfirmationComponent {
    constructor(data) {
        this.data = data;
        this.buttonClickedEmt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    buttonClicked(clickedButton) {
        this.buttonClickedEmt.emit({ 'event': clickedButton, 'id': this.data });
    }
}
DeleteConfirmationComponent.ɵfac = function DeleteConfirmationComponent_Factory(t) { return new (t || DeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeleteConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteConfirmationComponent, selectors: [["deleteconfirmation"]], decls: 14, vars: 2, consts: [[1, "cnfrm-div"], [1, "cnfrm-header"], [1, "cnfrm-title"], [1, "cnfrm-close-icon"], ["mat-dialog-close", "", 1, "pull-right"], [1, "btn-sect"], ["mat-button", "", "cdkFocusInitial", "", 1, "primary-button", 3, "mat-dialog-close", "click"], ["mat-button", "", 1, "default-button", 3, "mat-dialog-close", "click"]], template: function DeleteConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Do you want to delete this playlist?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmationComponent_Template_button_click_10_listener() { return ctx.buttonClicked("delete"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmationComponent_Template_button_click_12_listener() { return ctx.buttonClicked("cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".cnfrm-div[_ngcontent-%COMP%] {\n  height: 80px;\n  padding: 20px 10px;\n}\n.cnfrm-div[_ngcontent-%COMP%]   .cnfrm-header[_ngcontent-%COMP%] {\n  padding: 0px 0px 30px 10px;\n}\n.cnfrm-div[_ngcontent-%COMP%]   .cnfrm-close-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: right;\n  cursor: pointer;\n}\n.cnfrm-div[_ngcontent-%COMP%]   .cnfrm-title[_ngcontent-%COMP%] {\n  padding: 0px 0px 10px 0px;\n  display: inline-block;\n}\n.cnfrm-div[_ngcontent-%COMP%]   .btn-sect[_ngcontent-%COMP%] {\n  padding: 0px 5px 10px;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #1d1e22;\n  color: #bdc3c7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGVsZXRlY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFBSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQUVSO0FBQUk7RUFDSSxxQkFBQTtBQUVSO0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImRlbGV0ZWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbmZybS1kaXYge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgLmNuZnJtLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAzMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY25mcm0tY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY25mcm0tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogIzFkMWUyMjtcclxuICAgIGNvbG9yOiAjYmRjM2M3O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'deleteconfirmation',
                templateUrl: './deleteconfirmation.component.html',
                styleUrls: ['./deleteconfirmation.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "oFEj":
/*!************************************************!*\
  !*** ./src/app/services/datasource-service.ts ***!
  \************************************************/
/*! exports provided: DataSourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceService", function() { return DataSourceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-connector */ "dJN1");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/constants */ "TILX");





class DataSourceService {
    constructor(restConnector, constants) {
        this.restConnector = restConnector;
        this.constants = constants;
    }
    fetchData(dataSourceConfigs) {
        let dataSource = {};
        for (let i = 0; i < dataSourceConfigs.length; i++) {
            let dataSourceConfig = JSON.parse(JSON.stringify(dataSourceConfigs[i].config));
            if (dataSourceConfigs[i].config.type === this.constants.REST_CONSTANTS.GET) {
                dataSource[dataSourceConfigs[i].dataSourceName] = (dataSourceObj) => {
                    let regquestConfig = JSON.parse(JSON.stringify(dataSourceObj || dataSourceConfig));
                    regquestConfig['url'] = this.getActualURL(regquestConfig);
                    regquestConfig['headers'] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](dataSourceConfigs[i].config.headers);
                    return this.restConnector.getRequest(regquestConfig['url']);
                };
            }
            else if (dataSourceConfigs[i].config.type === this.constants.REST_CONSTANTS.POST) {
                dataSource[dataSourceConfigs[i].dataSourceName] = (dataSourceObj) => {
                    let regquestConfig = JSON.parse(JSON.stringify(dataSourceObj || dataSourceConfig));
                    regquestConfig['url'] = this.getActualURL(regquestConfig);
                    regquestConfig['headers'] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](dataSourceConfigs[i].config.headers);
                    return this.restConnector.postRequest(regquestConfig['url'], regquestConfig['body'], null, null, regquestConfig['headers']);
                };
            }
        }
        return dataSource;
    }
    getActualURL(config) {
        let url = config.url;
        let paramsExist = (config.url.indexOf('?') >= 0);
        let paramKeys = Object.keys(config.params || {});
        for (let i = 0; i < paramKeys.length; i++) {
            if (i === 0 || paramsExist) {
                url += '&' + paramKeys[i] + '=' + config.params[paramKeys[i]];
            }
            else {
                url += '?' + paramKeys[i] + '=' + config.params[paramKeys[i]];
            }
        }
        return url;
    }
}
DataSourceService.ɵfac = function DataSourceService_Factory(t) { return new (t || DataSourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_rest_connector__WEBPACK_IMPORTED_MODULE_2__["RestConnector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"])); };
DataSourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataSourceService, factory: DataSourceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataSourceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _rest_connector__WEBPACK_IMPORTED_MODULE_2__["RestConnector"] }, { type: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"] }]; }, null); })();


/***/ }),

/***/ "pw0b":
/*!********************************************!*\
  !*** ./src/app/services/date-utilities.ts ***!
  \********************************************/
/*! exports provided: DateUtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtilityService", function() { return DateUtilityService; });
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/constants */ "TILX");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DateUtilityService {
    constructor() {
    }
    convertFromTimeInterval(unit, value) {
        if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.minutes) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value).asMinutes());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.hours) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value).asHours());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.days) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value).asDays());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.weeks) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value).asWeeks());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.months) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value).asMonths());
        }
        else {
            return '';
        }
    }
    convertToTimeInterval(unit, value) {
        if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.minutes) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value, 'minutes').asMilliseconds());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.hours) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value, 'hours').asMilliseconds());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.days) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value, 'days').asMilliseconds());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.weeks) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value, 'weeks').asMilliseconds());
        }
        else if (unit == _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].intervalformats.months) {
            return Math.trunc(moment__WEBPACK_IMPORTED_MODULE_1__["duration"](value, 'months').asMilliseconds());
        }
        else {
            return '';
        }
    }
    formatDate(dateVal, format = 'MMM DD YYYY') {
        if (dateVal) {
            return moment__WEBPACK_IMPORTED_MODULE_1__(dateVal).format(format);
        }
        else {
            return '';
        }
    }
    convertTimeInterval(timeToFormat) {
        timeToFormat = timeToFormat || '';
        if (timeToFormat !== '') {
            let timeInterval = "just now";
            const currentTime = new Date();
            const currentTimeMs = currentTime.getTime();
            const timeIntervalElapsed = (currentTimeMs - timeToFormat);
            let timeUnit = "ago";
            if (timeIntervalElapsed < 0) {
                timeUnit = "";
            }
            if (timeIntervalElapsed !== 0) {
                let period = "ms";
                let timeIntervalDifference = Math.abs(timeIntervalElapsed);
                if (timeIntervalDifference > 1000 && period === "ms") {
                    period = "seconds";
                    timeIntervalDifference = timeIntervalDifference / 1000;
                }
                if (timeIntervalDifference > 60 && period === "seconds") {
                    period = "minutes";
                    timeIntervalDifference = timeIntervalDifference / 60;
                }
                if (timeIntervalDifference > 60 && period === "minutes") {
                    period = "hours";
                    timeIntervalDifference = timeIntervalDifference / 60;
                }
                let days = 0.0;
                if (timeIntervalDifference > 24 && period === "hours") {
                    period = "days";
                    timeIntervalDifference = timeIntervalDifference / 24;
                    days = timeIntervalDifference;
                }
                if (days > 7 && period === "days") {
                    period = "weeks";
                    timeIntervalDifference = days / 7;
                }
                if (days > 30 && period === "weeks") {
                    period = "months";
                    timeIntervalDifference = days / 30;
                }
                if (days > 365 && period === "months") {
                    period = "years";
                    timeIntervalDifference = days / 365;
                }
                if (timeIntervalDifference > 10 && period === "years") {
                    period = "decades";
                    timeIntervalDifference = timeIntervalDifference / 10;
                }
                if (timeIntervalDifference > 10 && period === "decades") {
                    period = "ages";
                    timeIntervalDifference = timeIntervalDifference / 10;
                }
                if (timeIntervalDifference < 1) {
                    timeIntervalDifference = 1;
                }
                const timeIntervalInPeriod = Math.floor(Number((timeIntervalDifference).toFixed(0)));
                if (timeIntervalInPeriod === 1 && period !== "ms" && period !== "ages") {
                    period = period.substring(0, period.length - 1);
                }
                if (period === "ms") {
                    timeInterval = "just now";
                }
                else {
                    if (period !== "ages") {
                        timeInterval = timeIntervalInPeriod + " " + period + " " + timeUnit;
                    }
                    else {
                        timeInterval = period + " " + timeUnit;
                    }
                }
            }
            return timeInterval;
        }
        else {
            return '';
        }
    }
    getDateByString(dateString) {
        dateString = dateString || '';
        let dates = dateString.trim().toLowerCase().split(' ').filter((val) => (val));
        let addOp = !((dates[0] || '') === 'last');
        let count = parseFloat(dates[1]);
        let entity = (dates[2] || '');
        if (addOp) {
            return new Date(moment__WEBPACK_IMPORTED_MODULE_1__().add(count, entity).format('ddd MMM DD YYYY')).getTime();
        }
        else {
            return new Date(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(count, entity).format('ddd MMM DD YYYY')).getTime();
        }
    }
}
DateUtilityService.ɵfac = function DateUtilityService_Factory(t) { return new (t || DateUtilityService)(); };
DateUtilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DateUtilityService, factory: DateUtilityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DateUtilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "q+Ge":
/*!**************************************************************!*\
  !*** ./src/app/views/editplaylist/editplaylist.component.ts ***!
  \**************************************************************/
/*! exports provided: EditPlayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlayListComponent", function() { return EditPlayListComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datasource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/datasource-service */ "oFEj");
/* harmony import */ var _services_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/helpers/constants */ "TILX");
/* harmony import */ var _services_date_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/date-utilities */ "pw0b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_object_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/object-utilities */ "kF7M");
/* harmony import */ var _services_array_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/array-utilities */ "+mDg");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/search-box/search-box.component */ "XPJ/");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


















function EditPlayListComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlayListComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.savePlayList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlayListComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlayListComponent_mat_icon_10_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlayListComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Singer(s): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Album: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlayListComponent_div_16_div_1_Template_mat_icon_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const song_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.removeSongFromPlayList(song_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", song_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", song_r10.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r10.album.user.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](song_r10.album.title);
} }
function EditPlayListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function EditPlayListComponent_div_16_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditPlayListComponent_div_16_div_1_Template, 21, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx_r2.uISongs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.uISongs);
} }
function EditPlayListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditPlayListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No songs found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditPlayListComponent {
    constructor(dataSourceService, constants, dateUtilityService, router, activeRoute, objectUtilities, arrayUtilities) {
        this.dataSourceService = dataSourceService;
        this.constants = constants;
        this.dateUtilityService = dateUtilityService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.objectUtilities = objectUtilities;
        this.arrayUtilities = arrayUtilities;
        this.usersDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/users',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.albumsDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/albums',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.songsDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/photos',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.viewDataSources = [{
                'id': 1,
                'dataSourceName': 'users',
                'config': this.usersDataConfig
            }, {
                'id': 2,
                'dataSourceName': 'albums',
                'config': this.albumsDataConfig
            }, {
                'id': 3,
                'dataSourceName': 'songs',
                'config': this.songsDataConfig
            }];
        this.userMap = {};
        this.albumMap = {};
        this.playLists = [];
        this.playList = {};
        this.originalPlayList = {};
        this.playListSongs = [];
        this.songs = [];
        this.uISongs = [];
        this.itemsSize = 30;
        this.sortedOrder = [];
        this.tabs = [
            {
                display: true,
                text: 'All Songs',
                link: '/musicapp/home',
                value: 'all-songs',
                sequence: 1,
                isMenuItem: false
            },
            {
                display: true,
                text: 'Play Lists',
                link: '/musicapp/playlist',
                value: 'playlist',
                sequence: 2,
                isMenuItem: false
            }
        ];
        this.tabsMenu = {
            display: false,
            text: 'Menu'
        };
        this.tabsConfig = {
            display: true,
            useComponents: false,
            menuConfig: this.tabsMenu,
            tabs: this.tabs
        };
        this.searchTerm = '';
        this.selectedTab = 'playlist';
        this.searchedSongs = [];
        this.playListTitle = '';
        this.errorMessage = '';
        this.noSongsFound = false;
    }
    ngOnInit() {
        try {
            let dataSourceConfig = this.dataSourceService.fetchData(this.viewDataSources);
            dataSourceConfig.songs().subscribe((songsRresponse) => {
                if (songsRresponse && songsRresponse.data) {
                    this.songs = (songsRresponse.data || []);
                }
            });
            dataSourceConfig.users().subscribe((usersResponse) => {
                if (usersResponse && usersResponse.data) {
                    this.userMap = this.createMap(usersResponse.data, 'id');
                }
                dataSourceConfig.albums().subscribe((albumsResponse) => {
                    if (albumsResponse && albumsResponse.data) {
                        let albums = (albumsResponse.data || []).map((album) => {
                            album['user'] = { 'id': album.userId, 'user': (this.userMap[album.userId] || {}).name };
                            return album;
                        });
                        this.albumMap = this.createMap(albums, 'id');
                        this.songs = (this.songs || []).map((song) => {
                            song['album'] = { 'id': song.albumId, 'title': (this.albumMap[song.albumId] || {}).title, 'user': (this.albumMap[song.albumId] || {}).user };
                            return song;
                        });
                        this.activeRoute.params.subscribe(routeParams => {
                            this.playLists = JSON.parse((window.localStorage.getItem('VBIplayLists'))) || [];
                            this.playList = this.playLists.filter((playListObj) => (playListObj.id.toString() === routeParams['id']))[0] || {};
                            this.playListTitle = this.playList.title;
                            this.originalPlayList = JSON.parse(JSON.stringify(this.playList));
                            this.playListSongs = this.getPlayListSongs();
                            this.uISongs = (((this.searchTerm) ? this.searchedSongs : (this.playListSongs || [])) || []);
                            this.noSongsFound = (this.uISongs.length === 0);
                        });
                    }
                });
            });
        }
        catch (error) {
            this.playList = {};
        }
    }
    createMap(data, field) {
        data = data || [];
        field = field || 'id';
        let dataMap = {};
        for (let dataObj of data) {
            dataMap[dataObj[field]] = dataObj;
        }
        return dataMap;
    }
    onSearchChange($event) {
        this.searchTerm = $event;
        this.uISongs = this.searchSong().slice(0, this.itemsSize + 1);
        this.noSongsFound = (this.uISongs.length === 0);
    }
    getPlayListSongs() {
        let filterSongs = this.songs.filter((songObj) => ((this.playList.songs || []).indexOf(songObj.id) >= 0));
        return filterSongs.sort((a, b) => ((this.playList.songs.indexOf(a.id) - this.playList.songs.indexOf(b.id))));
    }
    searchSong() {
        if (this.searchTerm) {
            let operatorRegex = new RegExp(this.searchTerm, 'igm');
            this.searchedSongs = (this.playListSongs || []).filter((playListObj) => {
                return (((playListObj['title'].match(operatorRegex) || []).length > 0));
            });
            return this.searchedSongs.sort((a, b) => ((this.playList.songs.indexOf(a.id) - this.playList.songs.indexOf(b.id))));
        }
        else {
            this.searchedSongs = [];
            return (this.playListSongs || []);
        }
    }
    getTime(time) {
        return this.dateUtilityService.convertTimeInterval(time);
    }
    removeSongFromPlayList(id) {
        this.playList.songs = (this.playList.songs || []).filter((song) => (song !== id));
        this.playListSongs = this.getPlayListSongs();
        this.uISongs = (this.uISongs || []).filter((song) => (song.id !== id));
        this.noSongsFound = (this.uISongs.length === 0);
    }
    addSongs() {
        this.router.navigateByUrl('/musicapp/playlist/songs/' + this.playList.id);
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            this.playList.songs = this.arrayUtilities.move(this.playList.songs, event.previousIndex, event.currentIndex);
        }
    }
    savePlayList() {
        let playListExists = (this.playLists.filter((playList) => ((playList.id !== this.playList.id) && (playList.title.toLowerCase() === this.playListTitle.toLowerCase())))).length > 0;
        if (!playListExists) {
            this.errorMessage = '';
            this.playList.lastModifiedDate = new Date().getTime();
            this.playLists = this.playLists.map((playListObj) => {
                if (playListObj.id === this.playList.id) {
                    playListObj = this.playList;
                }
                return playListObj;
            });
            this.originalPlayList = JSON.parse(JSON.stringify(this.playList));
            localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
        }
        else {
            this.errorMessage = 'This playlist already exists.';
        }
    }
    cancelEdit() {
        this.playList = JSON.parse(JSON.stringify(this.originalPlayList));
        this.playListSongs = this.getPlayListSongs();
        this.uISongs = (((this.searchTerm) ? this.searchedSongs : (this.playListSongs || [])) || []);
        this.noSongsFound = (this.uISongs.length === 0);
    }
    compareObject(playList1, playList2) {
        return this.objectUtilities.compareObject(playList1, playList2);
    }
    titleChanged() {
        this.playList.title = this.playListTitle;
    }
}
EditPlayListComponent.ɵfac = function EditPlayListComponent_Factory(t) { return new (t || EditPlayListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DataSourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_date_utilities__WEBPACK_IMPORTED_MODULE_4__["DateUtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_object_utilities__WEBPACK_IMPORTED_MODULE_6__["ObjectUtilities"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_array_utilities__WEBPACK_IMPORTED_MODULE_7__["ArrayUtilities"])); };
EditPlayListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPlayListComponent, selectors: [["edit-playlist"]], decls: 19, vars: 9, consts: [[1, "tabs-container"], [3, "selectedTab", "tabConfig"], [1, "header-css"], [1, "title-div"], ["matInput", "", "type", "search", "autocomplete", "off", 1, "search-input", 3, "ngModel", "change", "ngModelChange"], [1, "action-icons"], ["title", "Add Songs", "matSuffix", "", 1, "action-icon", 3, "click"], ["class", "action-icon", "title", "Save Changes", "matSuffix", "", 3, "click", 4, "ngIf"], ["class", "action-icon disabled", "title", "Cancel Changes", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "search-box-container"], [3, "searchPlaceHolder", "searchBoxChangeEmt"], [1, "content"], [1, "playlist-title"], ["cdkDropList", "", "id", "playlist-songs", "class", "example-list", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid", 4, "ngIf"], ["title", "Save Changes", "matSuffix", "", 1, "action-icon", 3, "click"], ["title", "Cancel Changes", "matSuffix", "", 1, "action-icon", "disabled", 3, "click"], ["cdkDropList", "", "id", "playlist-songs", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "id", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "id"], [1, "song-title"], ["_ngcontent-xvi-c115", "", 1, "song-img-wrap"], [1, "song-img", 3, "src"], [1, "song-content"], [1, "song-name"], [1, "detail-css"], [1, "col-h"], [1, "col-d"], [1, "song-actions"], ["title", "Delete Playlist", "matsuffix", "", 1, "playlist-action-icon", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], [2, "color", "#b0d7f1"], [2, "color", "#bdc3c7"]], template: function EditPlayListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "custom-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditPlayListComponent_Template_input_change_5_listener() { return ctx.titleChanged(); })("ngModelChange", function EditPlayListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.playListTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditPlayListComponent_Template_mat_icon_click_7_listener() { return ctx.addSongs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EditPlayListComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EditPlayListComponent_mat_icon_10_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-search-box", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("searchBoxChangeEmt", function EditPlayListComponent_Template_app_search_box_searchBoxChangeEmt_12_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EditPlayListComponent_div_16_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EditPlayListComponent_div_17_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EditPlayListComponent_div_18_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedTab", ctx.selectedTab)("tabConfig", ctx.tabsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.playListTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.compareObject(ctx.playList, ctx.originalPlayList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.compareObject(ctx.playList, ctx.originalPlayList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("searchPlaceHolder", "Search by Songs, Album ....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uISongs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uISongs.length === 0 && !ctx.noSongsFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noSongsFound);
    } }, directives: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_14__["SearchBoxComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.tabs-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.search-box-container[_ngcontent-%COMP%] {\n  width: 400px;\n  float: right;\n  display: block;\n}\n\n.header-css[_ngcontent-%COMP%] {\n  width: 98%;\n  display: block;\n  min-height: 50px;\n  margin: 10px 10px 0px 15px;\n}\n\n.title-css[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #bdc3c7;\n  margin-bottom: 0px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 0px 16px;\n}\n\n.col-h[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.col-d[_ngcontent-%COMP%] {\n  font: normal normal 400 12px/12px \"Roboto\", sans-serif;\n}\n\n.action-icons[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  height: 48px;\n}\n\n.action-icons[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  color: #0f61fd;\n  font-size: 30px;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.playlist-action-icon-div[_ngcontent-%COMP%] {\n  width: 5%;\n  display: inline-block;\n  float: right;\n}\n\n.playlist-action-icon[_ngcontent-%COMP%] {\n  float: right;\n  padding: 5px 0px 0px 5px;\n  color: #0f61fd;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #0f61fd;\n  min-height: 60px;\n  background: #0d0d0d;\n  overflow: hidden;\n  display: block;\n  margin-top: 10px;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: solid 1px #0f61fd;\n  color: #bdc3c7;\n  display: block;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: #0d0d0d;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.title-div[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n.playlist-title[_ngcontent-%COMP%] {\n  color: #bdc3c7;\n  margin: 0px 0px 20px 0px;\n}\n\n.song-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 100%;\n}\n\n.song-content[_ngcontent-%COMP%] {\n  width: 90%;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.song-name[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.detail-css[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: #6E6E6E;\n}\n\n.song-actions[_ngcontent-%COMP%] {\n  width: 3%;\n  display: inline-block;\n  float: right;\n}\n\n.song-img-wrap[_ngcontent-%COMP%] {\n  width: 5%;\n  display: inline-block;\n  height: 70px;\n  margin: 0px 10px 0px 0px;\n}\n\n.song-img-wrap[_ngcontent-%COMP%]   .song-img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZGl0cGxheWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLHNEQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFBSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBQUo7O0FBS0U7RUFDRSxVQUFBO0FBRko7O0FBS0U7RUFDRSxzREFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtBQUZKOztBQUtFO0VBQ0Usc0RBQUE7QUFGSjs7QUFLRTtFQUNJLFlBQUE7QUFGTjs7QUFLRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0U7RUFDRSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFGSjs7QUFHSTtFQUNJLFlBQUE7QUFEUiIsImZpbGUiOiJlZGl0cGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9fY29uc3RhbnRzLnNjc3MnO1xyXG5tYXQtdG9vbGJhciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YWJzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhlYWRlci1jc3Mge1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUtY3NzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjYmRjM2M3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcclxufVxyXG5cclxuLmNvbC1oIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY29sLWQge1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTJweC8xMnB4ICRyb2JvO1xyXG59XHJcblxyXG4uYWN0aW9uLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgLmFjdGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzBmNjFmZDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnBsYXlsaXN0LWFjdGlvbi1pY29uLWRpdiB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wbGF5bGlzdC1hY3Rpb24taWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICBjb2xvcjogIzBmNjFmZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1saXN0IHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICMwZjYxZmQ7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBkMGQwZDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMGY2MWZkO1xyXG4gICAgY29sb3I6I2JkYzNjNztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogIzBkMGQwZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcblxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4gIC50aXRsZS1kaXYge1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAucGxheWxpc3QtdGl0bGUge1xyXG4gICAgY29sb3I6ICNiZGMzYzc7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuc29uZy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc29uZy1jb250ZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuXHJcbiAgLnNvbmctbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbC1jc3Mge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzZFNkU2RTtcclxuICB9XHJcblxyXG4gIC5zb25nLWFjdGlvbnMge1xyXG4gICAgd2lkdGg6IDMlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLnNvbmctaW1nLXdyYXAge1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgLnNvbmctaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditPlayListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'edit-playlist',
                templateUrl: './editplaylist.component.html',
                styleUrls: ['./editplaylist.component.scss'],
            }]
    }], function () { return [{ type: _services_datasource_service__WEBPACK_IMPORTED_MODULE_2__["DataSourceService"] }, { type: _services_helpers_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"] }, { type: _services_date_utilities__WEBPACK_IMPORTED_MODULE_4__["DateUtilityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _services_object_utilities__WEBPACK_IMPORTED_MODULE_6__["ObjectUtilities"] }, { type: _services_array_utilities__WEBPACK_IMPORTED_MODULE_7__["ArrayUtilities"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/playlist/playlist.component */ "bT9p");
/* harmony import */ var _views_editplaylist_editplaylist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/editplaylist/editplaylist.component */ "q+Ge");
/* harmony import */ var _views_addsongplaylist_addsongplaylist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/addsongplaylist/addsongplaylist.component */ "zobR");








class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                { path: '', redirectTo: '/musicapp/home', pathMatch: 'full' },
                { path: 'musicapp/home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
                { path: 'musicapp/playlist', component: _views_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlayListComponent"], pathMatch: 'full' },
                { path: 'musicapp/playlist/edit/:id', component: _views_editplaylist_editplaylist_component__WEBPACK_IMPORTED_MODULE_4__["EditPlayListComponent"], pathMatch: 'full' },
                { path: 'musicapp/playlist/songs/:id', component: _views_addsongplaylist_addsongplaylist_component__WEBPACK_IMPORTED_MODULE_5__["AddSongPlayListComponent"], pathMatch: 'full' },
                { path: '**', redirectTo: '/musicapp/home' },
            ], { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                        { path: '', redirectTo: '/musicapp/home', pathMatch: 'full' },
                        { path: 'musicapp/home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
                        { path: 'musicapp/playlist', component: _views_playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlayListComponent"], pathMatch: 'full' },
                        { path: 'musicapp/playlist/edit/:id', component: _views_editplaylist_editplaylist_component__WEBPACK_IMPORTED_MODULE_4__["EditPlayListComponent"], pathMatch: 'full' },
                        { path: 'musicapp/playlist/songs/:id', component: _views_addsongplaylist_addsongplaylist_component__WEBPACK_IMPORTED_MODULE_5__["AddSongPlayListComponent"], pathMatch: 'full' },
                        { path: '**', redirectTo: '/musicapp/home' },
                    ], { useHash: true })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], { defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zobR":
/*!********************************************************************!*\
  !*** ./src/app/views/addsongplaylist/addsongplaylist.component.ts ***!
  \********************************************************************/
/*! exports provided: AddSongPlayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongPlayListComponent", function() { return AddSongPlayListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datasource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/datasource-service */ "oFEj");
/* harmony import */ var _services_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/helpers/constants */ "TILX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ "EkNo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search-box/search-box.component */ "XPJ/");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");












function AddSongPlayListComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSongPlayListComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.saveSongs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddSongPlayListComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSongPlayListComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancelSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return {}; };
function AddSongPlayListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSongPlayListComponent_div_13_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const song_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectSong(song_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Singer(s): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Album: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("song-wrapper c-half ", ctx_r2.selectedSongs.indexOf(song_r7.id) >= 0 ? "selected" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r7.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ((song_r7 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0)).title || "").length > ctx_r2.constants.SONG_TITLE_LENGTH ? song_r7.title : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((song_r7 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0)).title || "").length > ctx_r2.constants.SONG_TITLE_LENGTH ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 8, song_r7.title, 0, ctx_r2.constants.SONG_TITLE_LENGTH - 1) + ".." : song_r7.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (((song_r7 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0)).album || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0)).user || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0)).user, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((song_r7 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0)).album || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0)).title, "");
} }
class AddSongPlayListComponent {
    constructor(dataSourceService, constants, router, activeRoute) {
        this.dataSourceService = dataSourceService;
        this.constants = constants;
        this.router = router;
        this.activeRoute = activeRoute;
        this.usersDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/users',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.albumsDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/albums',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.songsDataConfig = {
            'url': 'https://jsonplaceholder.typicode.com/photos',
            'type': 'GET',
            'body': null,
            'params': null,
            'headers': null
        };
        this.viewDataSources = [{
                'id': 1,
                'dataSourceName': 'users',
                'config': this.usersDataConfig
            }, {
                'id': 2,
                'dataSourceName': 'albums',
                'config': this.albumsDataConfig
            }, {
                'id': 3,
                'dataSourceName': 'songs',
                'config': this.songsDataConfig
            }];
        this.userMap = {};
        this.albumMap = {};
        this.songs = [];
        this.uISongs = [];
        this.itemsSize = 30;
        this.tabs = [
            {
                display: true,
                text: 'All Songs',
                link: '/musicapp/home',
                value: 'all-songs',
                sequence: 1,
                isMenuItem: false
            },
            {
                display: true,
                text: 'Play Lists',
                link: '/musicapp/playlist',
                value: 'playlist',
                sequence: 2,
                isMenuItem: false
            }
        ];
        this.tabsMenu = {
            display: false,
            text: 'Menu'
        };
        this.tabsConfig = {
            display: true,
            useComponents: false,
            menuConfig: this.tabsMenu,
            tabs: this.tabs
        };
        this.searchTerm = '';
        this.selectedTab = 'playlist';
        this.searchedSongs = [];
        this.playList = {};
        this.playLists = [];
        this.selectedSongs = [];
    }
    ngOnInit() {
        let dataSourceConfig = this.dataSourceService.fetchData(this.viewDataSources);
        dataSourceConfig.songs().subscribe((songsRresponse) => {
            if (songsRresponse && songsRresponse.data) {
                this.songs = (songsRresponse.data || []);
                this.activeRoute.params.subscribe(routeParams => {
                    this.playLists = JSON.parse((window.localStorage.getItem('VBIplayLists')) || '[]') || [];
                    this.playList = this.playLists.filter((playListObj) => (playListObj.id.toString() === routeParams['id']))[0] || {};
                    this.songs = (this.songs || []).filter((song) => (this.playList.songs.indexOf(song.id)));
                });
                this.uISongs = ((this.searchTerm) ? this.searchedSongs : this.songs).slice(0, this.itemsSize + 1);
            }
        });
        dataSourceConfig.users().subscribe((usersResponse) => {
            if (usersResponse && usersResponse.data) {
                this.userMap = this.createMap(usersResponse.data, 'id');
            }
            dataSourceConfig.albums().subscribe((albumsResponse) => {
                if (albumsResponse && albumsResponse.data) {
                    let albums = (albumsResponse.data || []).map((album) => {
                        album['user'] = { 'id': album.userId, 'user': (this.userMap[album.userId] || {}).name };
                        return album;
                    });
                    this.albumMap = this.createMap(albums, 'id');
                    this.songs = (this.songs || []).map((song) => {
                        song['album'] = { 'id': song.albumId, 'title': (this.albumMap[song.albumId] || {}).title, 'user': (this.albumMap[song.albumId] || {}).user };
                        return song;
                    });
                    this.uISongs = ((this.searchTerm) ? this.searchedSongs : this.songs).slice(0, this.itemsSize + 1);
                }
            });
        });
    }
    createMap(data, field) {
        data = data || [];
        field = field || 'id';
        let dataMap = {};
        for (let dataObj of data) {
            dataMap[dataObj[field]] = dataObj;
        }
        return dataMap;
    }
    onWindowScroll(event) {
        if ((window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 2)) {
            this.uISongs = this.uISongs.concat(((this.searchTerm) ? this.searchedSongs : this.songs).slice((this.uISongs.length + 1), ((this.uISongs.length * 2) + 1)));
        }
    }
    onSearchChange($event) {
        this.searchTerm = $event;
        this.uISongs = this.searchSongs().slice(0, this.itemsSize + 1);
    }
    searchSongs() {
        if (this.searchTerm) {
            let operatorRegex = new RegExp(this.searchTerm, 'igm');
            this.searchedSongs = this.songs.filter((songObj) => {
                return (((songObj['title'].match(operatorRegex) || []).length > 0) || ((songObj['album']['title'].match(operatorRegex) || []).length > 0) || ((songObj['album']['user']['user'].match(operatorRegex) || []).length > 0));
            });
            return this.searchedSongs;
        }
        else {
            this.searchedSongs = [];
            return this.songs;
        }
    }
    selectSong(id) {
        if (this.selectedSongs.indexOf(id) === -1) {
            this.selectedSongs.push(id);
        }
        else {
            this.selectedSongs.splice(this.selectedSongs.indexOf(id), 1);
        }
    }
    saveSongs() {
        this.playList.songs = (this.playList.songs || []).concat(this.selectedSongs) || [];
        this.playList.lastModifiedDate = new Date().getTime();
        this.playLists = this.playLists.map((playListObj) => {
            if (playListObj.id === this.playList.id) {
                playListObj = this.playList;
            }
            return playListObj;
        });
        localStorage.setItem('VBIplayLists', JSON.stringify(this.playLists));
        this.router.navigateByUrl('/musicapp/playlist/edit/' + this.playList.id);
    }
    cancelSelection() {
        this.selectedSongs = [];
    }
}
AddSongPlayListComponent.ɵfac = function AddSongPlayListComponent_Factory(t) { return new (t || AddSongPlayListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_datasource_service__WEBPACK_IMPORTED_MODULE_1__["DataSourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AddSongPlayListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddSongPlayListComponent, selectors: [["add-song-playlist"]], hostBindings: function AddSongPlayListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AddSongPlayListComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 6, consts: [[1, "tabs-container"], [3, "selectedTab", "tabConfig"], [1, "header-css"], [1, "title-css"], [1, "action-icons"], ["class", "action-icon", "title", "Add to playlist", "matSuffix", "", 3, "click", 4, "ngIf"], ["class", "action-icon", "title", "Cancel Selection", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "search-box-container"], [3, "searchPlaceHolder", "searchBoxChangeEmt"], [1, "content"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", 4, "ngFor", "ngForOf"], ["title", "Add to playlist", "matSuffix", "", 1, "action-icon", 3, "click"], ["title", "Cancel Selection", "matSuffix", "", 1, "action-icon", 3, "click"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%"], [3, "click"], [1, "song-img-wrap"], [1, "song-img", 3, "src"], [1, "song-content"], [1, "title", 3, "matTooltip"], [1, "date"], [1, "col-h"], [1, "col-d"]], template: function AddSongPlayListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "custom-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddSongPlayListComponent_mat_icon_7_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddSongPlayListComponent_mat_icon_8_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-search-box", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchBoxChangeEmt", function AddSongPlayListComponent_Template_app_search_box_searchBoxChangeEmt_10_listener($event) { return ctx.onSearchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddSongPlayListComponent_div_13_Template, 19, 19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedTab", ctx.selectedTab)("tabConfig", ctx.tabsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSongs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedSongs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchPlaceHolder", "Search by Songs, Album ....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uISongs);
    } }, directives: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_6__["SearchBoxComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.tabs-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.search-box-container[_ngcontent-%COMP%] {\n  width: 400px;\n  float: right;\n  display: block;\n}\n\n.header-css[_ngcontent-%COMP%] {\n  width: 98%;\n  display: block;\n  min-height: 50px;\n  margin: 10px 10px 0px 15px;\n}\n\n.title-css[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #bdc3c7;\n  margin-bottom: 0px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.col-h[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.col-d[_ngcontent-%COMP%] {\n  font: normal normal 400 12px/12px \"Roboto\", sans-serif;\n}\n\n.song-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.14);\n  background: #1d1e22;\n  position: relative;\n  display: inline-block;\n  margin-bottom: 24px;\n}\n\n.song-wrapper.c-full[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  width: calc(100% - 190px);\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 90px;\n}\n\n.song-wrapper.c-half[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  width: calc(100% - 110px);\n  padding: 8px 0px 0px 8px;\n}\n\n.song-wrapper.selected[_ngcontent-%COMP%] {\n  background: #054379f2;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 115px;\n  width: 150px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-img-wrap[_ngcontent-%COMP%]   .song-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-left: 12px;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 8px;\n  cursor: pointer;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #bdc3c7;\n  font: normal normal 500 16px \"Roboto\", sans-serif;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .song-desc[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.song-wrapper[_ngcontent-%COMP%]   .song-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  position: absolute;\n  bottom: 0px;\n}\n\n.action-icons[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n  height: 48px;\n}\n\n.action-icons[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  color: #0f61fd;\n  font-size: 30px;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.action-icons[_ngcontent-%COMP%]   .action-icon.disabled[_ngcontent-%COMP%] {\n  color: #535353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGRzb25ncGxheWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLHNEQUFBO0FBQ0o7O0FBRUE7RUFDSSwwSEFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ1E7RUFDSSx5QkFBQTtBQUNaOztBQUVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQVI7O0FBQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNaOztBQUNRO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBQUNaOztBQUVJO0VBQ0kscUJBQUE7QUFBUjs7QUFFSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBUjs7QUFDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ1o7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ1o7O0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFDWjs7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFDWjs7QUFDUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDWjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURKOztBQUVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUNRO0VBQ0ksY0FBQTtBQUNaIiwiZmlsZSI6ImFkZHNvbmdwbGF5bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL19jb25zdGFudHMuc2Nzcyc7XHJcbm1hdC10b29sYmFyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhYnMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGVyLWNzcyB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZS1jc3Mge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNiZGMzYzc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50ID4gbWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmNvbC1oIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY29sLWQge1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTJweC8xMnB4ICRyb2JvO1xyXG59XHJcblxyXG4uc29uZy13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMHB4IDRweCA1cHggMHB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAxcHggMTBweCAwcHggcmdiKDAgMCAwIC8gMTQlKTtcclxuICAgIGJhY2tncm91bmQ6ICMxZDFlMjI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgJi5jLWZ1bGwge1xyXG4gICAgICAgIC5zb25nLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTkwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuYy1oYWxmIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC5zb25nLWltZy13cmFwIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvbmctY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMTBweCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwcHggMHB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDU0Mzc5ZjI7XHJcbiAgICB9XHJcbiAgICAuc29uZy1pbWctd3JhcCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIC5zb25nLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvbmctY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIC5jbG9zZS1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmRjM2M3O1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsICRib2xkICRoZWFkZXItZm9udCAkcm9ibztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb25nLWRlc2Mge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzZFNkU2RTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24taWNvbnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAuYWN0aW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMGY2MWZkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzUzNTM1MztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSongPlayListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-song-playlist',
                templateUrl: './addsongplaylist.component.html',
                styleUrls: ['./addsongplaylist.component.scss'],
            }]
    }], function () { return [{ type: _services_datasource_service__WEBPACK_IMPORTED_MODULE_1__["DataSourceService"] }, { type: _services_helpers_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map