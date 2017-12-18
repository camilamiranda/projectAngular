import {Voyage} from "../model/voyage";
/**
 * Created by 1547815 on 2017-12-18.
 */
export class oneVoyage{
    public static oneVoyage: Voyage = {
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
                        budget:100,
                        destination:"Paris",
                        transport:"Train",
                        activities:[
                            {
                                address:"Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
                                budget:20,
                                begin: new Date(2017,12,19,7,0,0),
                                end: new Date(2017,12,19,12,0,0)
                            }
                        ]
                    }
                ]
            },
            {
                schedule:[
                    {
                        budget:100,
                        destination:"Paris",
                        transport:"Train",
                        activities:[
                            {
                                address:"Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
                                budget:20,
                                begin: new Date(2017,12,19,7,0,0),
                                end: new Date(2017,12,19,12,0,0)
                            }
                        ]
                    }
                ]
            },
        ]
    }

}