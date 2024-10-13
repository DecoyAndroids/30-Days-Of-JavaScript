const countries_2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
for (i=0; i<10; i++);
while(i<=10){
    i++
};
do{
    i++
}while(i<=10);//1 zadanie

for (i=10; i>0; i--);
while(i>=0){
    i--
};
do{
    i--
}while(i>=0);//2 zadanie

n = prompt('enter a n','')
for (i =0; i < n; i++){
    console.log(i)
}// 3 zadanie

for (i = 0; i < n; i++){
    console.log('*'.repeat(i));
}//4 zadanie

for(i = 0; i<11; i++){
    console.log(`${i} x ${i} = ${i*i}`);
}//5 zadanie

console.log(`i    i^2   i^3`)
for(i = 0; i<11; i++){
    strI = i.toString()
    n = 5-strI.length 
    //console.log(n,strI)
    console.log(`${i}${' '.repeat(n)}${i**2}${' '.repeat(n+1)}${i**3}`)
}//6 zadanie

for (i = 0; i < 101; i++){
    if (i%2 == 0){
        console.log(i)
    }
}//7 zadanie

for (i = 0; i < 101; i++){
    if (i%2 == 1){
        console.log(i)
    }
}//8 zadanie

// for (i = 0; i < 101; i++){
//     for(let j = 2; j < i; i++) {
//         if(i % j === 0){
//             console.log(false)
//         }else{
//             console.log(true)
//         }
//     }
// } 9 zadanie, i simply don't understand how write this loop, that wiil be adequate

let summ_of_all = 0
for (i = 0; i < 101; i++){
    summ_of_all = summ_of_all + i;
}
console.log('the sum of all numbers from 0 to 100 is',summ_of_all)//10 zadanie

let summ_of_all_evens = 0
let summ_of_all_odds = 0
for (i = 0; i < 101; i++){
    if (i%2 == 1){
        summ_of_all_odds = summ_of_all_odds + i
    }else{

        summ_of_all_evens = summ_of_all_evens + i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${summ_of_all_evens}. And the sum of all odds from 0 to 100 is ${summ_of_all_odds}.`)//11 zadanie

let arrOfSumms = [summ_of_all_evens,summ_of_all_odds];
console.log(arrOfSumms);//12 zadanie

let random_arr = []
for (i=0;i<5;i++){
    random_arr.push(Math.floor(Math.random()*10))
}
console.log(random_arr)//13 zadanie

random_arr = []
i = 0
while (i<5){
    num = Math.floor(Math.random()*10)
    if (!random_arr.includes(num)){
        random_arr.push(num)
        i++
    }
}
console.log(random_arr)//14 zadanie

let id = ''
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (i=0;i<7;i++){
    id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id)//15 zadanie 

//level 2 
id = ''
len_id = prompt('');
for (i=0; i < len_id; i++){
    id += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(id)//1 zadanie 

hex_code = '#'
const hex_characters = 'abcdef0123456789'
for (i=0; i < 6; i++){
    hex_code += hex_characters.charAt(Math.floor(Math.random() * hex_characters.length));
}
console.log(hex_code)//2 zadanie 

console.log(`rgb(${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)},${Math.floor(Math.random() *255)})`);//3 zadanie

countries_2_UPCASE = []
for (i in countries_2){
    countries_2_UPCASE.push(countries_2[i].toUpperCase());
}
console.log(countries_2_UPCASE)//4 zadanie

countries_2_len = []
for (i in countries_2){
    countries_2_len.push(countries_2[i].length);
}
console.log(countries_2_len)//5 zadanie

countries_2_arr_of_arr = []
for (i in countries_2){
    coun_arr = [countries_2[i],(countries_2[i].toUpperCase()).slice(0,3),countries_2[i].length]
    countries_2_arr_of_arr.push(coun_arr);
}
console.log(countries_2_arr_of_arr)//6 zadanie

countries_2_land = []
for (i in countries_2){
    if (countries_2[i].includes('land')){
        countries_2_land.push(countries_2[i]) 
    }

}
if (!countries_2_land.length == 0){
    console.log(countries_2_land)
}else{
    console.log('All these countries are without land')
}//7 zadanie

countries_2_ia = []
for (i in countries_2){
    if (countries_2[i].includes('ia')){
        countries_2_ia.push(countries_2[i]) 
    }

}
if (!countries_2_ia.length == 0){
    console.log(countries_2_ia)
}else{
    console.log('All these countries are without ia')
}//8 zadanie


console.log(countries_2[countries_2_len.indexOf(Math.max(...countries_2_len))]);//9 zadanie

countries_2_5_bukavs = []
for (i in countries_2){
    if (countries_2[i].length == 5){
        countries_2_5_bukavs.push(countries_2[i]) ; 
    }
}
console.log(countries_2_5_bukavs)//10 zadanie

webTechs_len = []
for (i in webTechs){
    webTechs_len.push(webTechs[i].length)
}
console.log(webTechs[webTechs_len.indexOf(Math.max(...webTechs_len))]);//11 zadanie

webTechs_and_lenghts = []
for (i in webTechs){
    webTechs_and_lenghts.push([webTechs[i],webTechs[i].length]);
}
console.log(webTechs_and_lenghts);//12 zadanie

mern_label = ''
for (i in mernStack){
    mern_label += mernStack[i].slice(0,1);
}
console.log(mern_label)//13 zadanie

for (i in ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]){
    console.log(["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"][i])
}//14 zadanie

let fructs = ['banana', 'orange', 'mango', 'lemon']
let fructs_reverse = []
for (i in fructs){
    fructs_reverse.push(fructs[fructs.length-1 - i])
}
console.log(fructs_reverse);//15 zadanie

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (i in fullStack){
    for (j in fullStack[i]){
        console.log(fullStack[i][j].toUpperCase())
    }
}//16 zadanie

//level 3
let countries_3 = countries_2 //1 zadanie

let sortedCountries = countries_3.sort()//2 zadanie

console.log(webTechs.sort(),mernStack.sort());//3 zadanie

countries_land = []
for (i in countries){
    if (countries[i].includes('land')){
        countries_land.push(countries[i]) 
    }
}
if (!countries_land.length == 0){
    console.log(countries_land)
}else{
    console.log('All these countries are without land')
}//4 zadanie //

countries_len = []
for(i in countries){
    countries_len.push(countries[i].length)
}
console.log(countries[countries_len.indexOf(Math.max(...countries_len))]);//5 zadanie. and this task already did

//6 zadanie. it`s literally task number 4 in this level
countries_4_chars = []
for (i in countries){
    if (countries[i].length == 4){
        countries_4_chars.push(countries[i]);
    }
}
console.log(countries_4_chars)//7 zadanie

countries_2_words = []
for (i in countries){
    if (countries[i].includes(' ')){
        countries_2_words.push(countries[i])
    }
}
console.log(countries_2_words)//8 zadanie

countries_reverse = []
for ( i in countries){
    countries_reverse.push(countries[countries.length- 1 -i].slice(0,1)+countries[countries.length- 1 -i].slice(1))
}
console.log(countries_reverse)//9 zadanie