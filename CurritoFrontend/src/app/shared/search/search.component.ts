import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  busqueda: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    this.onEnter.emit(this.busqueda);
  }

}
