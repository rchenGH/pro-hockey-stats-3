// Dependencies
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const isEmpty = require('../../functions/isEmpty')

// Model
const Roster = require('../../models/Roster');

// @route   GET api/teams/${teamName}/rosters
// @desc    Get all teams
// @access  Public

const urls = [`https://statsapi.web.nhl.com/api/v1/teams`];

for(let i = 0; i < 55; i++ ){
    if ( i === 11 || i === 27 || i > 30 && i < 52){ continue }
    urls.push(`https://statsapi.web.nhl.com/api/v1/teams/${i}/roster`)
}

Promise.all(urls.map(url => fetch(url)))
    .then(res => Promise.all( res.map(r => r.json()) )).catch(err => err)
    .then(result => {

    for(let i = 0; i < 55; i++){
        if(i === 11 || i === 27 || i > 30 && i < 55) { continue }

        const linkTeamName = result[0].teams[i].teamName.split(' ').join('').toLowerCase();

// @route   GET api/teams/(teamname)/roster
// @desc    Get all teams
// @access  Public

router.get(`/teamsAPI/${linkTeamName}/roster`, (req, res) => {            
    res.json(result[i+2]);

    Roster.find().then(team => {
    
    })
        fetch(`https://statsapi.web.nhl.com/api/v1/teams/${i}/roster`)
            .then(function(res) {
                return res.json().catch(err => console.log(err));
            }).catch(err => console.log(err))
            .then(function(roster) {
                const rosterField = {};
                Roster.find().then(team => {
                    if(isEmpty(team)){

                        for(let i = 0; i < roster.roster.length; i++){

                            if(roster.roster[i].person.id){ rosterField.id = roster.roster[i].person.id }
                            if(roster.roster[i].person.fullName){ rosterField.fullName = roster.roster[i].person.fullName }

                            new Roster(rosterField).save().catch(err => err)
                        }
                    }
                }).catch(err => console.log(err))
            }).catch(err => console.log('error in rosters api ', err));
        })
    }
}).catch(err => console.log(err))

module.exports = router;