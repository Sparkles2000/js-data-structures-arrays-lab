// Write your solution here!
const drivers=[`Milo`, `Otis`, `Garfield`]
    function destructivelyAppendDriver() {
        return drivers.push(`Ralph`)
    }
    function destructivelyPrependDriver(Bob){
        drivers.unshift(`Bob`)
    }
    function destructivelyRemoveLastDriver(Ralph){
        drivers.pop(`Ralph`)
    }
    function destructivelyRemoveFirstDriver(Bob){
        drivers.shift(`Bob`)
    }
    function appendDriver(Broom){
        return [...drivers, `Broom`]
    }
    function prependDriver(Arnold){
        return [`Arnold`, ...drivers]
    }
    function removeLastDriver(){
        let driversCopy = drivers.slice(0, 2)
        return driversCopy
    }
    
    function removeFirstDriver(){
        let driversCopy1 = drivers.slice(1, 4)
        return driversCopy1
    }