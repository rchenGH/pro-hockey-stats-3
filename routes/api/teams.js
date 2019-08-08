// Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fetch = require('node-fetch');

// Model
const Team = require('../../models/Team');

// is empty object
function isEmpty(arr){
    if( arr === undefined || arr.length == 0 || arr === null ){
        return true;
    } else {
        return false;
    }
}

router.get('/', (req, res) => {
    const getTeams = () => {
        fetch(`https://statsapi.web.nhl.com/api/v1/teams`)
            .then(function(res){
                return res.json().ceatch(err => console.log(err));
            }).catch(err => console.log(err))
            .then(function(teams){
                res.json(teams.teams)

                Team.find().then(team => {
                    if(isEmpty(team)){
                        for(let i = 0; i < teams.teams.length; i++){
                            const teamField = {};
                            if(teams.teams[i].id){teamField.id = teams.teams[i].id}
                            if(teams.teams[i].name){ teamField.name = teams.teams[i].name}
                            if(teams.teams[i].link){teamField.link = teams.teams[i].link}

                            if(teams.teams[i].abbreviation){ teamField.abbreviation = teams.teams[i].abbreviation }
                            if(teams.teams[i].teamName){ teamField.teamName = teams.teams[i].teamName }
                            if(teams.teams[i].locationName){ teamField.locationName = teams.teams[i].locationName }
                            
                            teamField.division = {};

                            if(teams.teams[i].division.id){ teamField.division.id = teams.teams[i].division.id }
                            if(teams.teams[i].division.name){ teamField.division.name = teams.teams[i].division.name }
                            if(teams.teams[i].division.abbreviation){ teamField.division.abbreviation = teams.teams[i].division.abbreviation }

                            new Team(teamField)
                                .save()
                                .catch(err => err);
                        }
                    }
                }).catch(err => console.log(err))
            }).catch(err => console.log(err));
    }
    getTeams();
})

module.exports = router;