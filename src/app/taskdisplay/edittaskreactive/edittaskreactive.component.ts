import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-edittaskreactive',
  templateUrl: './edittaskreactive.component.html',
  styleUrls: ['./edittaskreactive.component.css']
})
export class EdittaskreactiveComponent implements OnInit {
  id: string;
  displayTask: Task;
  task: FormGroup;
  temp:Task[]=[];
  constructor(
    private fb: FormBuilder,
    private _act: ActivatedRoute,
    private _data: TaskdataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.id = this._act.snapshot.params["Id"];
    this._data.getTaskById(this.id).subscribe((data: Task[]) => {
      this.displayTask = data[0];
      this.task.patchValue({
        Id: this.displayTask.Id,
        Title: this.displayTask.Title,
        Status: this.displayTask.Status
      });
    });

    this.task = this.fb.group({
      Id: new FormControl(null, Validators.required),
      Title: new FormControl(null, Validators.required),
      Status: new FormControl(null, Validators.required)
    });
  }

  onEditTask() {
    this._data
      .editTask(
        new Task(
          this.task.value.Id,
          this.task.value.Title,
          this.task.value.Status
        )
      )
      .subscribe((data:Task[]) => {
        this.temp = data;
        console.log(this.temp);
        this._router.navigate(["/task"]);
      });
  }
}
