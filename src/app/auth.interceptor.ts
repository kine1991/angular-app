import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercept request', req)
        const cloned = req.clone({
            headers: req.headers.append('Auth', 'Some Random Token')
        })
        return next.handle(cloned)
        // .pipe(
        //     tap(event => {
        //         if(event.type === HttpEventType.Response){
        //             console.log('intercept', event)
        //         }
        //     })
        // )
        return next.handle(req)
        // throw new Error("Method not implemented.");
    }

}