import { Injectable } from '@angular/core';
import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitterApiInterceptor implements HttpInterceptor {

 constructor() {}

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if it is a Github API request
    //nonce es random
    //if (req.url.includes('twitter')) {
    	var auth =
		"oauth_consumer_key=oC5D5H6N9VdQqGQ6pEiVuHkhX&oauth_token=223088602-ayqsyerEZNcZ2SzNpmkzGhFc6EotuyF8V7rqh9bk&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516812287&oauth_nonce=TKWD0D&oauth_version=1.0&oauth_signature=kZP/0aYwWm5GRNv06a5y0Cz67Ws=";
      // we need to add an OAUTH token as a header to access the Github API
      const clone = req.clone({ setHeaders: { 'Authorization': "5788778adsasdasdasdasd" } });
      console.log(auth);
      return next.handle(clone);
    //}
    // if it's not a Github API request, we just handle it to the next handler
    //return next.handle(req);
  }

}

