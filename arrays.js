const euroCities = ["Paris", "London", "Rome", "Berlin", "Amsterdam"];
const secondCity = euroCities[1];

const firstCity = euroCities[0];
euroCities[0] = "Berlin";
console.log(euroCities);

console.log(euroCities.length);

euroCities.pop();
console.log(euroCities);

euroCities.push("Budapest");
console.log(euroCities);

// 6. Bonus: Remove the second and third items from the euroCities array.
delete euroCities[1, 2];
console.log(euroCities);

// 7.
const asianCities = ["Singapore", "Kuta", "Phnom Phen", "Labuanbajo", "Tokyo"];
console.log(asianCities);

 const citiesLeaWent = asianCities.slice(1, 4);
 console.log("Lea went to " + citiesLeaWent);

//  9. Bonus
const worldCities = euroCities.concat([asianCities]);
console.log(worldCities);

// 10. Reverse the order of worldCities
worldCities.reverse();
console.log(worldCities);

// 11. Bonus
worldCities.splice(2, "Toronto");
console.log(worldCities);