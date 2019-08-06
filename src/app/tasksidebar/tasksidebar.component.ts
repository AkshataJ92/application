import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-tasksidebar',
  templateUrl: './tasksidebar.component.html',
  styleUrls: ['./tasksidebar.component.css']
})
export class TasksidebarComponent implements OnInit {

  @Input() categoryName:string="";
  @Output() out=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 onSearchClick(searchTerm){
   this.out.emit(searchTerm);
 }
}
