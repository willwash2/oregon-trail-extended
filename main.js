class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = (true)
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food > 0) {

            this.food -= 1

        }
        else {
            this.isHealthy = (false)
        }

    }
}
class Doctor extends Traveler {
    constructor(name) {
        super(name)

    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2

    }
    hunt() {
        this.food += 5

    }
    eat() {
        if (this.food > 1) {

            this.food -= 2

        }
        else {
            this.isHealthy = (false)
            this.food = 0
        }
    }
    giveFood(traveler, numberOfFoodUnits) {

        if (this.food >= numberOfFoodUnits) {
            this.food -= numberOfFoodUnits
        }

    }
}






class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }


    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(travelers) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(travelers)

        }
    }

    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            if (this.passengers[index].isHealthy === false) {
                return true

            }
        } return false
    }
    totalFood() {
        let totalNumber = 0
        for (let index = 0; index < this.passengers.length; index++) {
            totalNumber += this.passengers[index].food
        }
        return totalNumber
    }
}
