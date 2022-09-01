import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  filter_openned = false;

  filter_onclick() {
    this.filter_openned = !this.filter_openned
  }

}
