import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from './modeles/Personne';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiUrl="http://localhost:5261/api"
constructor(private http:HttpClient) { }

// Méthode pour récupérer tous les utilisateurs depuis l'API
getAll():Observable<Personne[]>{
  return this.http.get<Personne[]>(`${this.apiUrl}/Personne`)
}

// Méthode pour récupérer un utilisateur par son mot de pass depuis l'API
getUserBId(motpass:string):Observable<string>{
  return this.http.get<string>(`${this.apiUrl}/Personne/getId/${motpass}`);
}

}
