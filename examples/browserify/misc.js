let dateFns = require('date-fns')
let format = dateFns.format
let eo = require('date-fns/locale/eo')

let result = format(
  new Date(2017, 0, 25, 21, 28, 15),
  'eeee, dd MMMM HH:mm:ss',
  { locale: eo }
)
console.log(result === 'merkredo, 25 januaro 21:28:15')
