import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  columnDefs;
  rowData;
  constructor() {
    this.columnDefs = [
        {headerName: "Make", field: "make", width: 300},
        {headerName: "Model", field: "model", width: 300},
        {headerName: "Price", field: "price", width: 300}
    ];

    this.rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]
}
}
