// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (number) => (fare) => number * fare

const fareDoubler = fare => createFareMultiplier(2)(fare)

const fareTripler = fare => createFareMultiplier(3)(fare)

const selectDifferentDrivers = function(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}