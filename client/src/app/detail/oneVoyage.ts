import {Voyage} from "../model/voyage";
import {Transport} from "../model/transport";
import {Activity} from "../model/activity";
import {Schedule} from "../model/schedule";
import {Day} from "../model/day";
/**
 * Created by 1547815 on 2017-12-18.
 */
export class HOHO{

    oneVoyage: Voyage = {
        id:"1",
        userID:"1",
        title:"one",
        duration:10,
        budget:1000,
        isPublic:true,
        day:[
            this.newD
        ]
    }

    newD: Day = {
        schedule:[
            this.newSchedule
        ]
    }

    newSchedule: Schedule = {
        id:"2",
        budget:100,
        destination:"Paris",
        transport:this.newTransport,
        activities:[
            this.newActivity
        ]
    }

    newTransport: Transport = {
        transport:"train",
        budget:50
    }
    newActivity: Activity = {
        id:"1",
        address:"Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        budget:20,
        begin: new Date(2017,12,19,7,0,0),
        end: new Date(2017,12,19,12,0,0)
    }
}

export const oneVoyage: Voyage = {
    id:"1",
    userID:"1",
    title:"one",
    duration:10,
    budget:1000,
    isPublic:true,
    day:[
        {
            schedule:[
                {
                    id:"1",
                    budget:100,
                    destination:"Paris",
                    transport:{
                        transport:"train",
                        budget:50
                    },
                    activities:[
                        {
                            id:"1",
                            address:"Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
                            budget:20,
                            begin: new Date(2017,12,19,7,0,0),
                            end: new Date(2017,12,19,12,0,0)
                        }
                    ]
                }
            ]
        }
    ]
}