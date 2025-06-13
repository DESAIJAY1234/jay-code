const marvel_characters = ["spiderman", "ironman", "hulk", "thor"];
const dc_characters = ["batman", "superman", "wonder"];
marvel_characters.push(dc_characters);
console.log(marvel_characters); // ["spiderman", "ironman", "hulk", "

const all_characters = marvel_characters.concat(dc_characters);
console.log(all_characters); // ["spiderman", "ironman", "hulk", "thor", "batman", "superman", "wonder"]

const all_characters2 = [...marvel_characters, ...dc_characters];
console.log(all_characters2); // ["spiderman", "ironman", "hulk", "thor", "batman", "superman", "wonder"]
console.log(all_characters2.length); // 7
console.log(all_characters2[0]); // "spiderman"
console.log(all_characters2[all_characters2.length - 1]); // "wonder"
console.log(all_characters2[3]); // "thor"
console.log(all_characters2[all_characters2.length - 2]); // "superman"
console.log(all_characters2[all_characters2.length - 3]); // "batman"
console.log(all_characters2[all_characters2.length - 4]); // "hulk"
console.log(all_characters2[all_characters2.length - 5]); // "ironman"          
console.log(all_characters2[all_characters2.length - 6]); // "spiderman"