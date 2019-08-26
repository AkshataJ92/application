export class Task {

  public constructor(
    public Id:string,
    public Title:string,
    public Status:string
    ){}
}

export class taskResolved{
  public constructor(public data:any[], public errormsg:String){}
}
