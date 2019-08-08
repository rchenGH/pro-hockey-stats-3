const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String },
    link: {type: String },
    abbeviation: {type: String },
    teamName: {type: String },
    locationName: {type: String },
    division: {
        id: {type: String },
        name: {type: String },
        abbreviation: {type: String }
    }
});

module.exports = Team = mongoose.model('team', TeamSchema);