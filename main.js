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
        }
    }

    totalFood() {
        let totalNumber = 0
        for (let index = 0; index < this.passengers.length; index++) {
            totalNumber += this.passengers[index].food
        }
        return totalNumber
    }
}
