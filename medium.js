//medium
const cutPizzaSlices = (numOfSlices) => {
    return (numOfPeople) => {
        return numOfSlices / numOfPeople;
    }
}

const sharePizza = cutPizzaSlices(8)
console.log(sharePizza(2));
console.log(sharePizza(3));
