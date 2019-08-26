import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskdataService } from './taskdata.service';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
arr:Task[]=[];
taskData:any;
errormessage:string='';
name:string="Task";
  constructor(private _data:TaskdataService, private _router:Router, private _act:ActivatedRoute) {
    this.taskData=this._act.snapshot.data["tdata"];
  }

  ngOnInit() {
    // this._data.getAllTasks().subscribe(
    //   (data:Task[])=> {
    //   this.arr=data;
    //   },
    //   function(error) {
    //     alert(Error);
    //   },
    //   function() {}
    // );
    this.arr=this.taskData.tasks;
    this.errormessage=this.taskData.errormsg;
  }

  onTaskDelete(item:Task) {
    this._data.deleteTask(item.Id).subscribe(
      (data:any)=> {
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }

  onTaskEdit(item:Task) {
    this._router.navigate(['/task/edittask',item.Id]);
  }

  onTaskEditReactive(item){
    this._router.navigate(['/task/edittaskreactive',item.Id]);
  }

  // onTaskSideBarClick(value) {
  //   if(value!="") {
  //     this.arr=this.arr.filter(x=>x.Status.indexOf(value)!= -1);
  //   }
  //   else{
  //     this._data.getAllTasks().subscribe(
  //       (data:Task[])=> {
  //         this.arr=data;
  //       },
  //       function(error){
  //         alert(error);
  //       },
  //       function() {}

  //     );
  //   }
  //   }
    }
