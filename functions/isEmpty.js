module.exports = function isEmpty(arr){
    if(arr === undefined || arr.length === 0 || arr === null ){
        return true;
    } else {
        return false;
    }
}