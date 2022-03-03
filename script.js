// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
// 1b
console.log(warmHugs.toUpperCase());
// 1c
//console.log(warmHugs.replace("like", "love"));
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);
// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";
// 2b
beenImpaled = beenImpaled.slice(17, 34);
console.log(beenImpaled);
//console.log(beenImpaled.slice(-18));
// 3a
let dotDotDot = "...";
// 3b
let skullBones;
skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);
// 4
console.log(Math.PI);
// 5
let randomNumber = Math.random(); // 0 through 0.99999
randomNumber *= 3; // 0 to 2.999999
randomNumber++;
randomNumber = Math.floor(randomNumber); //gets rid of decimal
console.log(randomNumber);
// console.log(randomNumber = Math.floor(Math.random() * 3) + 1);

// Bonus 6
console.log(" Let It Go!".toUpperCase().repeat(3).slice(-21));
// 7a
let reindeers = "Reindeers are better than people.";
// 7b
reindeers = reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people.");
console.log(reindeers); //OR
//console.log(reindeers.replace(/ /g, '_')); /g = global (for the whole string) OR
//console.log(reindeers.replaceAll(' ', '_')); OR
//console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));
// 8
let squareRoot = Math.sqrt(2);
console.log(squareRoot);
//OR
console.log(Math.SQRT2);
//or
console.log(Math.sqrt(2));
// 9
//let newRandomNumber = Math.random();
//newRandomNumber *= 17;
//newRandomNumber = Math.floor(newRandomNumber);
//newRandomNumber +=7;
//console.log(newRandomNumber); OR 
console.log(newRandomNumber = Math.floor(Math.random() * 17) + 7);
// to return a random integer between min and max: Math.floor(Math.random () * max - min + 1) + min >> floor sets min. * = max - min + 1