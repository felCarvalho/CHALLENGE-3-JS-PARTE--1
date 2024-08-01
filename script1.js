//FUNDAMENTOS JS PARTE -1
//CHALLENGE#3

let result01_Olphins = 96;
let result02_Olphins = 108;
let result03_Olphins = 89;

let result01_Koalas = 88;
let result02_Koalas = 91;
let result03_Koalas = 110;

const scoreOlphins = (result01_Olphins + result02_Olphins + result03_Olphins) / 3;
const scoreKoalas = (result01_Koalas + result02_Koalas + result03_Koalas) / 3;
console.log(scoreOlphins, scoreKoalas)

if (scoreOlphins > scoreKoalas) {
    console.log(`Dolphins win the trophy`)
} else if (scoreKoalas > scoreOlphins){
    console.log(`Koalas win the trophy`)
} else if (scoreOlphins === scoreKoalas) {
    console.log(`Both win the trophy`)
}