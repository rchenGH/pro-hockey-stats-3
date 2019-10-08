module.exports = function toiTotal(result, splitsState){
    let toiArray = [];
    let timesSplit = [];
    
    for(let i = 0; i < splitsState.length; i++){
        if(splitsState[i].league.name === "National Hockey League") {
            toiArray.push(splitsState[i].stat.timeOnIce);
        }
    }

    for(let i = 0; i < toiArray.length; i++){
        timesSplit.push(toiArray[i].split(':'));
        result += parseInt(timesSplit[i][0])*60;
        result += parseInt(timesSplit[i][1])
    }

    return result/60
}