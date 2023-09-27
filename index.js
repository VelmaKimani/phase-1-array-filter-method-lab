function findMatching(drivers, string){
    console.log(drivers);
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === string.toLowerCase()
});
    // let newDrivers = [];
    // for(let driver of drivers){
    //     if(driver === string || driver.toLowerCase() === string.toLowerCase()){
    //         console.log(driver);
    //         newDrivers.push(driver);
    //     }
    // }
    // return newDrivers;
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver){
        return driver[0][0] === string[0][0] });
      //  return driver.toLowerCase().substring(0, string.length) === string.toLowerCase() })
}

function matchName(drivers, string){
    return drivers.filter(function(driver){
        return driver.name === string;
    });
    
}
