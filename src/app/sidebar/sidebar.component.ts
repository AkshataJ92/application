import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()  categoryName:string="";
 @Output() jinal=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSearchClick(searchTerm){
    this.jinal.emit(searchTerm);
}
}
