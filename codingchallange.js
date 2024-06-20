// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age ,and stored the data into an array (one array for each) For now ,they are just interested in knowing whether a dog is an adult or a puppy . A dog is an adult if it is at least 3 years old , and its a puppy if its less than 3 year old.

//TEST DATA 1: jULIAS DATA [3,2,1,7,17],Kates data [9,2,5,3,1]

const doggy = function (dogy_julia, dogy_kate) {
  const resultd_dog = dogy_julia.slice();

  // resultd_dog.splice(1, 2);
  // resultd_dog.splice(-2);
  const maindog = resultd_dog.concat(dogy_kate);
  maindog.forEach(function (dogvalue, i) {
    if (dogvalue >= 3) {
      console.log(`this is ${dogvalue} years old adult dog`);
    } else {
      console.log(`this is a puppy with age of ${dogvalue}`);
    }
  });
};
doggy([3, 2, 1, 6, 17], [3, 9, 2, 5, 3, 1]);
doggy([1, 2, 1, 6, 7], [2, 6, 3, 2, 9, 1]);

//Coding challange 2
/*Lets go back to Julia and Kates study about dogs. This time , they want to convert dog ages to human ages and calculate the average age of the Dogs in their study.*/

/*Create a function 'calcAverageHumanAge' , which accepts an arrays of dog's ages('ages'),and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old , calculate the dog's age in,humanAge=2*dogAge.If the dog is >2 years old, humanAge =16+dogAge*4.

2. Remove any ages less than 18   human years old (which is the same as keeping dogs that are at least 18 years old).
 
3. Calculate the average human age of  all adult dogs. (you should already know from other challanges how we calculate averages)
4.Run the function for the both test datasets
TEST DATA 1:[5,2,4,1,15,8,3]
TEST DATA 2:[16,6,10,5,6,1,4]

*/

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const adultDogs = humanAge.filter(function (someAge) {
    return someAge >= 18;
  });

  console.log(adultDogs); // here we got the adult dogs whose human age are greater than 18

  const aver_dog =
    adultDogs.reduce((acc, curr) => acc + curr, 0) / adultDogs.length;
  return aver_dog;
};
const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(average1, average2);

//CODING CHALLANGE 4
/* Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.

Eating too much means the dog's currnet food portion is larger than the recommended portion , and eating too little is the opposite.

Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended poriton .

1.Loop over the array containing dog objects , and for each dog, calculate the recommended food portion and add it to the object as a new property. DO NOT create a new array , simply loop over the array. 
Formula: recommendedFood =weight **0.75*28. (The result is in grams of food, and the weight needs to be in kg)

2.Find Sarah's dog and log to the console whether it's eating too much or too little .HINT:Some dogs have multiple owners , so you first need to find Sarah in the owners array , and so this one is a bit tricky (on purpose)

3.Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle).

4.Log a string to the console for each array created in 3., like this:'Matilda and Alice and Bob's dogs eat too much!' and "Sarah and John and Michael's dogs eat too little!"

5.Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true of false.)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condtion used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions inside the array's object )

Hint 1. : Use many different tools to solve these challanges , you can use the summary lecture to choose between them

Hint 2. : Being within a range 10% above and below the recommended protion means: current > (recommended * 0.90) && current <(recommended * 1.10).Basically , the current poriton should be between 90% and 110% of the recommended portion.
*/
//TEST DATA:

const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Alice", "Bob"],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ["Matilda"],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ["Sarah", "John"],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ["Michael"],
  },
];

// 1.

dogs.forEach((dog) => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

//2.

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? "too much" : "too little"
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter((dogeatingmuch) => dogeatingmuch.recFood < dogeatingmuch.curFood)
  .flatMap((thissdog) => thissdog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(
    (dogeatinglittle) => dogeatinglittle.recFood > dogeatinglittle.curFood
  )
  .flatMap((thisdog) => thisdog.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(" and ")}'s eats too much.`);
console.log(`${ownersEatTooLittle.join(" and ")}'s eats too little.`);

//5.
const Equal_food = dogs.some((dogs) => dogs.curFood === dogs.recFood);
console.log(Equal_food);

//6.
const okay_food = (dogs) =>
  dogs.curFood > dogs.recFood * 0.9 && dogs.curFood < dogs.recFood * 1.1;
dogs.some(okay_food);

//7.
console.log(dogs.filter(okay_food));

// 8.
const sorted_dogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sorted_dogs);
