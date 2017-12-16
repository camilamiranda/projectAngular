import {Destination} from "./destination";
export class Voyage{
    id: string;
    userID: string;

    title: string;
    days:number;
    budget:number;
    isPublic: boolean;
    
    destinations:Destination[];
}
