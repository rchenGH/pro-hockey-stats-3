// Dependencies
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Model
const Roster = require('../../models/Player');

// is empty object
function isEmpty(arr) {
    if( arr === undefined || arr.length == 0  || arr === null ){
        return true;
    } else {
        return false;
    }
}

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

        router.get(`/teamsAPI/${linkTeamName}/roster/players`, (req, res) => {
            res.json(result[i+2]);
        })
        
        const playerName = result[i+2].roster.map(x =>  x.person.fullName)
        const linkPlayerId = result[i+2].roster.map(x =>  x.person.id)

        playerName.map((name, index) => {

        // @route   GET api/teams/(teamname)/roster/players/people/${player}
        // @desc    Get all teams
        // @access  Public

        const linkName = name.split(" ").join("").toLowerCase();
        
        router.get(`/teamsAPI/${linkTeamName}/roster/${linkName}`, (req, res) => { 
            fetch(`https://statsapi.web.nhl.com/api/v1/people/${linkPlayerId[index]}?expand=person.stats&stats=yearByYear`)
                .then(function(res){
                    return res.json().catch(err => console.log(err));
                }).catch(err => console.log(err))
                .then(function(player){
                    res.json(player)
                }).catch(err => console.log('error in player stats api', err));
            })
        })
    }
}).catch(err => console.log(err))

module.exports = router;