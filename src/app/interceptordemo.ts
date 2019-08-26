import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class Interceptordemo implements HttpInterceptor {

  intercept(req:HttpRequest<any>,next:HttpHandler)
  {
    const httpreq=req.clone({
     // headers:req.headers.set('Content-Type','application/json')
     headers:new HttpHeaders().set('Content-Type','application/json')
    });
    return next.handle(httpreq);
  }
}
