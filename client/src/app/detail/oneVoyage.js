"use strict";
/**
 * Created by 1547815 on 2017-12-18.
 */
var HOHO = (function () {
    function HOHO() {
        this.oneVoyage = {
            id: "1",
            userID: "1",
            title: "one",
            duration: 10,
            budget: 1000,
            isPublic: true,
            day: [
                this.newD
            ]
        };
        this.newD = {
            schedule: [
                this.newSchedule
            ]
        };
        this.newSchedule = {
            id: "2",
            budget: 100,
            destination: "Paris",
            transport: this.newTransport,
            activities: [
                this.newActivity
            ]
        };
        this.newTransport = {
            transport: "train",
            budget: 50
        };
        this.newActivity = {
            id: "1",
            address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
            budget: 20,
            begin: new Date(2017, 12, 19, 7, 0, 0),
            end: new Date(2017, 12, 19, 12, 0, 0)
        };
    }
    return HOHO;
}());
exports.HOHO = HOHO;
exports.oneVoyage = {
    id: "1",
    userID: "1",
    title: "one",
    duration: 10,
    budget: 1000,
    isPublic: true,
    day: [
        {
            schedule: [
                {
                    id: "2",
                    budget: 100,
                    destination: "Paris",
                    transport: {
                        transport: "train",
                        budget: 50
                    },
                    activities: [
                        {
                            id: "1",
                            address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
                            budget: 20,
                            begin: new Date(2017, 12, 19, 7, 0, 0),
                            end: new Date(2017, 12, 19, 12, 0, 0)
                        }
                    ]
                }
            ]
        }
    ]
};
//# sourceMappingURL=oneVoyage.js.map