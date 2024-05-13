import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transaction } from './modeles/Transaction';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

 // private apiAuth = "https://ebank.gtbankci.com/payme_api/api/Authenticate";
 // private apiGetData = "https://localhost:7212/api/Personne/data";

 private apiAuth="https://localhost:7010/Transactions/api/GetAuth"
 private apiGetData="https://localhost:7010/Transactions/api/GetTransactions"

  private apiKey = '23tgygy-TYYZF_IOZFV';

  private status_login: boolean = false;

  // Méthode pour récupérer tous les utilisateurs depuis l'API
  getAll(): Observable<Transaction[]> {

    return this.http.get<Transaction[]>(this.apiGetData).pipe(
      catchError(this.handleError)
    );
  }


  // Méthode pour récupérer un utilisateur par son mot de passe depuis l'API
  getUserById(user: string, pass: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'apiKey': this.apiKey,
        'Cookie': 'visid_incap_3057313=REkfYPHxRX6/X52nLRFQWJLFL2YAAAAAQUIPAAAAAABS2NzfR/oSyw0IO3Zjzp6+'
      })
    };
    // Ajouter le paramètre d'authentification dans l'URL ou dans le corps de la requête selon votre API
    return this.http.get<string>(`${this.apiAuth}/${user}&${pass}`).pipe(
      catchError(this.handleError)
    );
  }

  // Méthode pour définir l'état de connexion
  setLogin(value: boolean) {
    this.status_login = value;
  }

  // Méthode pour obtenir l'état de connexion
  getLogin(): boolean {
    return this.status_login;
  }

  // Méthode de gestion des erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur s\'est produite :', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(`Code d'erreur : ${error.status}, ` + `message : ${error.error}`);
    }
    // Renvoyer une observable avec un message d'erreur lisible
    return throwError('Une erreur est survenue. Veuillez réessayer plus tard.');
  }
}
