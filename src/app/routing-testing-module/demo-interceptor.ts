import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient) {
    this.http.get('', {reportProgress: true})
  }

  cache: Map<HttpRequest, HttpEvent> = new Map<HttpRequest<any>, HttpEvent<any>>()

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.cache.has(req)) {
      return of(this.cache.get(req));
    }

    return next.handle(req).pipe(tap((event) => {

    }));
  }

  clearCache() {
    this.cache.clear();
  }
}

@Injectable()
export class MyInterceptor1 implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}

// req -> MyInterceptor -> MyInterceptor1 -> ... interceptor -> backend service (call)

//provide
