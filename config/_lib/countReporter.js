let fs = require('fs')

let countFilename = './tmp/tests_count.txt'

function countReporter() {
  this.onRunComplete = function (_, result) {
    let runCount = result.success

    fs.readFile(
      countFilename,
      { encoding: 'utf-8', flag: 'a+' },
      function (err, data) {
        if (err) {
          throw err
        }

        let totalCount = (parseInt(data, 10) || 0) + runCount

        fs.writeFile(
          countFilename,
          totalCount.toString(),
          'utf-8',
          function (err) {
            if (err) {
              throw err
            }
          }
        )
      }
    )
  }
}

module.exports = countReporter
