import { juegos } from './juegos';
export class Resultatqry {
    count: number = 0;              // Número total de resultados
    next: string | null = null;     // URL para la siguiente página de resultados
    previous: string | null = null; // URL para la página anterior de resultados
    results: juegos[] = [];         // Array de objetos de tipo Result (que contiene los juegos)
    user_platforms: boolean = false;// Información sobre las plataformas del usuario (según tu JSON)
}