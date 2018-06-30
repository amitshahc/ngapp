import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, finalize } from "rxjs/operators";
//import { MessageService } from '../../message.service';

export class HttpsInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        const started = Date.now();
        let ok: string;
        let res: any;

        // console.log("Request headers: ", req.headers);
        // return next.handle(req);

        // clone request and replace 'http://' with 'https://' at the same time
        const secureReq = req.clone({
            url: req.url.replace('http://', 'https://')
        });
        // send the cloned, "secure" request to the next handler.
        return next.handle(secureReq).pipe(
            tap(                
                // Succeeds when there is a response; ignore other events
                (event) => {
                    // console.log("Event type", event);
                    ok = event instanceof HttpResponse ? 'succeeded' : ''
                    res = event;
                    if (ok) {
                        // console.log("Response:", res);
                        // console.log("res: status", res.status);
                        // console.log("res: headers", res.headers);
                        // console.log("res: body.id", res.body.id);
                    }
                },
                // Operation failed; error is an HttpErrorResponse
                error => ok = 'failed'),
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} "${req.urlWithParams}"
                   ${ok} in ${elapsed} ms.`;
                //this.messenger.add(msg);
                // console.log(msg);
            })
        );
    }
}