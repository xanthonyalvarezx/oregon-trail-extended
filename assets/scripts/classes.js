class Traveler {
    constructor(name, food = 1, isHealthy = true) {
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }
    hunt() {
        this.food += 2

    }
    eat() {
        if (this.food > 0) {
            this.food -= 1
        } else {
            this.isHealthy = false
        }
    }

}
////////////  wagon //////////////


class Wagon {
    constructor(capacity) {
        this.capcity = capacity
        this.passengers = []

    }

    getAvailableSeatCount() {
        return this.capcity - this.passengers.length

    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }

    }







    shouldQuarantine() {
        let quarentine = this.passengers.some(traveler => traveler.isHealthy === false)
        return quarentine
    }
    totalFood() {
        let allFood = this.passengers.reduce(traveler => traveler.food)
        return allFood

    }
}