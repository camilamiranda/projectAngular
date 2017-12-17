import {Transport} from './transport';
import {Activity} from './activity';
export class Schedule {
    budget: number;
    destination: string;
    transport: Transport;

    //visionner l'ensemble des activites d'un jour sur 1 carte Google Maps
    activities: Activity[]; //suggestions de Google Places
}