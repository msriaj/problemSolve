function radianToDegree(radian) {
    //checking whether input is valid or not
    if (typeof radian !== "number") {
        return "Please Input A Valid Number";
    }
    // set pi value from Math.PI
    const pi = Math.PI;
    // main formula of radianToDegree
    const radianResult = radian * (180 / pi);
    // set radianResult decimal limit
    const radianFixed = radianResult.toFixed(2);
    //convert radianFixed string to number
    const radianResultInNumber = parseFloat(radianFixed);
    return radianResultInNumber
}
// console.log(radianToDegree(100));
// console.log(radianToDegree("100"));



function isJavaScriptFile(fileName) {
    //checking whether input is valid or not
    if (typeof fileName !== "string") {
        return "Please Input A Valid String FileName";
    }
    // main functional Work : checking js file or not
    else if (fileName.endsWith(".js")) {
        return true
    }
    else {
        return false
    }
}
// console.log(isJavaScriptFile("index.js"));
// console.log(isJavaScriptFile("index.js.png"));
// console.log(isJavaScriptFile(000));

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    //checking whether input is valid or not
    if (typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number") {
        return "Please Input Three Valid Number Of Quantity";
    }
    // set price with quantity and multiply theme
    const totalDieselPrice = dieselQuantity * 114;
    const totalPetrolPrice = petrolQuantity * 130;
    const totalOctanePrice = octaneQuantity * 135;
    // sum of the total price
    const totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalPrice;
}

// console.log(oilPrice(1, 1, 1));
// console.log(oilPrice(1, "1", 1));
// console.log(oilPrice(1, 10, 1));

function publicBusFare(peopleNumber) {
    //checking input valid or not
    if (typeof peopleNumber !== "number") {
        return "Please Input A Valid Number";
    }
    // provided value set to const
    const busCapacity = 50;
    const microBusCapacity = 11;
    const perPublicBusFare = 250;
    // checking if there are any people left after completing the bus
    if (peopleNumber % busCapacity !== 0) {
        // checking is there any people left after completed bus and microbus
        if ((peopleNumber % busCapacity) % microBusCapacity !== 0) {
            // set how many people for public bus and multiply with public bus fare
            const publicForPublicBus = (peopleNumber % busCapacity) % microBusCapacity;
            const totalPublicBusFare = publicForPublicBus * perPublicBusFare;
            return totalPublicBusFare;
        }
        else {
            return 0;
        }
    }
    else {
        return 0;
    }
}
console.log(publicBusFare(50));
console.log(publicBusFare(49));
console.log(publicBusFare(10));
console.log(publicBusFare("50"));
console.log(publicBusFare(112));


function isBestFriend(firstPerson, secondPerson) {
    //checking input valid or not
    if (typeof firstPerson !== "object" || typeof secondPerson !== "object") {
        return "Please Input Two Valid Object ";
    }
    // get value from parameter object
    const firstPersonName = firstPerson.name;
    const firstPersonFriend = firstPerson.friend;
    const secondPersonName = secondPerson.name;
    const secondPersonFriend = secondPerson.friend;
    // cross-checking whether object values are the same or not
    if (firstPersonName === secondPersonFriend && firstPersonFriend === secondPersonName) {
        return true
    }
    else {
        return false
    }
}

