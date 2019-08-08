const mongoose = require('mongoose')

const RosterSchema = new mongoose.Schema({
    id: {type: Number},
    fullName: {type: String}
});

module.exports = Post = mongoose.model('roster', RosterSchema);