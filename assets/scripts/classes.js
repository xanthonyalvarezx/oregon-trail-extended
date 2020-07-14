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

//---------- Doctor ------------//
class Doctor extends Traveler {
    constructor(name, food = 1, isHealthy = true) {
        super()
        this.name = name
        this.food = food
        this.isHealthy = isHealthy

    }

    heal(Traveler) {
        Traveler.isHealthy = true
    }
}

//---------- Hunter ------------//

class Hunter extends Traveler {
    constructor(name, food = 2, isHealthy = true) {
        super()
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }
    hunt() {
        this.food += 5

    }
    eat() {

        if (this.food > 0) {
            this.food -= 2
        }
        if (this.food < 2) {
            this.food = 0
            this.isHealthy = false
        }

    }
    giveFood(traveler, numberOfFoodUnits) {
        if (this.food > numberOfFoodUnits) {
            this.food -= numberOfFoodUnits
            traveler.food += numberOfFoodUnits

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

    join(Traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(Traveler)

        }

    }







    shouldQuarantine() {
        let quarentine = this.passengers.some(traveler => traveler.isHealthy === false)
        return quarentine


    }

    totalFood() {
        let foodSum = this.passengers.reduce((sum, traveler) => {
            let result = sum + traveler.food
            console.log(result)
            return result
        }, 0)
        return foodSum
    }
}



function newTraveler() {
    newPerson = document.createElement('div')
    newPerson.class = 'person'
    let nextTraveler = new Traveler(travelerName.value)
    let personImage = document.createElement('img')
    personImage.src = 'assets/farmer.png'
    let eatFood = document.createElement('button')
    let huntForFood = document.createElement('button')
    eatFood.class = 'eat'
    eatFood.innerText = 'Eat'
    huntForFood.class = 'hunt'
    huntForFood.innerText = 'Hunt'
    newPerson.append(eatFood, huntForFood, personImage, JSON.stringify(nextTraveler))
    main.append(newPerson)
    currentTravelers.append(newPerson, )
    ///---------------------------///
    eatFood.addEventListener('click', function () {
        console.log('clicked')
        nextTraveler.eat()
    })
}

addTraveler.addEventListener('click', function () {
    newTraveler()


})

function newWagon() {
    nextWagon = document.createElement('div')
    let newWagon = new Wagon(newWagonCapacity.value)

    let quarentineWagon = document.createElement('button')
    quarentineWagon.class = 'createWagon'
    quarentineWagon.innerText = ' Quarentine?'

    wagonImg = document.createElement('img')
    wagonImg.src = 'assets/oldwagon.png'
    main.append(nextWagon)
    nextWagon.append(JSON.stringify(newWagon), quarentineWagon, wagonImg)

}

createWagon.addEventListener('click', function () {
    newWagon()



})