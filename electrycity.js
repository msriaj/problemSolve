function getElecBill(params) {
    let firstPrice = 5;
    let secondPrice = 6;
    let lastPrice = 7;

    let finalPrice = 0;

    if (params <= 100) {
        finalPrice = firstPrice * params;
        console.log(finalPrice);
    }
    else if (params <= 200) {
        let first100unit = firstPrice * 100;
        finalPrice = ((params - 100) * secondPrice) + first100unit;
        console.log("first 100 unit price", first100unit);
        console.log("others unit price", finalPrice - first100unit);
        console.log("total price", finalPrice);
    }
    else {
        let first100unit = firstPrice * 100;
        let second100unit = secondPrice * 100;
        finalPrice = ((params - 200) * lastPrice) + first100unit + second100unit;
        console.log("first 100 unit price", first100unit);
        console.log("second 100 unit price", second100unit);
        console.log("others unit price", (finalPrice - first100unit) - second100unit);
        console.log("total price", finalPrice);

    }

}
getElecBill(300);
