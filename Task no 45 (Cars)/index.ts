// Q45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Information about a car in a Object
// Information about a car in a Object

type Car = {
    manufacturer:string,
    model: string,
    color?: string,  // Optional property for color
    features?: string[] // Optional array of features
}

function createCar(
    manufacturer:string,
    model: string,
    color?: string,  // Optional property for color
    features?: string[] // Optional array of features
):Car {
    const car:Car = {
        manufacturer,
        model
    };
    if(color){
        car.color = color
    }
    if(features){
        car.features = features
    }
    return car;
}

const myCar = createCar("Toyota", "Camry", "Blue", ["GPS", "Sunroof"]);
console.log(myCar);