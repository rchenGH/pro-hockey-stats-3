module.exports = function toiStat (result, toiArray){
    const timesSplit = []

    timesSplit.push(toiArray.split(':'));
    result += parseInt(timesSplit[0][0])*60;
    result += parseInt(timesSplit[0][1])

    return result/60
}





