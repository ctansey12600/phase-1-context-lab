const createEmployeeRecord = function (arrayRecord) {
    const employeeRecord = {
        firstName: `${arrayRecord[0]}`,
        familyName: `${arrayRecord[1]}`,
        title: `${arrayRecord[2]}`,
        payPerHour: arrayRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}
const createEmployeeRecords = function (employeeInfo) {
    const arrayRecord = []
    const employeeRecords = employeeInfo.map(function (e) {
        arrayRecord.push(createEmployeeRecord(e))
    })
    console.log(arrayRecord)
    return arrayRecord
}

const createTimeInEvent = function (inDate) {
   
   
    // const splitDate = inDate.split(" ")
    // const date = splitDate[0]
    // const time = splitDate[1]
    // const timeIn = this.timeInEvents = {
    //     type: "TimeIn",
    //     hour: parseInt(time),
    //     date: `${date}`
    // }
    // console.log(timeIn)
}


// const allWagesFor = function () {
//     //this is the object that is passed into the function which thenl
//     //maps we take each single timeInEvent and get the date from it through e.date
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })
//     //We take the date and we reduce the total for each event
//     //
//     const payable = eligibleDates.reduce(function (memo, d) {
//         console.log(memo)
//         console.log(d)
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

