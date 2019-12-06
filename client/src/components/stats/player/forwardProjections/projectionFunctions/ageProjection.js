
module.exports = function ageProjection(age, points){
    let pointsPer82Projection = 0
    if(age < 28){
        pointsPer82Projection = points * 1.05
        return pointsPer82Projection
    } else if ( age === 30) {
        pointsPer82Projection = points
        return pointsPer82Projection
    } else if (age > 31 && age <34){
        pointsPer82Projection =  points * 0.97
        return pointsPer82Projection
    } else {
        pointsPer82Projection =  points * 0.95;
        return pointsPer82Projection
    }
}