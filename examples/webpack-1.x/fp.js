let addYears = require('date-fns/fp/addYears')
let dateFns = require('date-fns/fp')
let formatWithOptions = dateFns.formatWithOptions
let eo = require('date-fns/locale/eo')

let addFiveYears = addYears(5)
let dateToString = formatWithOptions({locale: eo}, 'd MMMM yyyy')

let dates = [
  new Date(2017, 0 /* Jan */, 1),
  new Date(2017, 1 /* Feb */, 11),
  new Date(2017, 6 /* Jul */, 2)
]

let formattedDates = dates
  .map((date) => dateToString(addFiveYears(date)))
  .join(', ')

console.log(formattedDates === '1 januaro 2022, 11 februaro 2022, 2 julio 2022')
