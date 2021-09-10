// Behavior
// Loads Array elements into corresponding Object properties. 
// Additionally, initialize empty Arrays on the properties timeInEvents 
// and timeOutEvents.
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
    return arrayRecord
}

const createTimeInEvent = function (inDate) {
    const splitDate = inDate.split(" ")
    const date = splitDate[0]
    const time = splitDate[1]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time),
        date: `${date}`
    })
    return this
}

const createTimeOutEvent = function (outDate) {
    const splitDate = outDate.split(" ")
    const date = splitDate[0]
    const time = splitDate[1]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time),
        date: `${date}`
    })
    return this
}

const hoursWorkedOnDate = function (date){
    const timeIn = this.timeInEvents.find( (e) => {
       return e.date === date
    })

    const timeOut = this.timeOutEvents.find( (e) => {
       return e.date === date
    })

   
    return Math.abs(timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function (date){
   const hours = hoursWorkedOnDate.call(this, date)
   const pay = this.payPerHour
   return hours * pay
}

const allWagesFor = function () {
    //this is the object that is passed into the function which thenl
    //maps we take each single timeInEvent and get the date from it through e.date
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    //We take the date and we reduce the total for each event
    //
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function (scrArray, firstName){
    const name = scrArray.find((e) => {
        return e.firstName == firstName
        })
    return name
}

const calculatePayroll = function (recordArray){
    const total = recordArray.reduce(function (reducer, accumulater) {
        return reducer + allWagesFor.call(accumulater)
    }, 0)

    return total
}
