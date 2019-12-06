import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Bar, Line, Pie} from 'react-chartjs-2';
import ageProjection from '../forwardProjections/projectionFunctions/ageProjection';
import './chart.css';
import splitYear from '../../player/seasonStats/statFunctions/splitYear'

function ForwardCharts (props){

    let [seasonsArray, pointsArray, colorArray1, colorArray2, ppgaArray] = [[], [], [], [], [], []]

    const { shotsTotal, goalsTotal, assistsTotal, gamesTotal, currentAge, pointsPer82, splits } = props

    let averageShotPercentage = goalsTotal/shotsTotal;
    let averageShotsPerSeason = shotsTotal/gamesTotal;
    let averageAssistsPerGame = assistsTotal/gamesTotal;

    let assistsPer82 = averageAssistsPerGame * 82;
    let shotsPer82 = averageShotsPerSeason * 82;
    let goalsPer82 = shotsPer82 * averageShotPercentage;

    let fullAvgShotPercentage = averageShotPercentage * 100;

    splits.map((split, index) =>
        (split.league.name === "National Hockey League" ? seasonsArray.push(splitYear(splits[index].season)) : null)
    )   

    splits.map(split =>
        (split.league.name === "National Hockey League" ? pointsArray.push(split.stat.points) : null)
    )

    splits.map(split => 
        (split.league.name === "National Hockey League" ? ppgaArray.push((split.stat.points/split.stat.games).toFixed(2)) : null)
    )

    splits.map(split => 
        (split.league.name === "National Hockey League" ? colorArray1.push('rgba(240, 180, 80, 0.8)') : null)
    )

    splits.map(split => 
        (split.league.name === "National Hockey League" ? colorArray2.push('rgba(180, 120, 50, 0.8)') : null)
    )


    let lastSeason = splits.pop()

    let lastSeasonsSplit = lastSeason.season.split('')
    let startingYear = []
    let endingYear = []

    for(let i = 0; i < lastSeasonsSplit.length; i++){
        if(i <= 3 && i >=0){
            startingYear.push(lastSeasonsSplit[i])
        }
        if(i >= 4 && i <= 7){
            endingYear.push(lastSeasonsSplit[i])
        }
    }
    let nextStartingYear = parseInt(startingYear.join(''))+1
    let nextEndingYear = parseInt(endingYear.join(''))+1



    let separatedNextSeason = [nextStartingYear, nextEndingYear]
    let splitNextSeason = separatedNextSeason.join('').split('')
    splitNextSeason.splice(4,0,'-')
    let nextSeason = splitNextSeason.join('')
    seasonsArray.push(nextSeason)
    pointsArray.push(parseInt(ageProjection(currentAge, pointsPer82).toFixed(2)))

    ppgaArray.push((pointsPer82/82).toFixed(2))


    colorArray1.push('rgba(180, 70, 70)');
    colorArray2.push('rgba(180, 70, 70)');

    let dataArrayTotal = {
        chartData: {
            labels: seasonsArray,
            datasets:[
                {
                    label: 'POINTS PER SEASON',
                    data:pointsArray,
                    backgroundColor: colorArray1,
                    fontSize: '10px',
                }
            ]
        }
    }

    let dataArrayPPGA = {
        chartData: {
            labels: seasonsArray,
            datasets:[
                {
                    label: 'PPGA',
                    data: ppgaArray,
                    backgroundColor: colorArray2,
                    fontSize: '18px'
                }
            ]
        }
    }

    return(
        <div className="container">
            <Bar
                data = {dataArrayTotal.chartData}
                options = {{
                    title: {},
                    legend: {
                        fontSize: 25
                    },
                    scales: {
                        yAxes: [{ticks: {fontSize: 18, fontColor: 'rgba(200, 80, 30, 1)'}}],
                        xAxes: [{ticks: {fontSize: 18, fontColor: 'rgba(200, 80, 30, 1)'}}],
                      }
                }}
            />
            <br/><br/><br/>

            <Bar
                data = {dataArrayPPGA.chartData}

                options = {{
                    title: {
                    },
                    scales: {
                        yAxes: [{ticks: {fontSize: 18, fontColor: 'rgba(200, 80, 30, 1)'}}],
                        xAxes: [{ticks: {fontSize: 18, fontColor: 'rgba(200, 80, 30, 1)'}}],
                    }
                }}
            />
        </div>
    )

}

export default ForwardCharts