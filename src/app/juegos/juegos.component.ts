import { Component } from '@angular/core';
import { juegos } from '../modelsdedades/juegos';
import { ServeiApiService } from '../servei-api.service';
import { Resultatqry } from '../modelsdedades/resultatqry';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

  titolquebusco=""

  llJuegos: juegos[] = []

  constructor(private ServeiApi : ServeiApiService) { }
  
  ngOnInit(): void {
    this.ServeiApi.obtenirGames().subscribe((d: Resultatqry) => {
      this.llJuegos = d.results 
      console.log("---> ",this.llJuegos)
    })
  }

  ferConsulta() {
    this.ServeiApi.consultarGames(this.titolquebusco).subscribe((d: Resultatqry) => {
      this.llJuegos = d.results 
      console.log(d)

    })
    }
}


