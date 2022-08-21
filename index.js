// Code your solution here
function findMatching(drivers, factor) {
    return drivers.filter(function(driver) {
        return(driver.toUpperCase() === factor.toUpperCase());
    })
}

function fuzzyMatch(drivers, factor) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().substring(0, factor.length) === factor.toLowerCase()
    })
}

function matchName(drivers, factor) {
    return drivers.filter(function(driver) {
        return driver.name === factor;
    })
}