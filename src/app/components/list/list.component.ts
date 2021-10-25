import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  author: string;
  tag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '#13989', name: '.form-groups-sm . form-groups-lg shrink textarea', author: 'limitsudios', tag: 'css'},
  {position: '#13987', name: 'Tooltip Arrows in Modal example facing wrong way', author: 'hnrch02', tag: 'js'},
  {position: '#13981', name: 'Table improvement', author: 'SDCore', tag: 'css'},
  {position: '#13978', name: 'Tooltip Arrows in Modal example facing wrong way', author: 'Tjoosten', tag: 'css'},
  {position: '#13977', name: 'Table improvement', author: 'XhmikosR', tag: 'Docs'},
  {position: '#13976', name: 'Bootstrap site: right-hand navigation text becomes rasterized after scrooling.', author: 'Julioarmandof', tag: 'js'},
  {position: '#13974', name: 'Tooltip unnecessarily breaks into multiple lines', author: 'limitsudios', tag: 'css'},
  {position: '#13972', name: 'Tooltip Arrows in Modal example facing wrong way', author: 'hnrch02', tag: 'js'},
  {position: '#13966', name: 'Table improvement', author: 'SDCore', tag: 'css'},
  {position: '#43963', name: 'Tooltip unnecessarily breaks into multiple lines', author: 'Tjoosten', tag: 'css'},
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'author', 'tag'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
