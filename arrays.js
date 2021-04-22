const euroCities = ["Paris", "London", "Rome", "Berlin", "Amsterdam"];
const secondCity = euroCities[1];

euroCities[0] = "Berlin";
console.log(euroCities);

console.log(euroCities.length);

euroCities.pop();
console.log(euroCities);

euroCities.push("Budapest");
console.log(euroCities);

// 6. Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities);

// 7.
const asianCities = ["Singapore", "Kuta", "Phnom Phen", "Labuanbajo", "Tokyo"];
console.log(asianCities);

 const citiesLeaWent = asianCities.slice(1, 4);
 console.log("Lea went to " + citiesLeaWent);

//  9. Bonus
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 10. Reverse the order of worldCities
worldCities.reverse();
console.log(worldCities);

// 11. Bonus
worldCities[2] = "Toronto";
console.log(worldCities);

// 12. Bonus
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// 13. 
console.log(worldCities.join(", "))
console.log(worldCities.join(" + "))

//  BONUS
const greetings = "Hello World";
console.log(greetings.reverse);

// Extra Practice
const favActors = ["Iza", "Jenifer Lawrence", "Ruby Rose", "Rouby", "Tabitha"];
const parentsNames = ["Dietmar", "Pascale"];

const allNames = favActors.concat(parentsNames, ["Kitty", "Buffy", "Lily"]);
allNames.reverse();
console.log(allNames);