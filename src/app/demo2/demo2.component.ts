import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  id:string;
  constructor(private _actroute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {

    //this.id=this._actroute.snapshot.queryParams["id"];
    this._actroute.queryParams.subscribe(
      (x)=>{
        this.id=x.id;
      }
    );
  }

  onClick1(){
    this._router.navigate(['/demo2'],{queryParams:{id:'1'}});
  }
  onClick2(){
    this._router.navigate(['/demo2'],{queryParams:{id:'2'}});
  }
  onClick3(){
    this._router.navigate(['/demo2'],{queryParams:{id:'3'}});
  }


}
