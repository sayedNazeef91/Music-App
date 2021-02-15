import { Component, ComponentFactoryResolver, Input, Output, EventEmitter, OnInit, ViewEncapsulation, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayUtilities } from '../../services/array-utilities';
import { TabConfigModel } from '../../services/models/model';

@Component({
  selector: 'custom-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TabsComponent implements OnInit {

  selectedIndex: number;
  tabData: any;
  @Input('selectedTab') selectedTab: string;
  @Input('tabConfig') tabConfig: TabConfigModel;
  @Output() tabChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() tabEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('tabContent', { read: ViewContainerRef }) tabContent: ViewContainerRef;

  constructor(private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private arrayUtils: ArrayUtilities) { }

  ngOnInit(): void {

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
        } else if (!!tab.isMenuItem) {

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
          } else if (tabsArray[i].value === thisRef.selectedTab) {

            (!!thisRef.tabData.useComponents) ? thisRef.tabChange(thisRef.tabData.tabs[i], i) : thisRef.selectedIndex = i;
            break;
          }
        }
      } else if (!!thisRef.tabData.useComponents) {
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
    } else {
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
      const dynamicComponent = <ViewContainerRef>this.tabContent.createComponent(componentFactory).instance;

      if (dynamicComponent['tabEvent'] !== undefined) {

        dynamicComponent['tabEvent'].subscribe(val => this.tabEvent.emit(val));
      }
    }

    catch (err) {
      console.log(err);
    }
  }

}
