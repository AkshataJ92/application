import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-addtaskreactive',
  templateUrl: './addtaskreactive.component.html',
  styleUrls: ['./addtaskreactive.component.css']
})
export class AddtaskreactiveComponent implements OnInit {
  task:FormGroup;
  arr:Task[]=[];
    constructor(private fb:FormBuilder, private _data:TaskdataService) { }

    ngOnInit() {
      this.task=this.fb.group({
        Id:new FormControl(null,Validators.required),
        Title:new FormControl(null,Validators.required),
        Status:new FormControl(null,Validators.required)
      });
   }

    onAddTask(){
      this._data.addTask(new Task(this.task.value.Id,this.task.value.Title,this.task.value.Status))
      .subscribe(
        (x:any)=>{
          alert("record added")
        }
      );
    }

  }
