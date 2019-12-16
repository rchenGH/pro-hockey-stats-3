// Dependencies
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// @route   GET api/teams/${teamName}/rosters
// @desc    Get all teams
// @access  Public
// https://statsapi.web.nhl.com/api/v1/teams

let teamID = [];
let teamRosterUrls = [];

fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
    .then(function(res){      
        return res.json().catch(err => console.log(err))
    }).then(function(data){
        for(let i = 0; i < data.teams.length; i++){
            teamID.push(data.teams[i].id)
            const linkTeamName = data.teams[i].teamName.split(' ').join('').toLowerCase();
            teamRosterUrls.push(`https://statsapi.web.nhl.com/api/v1/teams/${teamID[i]}/roster`);

            Promise.all(teamRosterUrls.map(url => fetch(url)))
                .then(res => Promise.all( res.map(r => r.json()) )).catch(err => console.log(err))
                .then(result => {
                
// @route   GET api/teams/(teamname)/roster
// @desc    Get all teams
// @access  Public

            router.get(`/teamsAPI/${linkTeamName}/roster`, (req, res) => {
                res.json(result[i])

                fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID[i]}/roster`)
                    .then(function(res) {
                        res.json().catch(err => console.log(err));
                    }).catch(err => console.log(err))
            })
        }).catch(err => console.log(err))
        }
    }).catch(err => console.log(err))



module.exports = router;