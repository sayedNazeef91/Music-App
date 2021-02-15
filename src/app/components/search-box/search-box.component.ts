import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchBoxChangeEmt: EventEmitter<string> = new EventEmitter<string>();
  @Input() searchPlaceHolder: string = 'Search here';
  searchedText: '';
  searchInterval = null;

  constructor() { }

  ngOnInit() { }

  onTextChange() {

    if (this.searchInterval) {

      try {

        clearTimeout(this.searchInterval);
      } catch (error) {

        console.log(error);
      }
    }

    this.searchInterval = setTimeout(() => {

      this.searchBoxChangeEmt.emit(this.searchedText);
    }, 800);
  }
}