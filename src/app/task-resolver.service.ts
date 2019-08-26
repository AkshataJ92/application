import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { taskResolved } from './taskdisplay/task';
import { TaskdataService } from './taskdisplay/taskdata.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService implements Resolve<taskResolved> {

  constructor(private _data:TaskdataService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
    return (this._data.getAllTasks().pipe(
      map(x=>({tasks:x,errormsg:''})),
      catchError(error=>{
        return of({tasks:null,errormsg:'Something went wrong'})
      })
      )
    );
  }
}
