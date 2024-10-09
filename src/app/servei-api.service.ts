import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { juegos } from './modelsdedades/juegos';
import { Resultatqry } from './modelsdedades/resultatqry';

@Injectable({
  providedIn: 'root'
})
export class ServeiApiService {


  SERVIDOR_API = 'http://localhost/'
  constructor(private httpClient: HttpClient) { }

  obtenirGames() {
    return this.httpClient.get<Resultatqry>(this.SERVIDOR_API + 'juegos.php')
  }

    consultarGames(xtitol: string) {
    const dades = {
    titolquebusco: xtitol
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Resultatqry>(this.SERVIDOR_API + 'consultargames.php',dades,
    { headers: headers })
    }

}
