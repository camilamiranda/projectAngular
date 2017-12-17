import {Schedule} from './schedule';
export class Voyage {
    id: string;
    userID: string;
    title: string;
    days: number;
    budget: number; //avertissement si on le depasse
    isPublic: boolean; //public = les autres utilisateurs puissent la modifie

    //l'ensemble de destinations doivent affiche sur 1 carte Google Maps pour voir
    //l'itineraire complet du voyage
    schedule: Schedule[]; //1 schedule for 1 day of voayge
}
