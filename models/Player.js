const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    profile: {
        id: { type: String },
        fullName: { type: String },
        link: {type: String },
        firstName: { type: String },
        lastName: { type: String },
        primaryNumber: { type: String },
        birthDate: { type: String },
        currentAge: { type: Number },
        birthCity: { type: String },
        birthStateProvince: { type: String },
        birthCountry: { type: String },
        nationality: { type: String },
        height: { type: String },
        weight: { type: Number },
        active: { type: Boolean},
        alternateCaptain: { type: Boolean},
        captain: { type: Boolean},
        rookie: { type: Boolean },
        shootsCatches: { type: String},
        rosterStatus: { type: String },
        currentTeam: { 
            id: { type: String },
            name: { type: String },
            link: {type : String },
        },
        primaryPosition: {
            code: { type: String },
            name: { type: String },
            type: { type: String },
        },
        stats: {
            splits: [
                {
                    season: {type: String },
                    stat: {
                        timeOnIce: {type: String},
                        assists: {type: Number },
                        goals: {type: Number },
                        pim: { type: Number },
                        shots: { type: Number },
                        games: { type: Number },
                        hits: { type: Number},
                        powerPlayGoals: { type: Number},
                        powerPlayPoints: { type: Number },
                        powerPlayTimeOnIce: { type: String},
                        evenTimeOnIce: { type: String },
                        penaltyMinutes: { type: String },
                        faceOffPct: { type : Number},
                        shotPct: { type: Number },
                        gameWinningGoals: { type: Number },
                        overtimeGoals: { type: Number },
                        shortHandedGoals: { type: Number },
                        shortHandedPoints: {type: Number},
                        shortHandedTimeOnIce: { type: String},
                        blocked: { type: Number },
                        plusMinus: { type: Number },
                        points: { type: Number },
                        shifts: { type: Number }
                    },
                    team: {
                        id: { type: Number },
                        name: { type: String },
                        link : { type: String }
                    },
                    league: {
                        id: { type: Number },
                        name: { type: String },
                        link: { type: String }
                    },
                    sequenceNumber: { type: Number }
                }
            ]
        }
    }
});

module.exports = Player = mongoose.model('player', PlayerSchema)