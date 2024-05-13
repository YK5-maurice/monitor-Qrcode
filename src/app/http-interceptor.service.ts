
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le jeton d'authentification depuis le stockage local
    const authToken = localStorage.getItem('23tgygy-TYYZF_IOZFV');

    // Cloner la requête et ajouter l'en-tête d'autorisation si un jeton est disponible
    let modifiedReq = req;
    if (authToken) {
      modifiedReq = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    // Passer la requête modifiée au gestionnaire HTTP
    return next.handle(modifiedReq);
  }
}

