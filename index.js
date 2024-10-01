// Code your solution here
 function findMatching(drivers,driver){
    function checkdrivers (dri){
        if (dri.toLowerCase() == driver.toLowerCase()){
            return dri
        }
    }
    return drivers.filter(checkdrivers);
    

 }

 function fuzzyMatch (drivers,letter){ 
     function checkdrivers(driver){
      if (driver.slice(0,letter.length) == letter) { 
        return driver
    }  
    
 }
return drivers.filter(checkdrivers);
}

function matchName(drivers,driver){
    function checkdrivers(obj){
        for(let name in obj)
            if(obj[name] === driver){
                return obj
            }
        }
 return drivers.filter(checkdrivers);
    }

   