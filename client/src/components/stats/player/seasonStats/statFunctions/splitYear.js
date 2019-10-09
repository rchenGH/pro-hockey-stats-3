module.exports = function splitYear(year){
    let str = year.split('')
    str.splice(4, 0, '-')
    return str.join('')
  }