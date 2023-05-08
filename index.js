const returnFirstTwoDrivers = (drivers) => {
    const firstTwo = drivers.slice(0,2)
    return firstTwo
}

const returnLastTwoDrivers = function(drivers) {
    const lastTwo = drivers.slice((drivers.length - 2), (drivers.length + 1))
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
    return function(fare) {
        const newFare = i * fare
        return newFare
    }
}

const fareDoubler = function(newFare) {
    return newFare * 2

}

const fareTripler = function(newFare) {
    return newFare * 3
}

function selectDifferentDrivers(drivers, funk) {
    
    return funk(drivers)    
}