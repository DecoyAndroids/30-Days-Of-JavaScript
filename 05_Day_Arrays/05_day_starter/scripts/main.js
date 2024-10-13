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
let empy_arrey = []; //1 zadanie
let array_with_5_or_more_elems = [1,2,3,4,5,6]; //2 zadanie
console.log(array_with_5_or_more_elems.length)//3 zadanie
console.log(webTechs[0],webTechs[Math.floor(webTechs.length/2)],webTechs[webTechs.length-1])//4 zadanie
let mixedDataTypes = [1,'one',['aboba','aboba2'],true,undefined,null]
console.log(mixedDataTypes.length, mixedDataTypes)//5 zadanie
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];//6 zadanie
console.log(itCompanies);//7 zadanie
console.log(itCompanies.length);//8 zadanie
console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1]);//9 zadanie
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
};//10 zadanie
console.log('')
for (let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toLowerCase());
};//11 zadanie
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],'and',itCompanies[6],'- are big IT companies.');//zadanie 12
company = prompt('enter a it-company','');
itCompanies.includes(company) ? console.log(company) : console.log('Not founded');// 13 zadanie
for (let i = 0; i < itCompanies.length; i++){
    if ((itCompanies[i].indexOf('o') !== (itCompanies[i].lastIndexOf('o')) && (itCompanies[i].toLowerCase()).indexOf('o') !== -1)){
        console.log(itCompanies[i]);
    };
};//14 zadanie
console.log(itCompanies.sort())//15 zadanie
console.log(itCompanies.reverse())//16 zadanie
console.log(itCompanies.slice(3))//17 zadanie
console.log(itCompanies.slice(0,-3))//18 zadanie
itCompanies.length%2 == 1 ? console.log(itCompanies[Math.floor(itCompanies.length/2)]) : console.log(itCompanies[Math.floor(itCompanies.length/2)],itCompanies[Math.floor(itCompanies.length/2)+1])//19 zadanie
console.log(itCompanies.splice(0,1));//20 zadanie
itCompanies.length%2 == 1 ? console.log(itCompanies.splice(Math.floor(itCompanies.length/2),1)) : console.log(itCompanies.splice(Math.floor(itCompanies.length/2)-1,1),itCompanies.splice(Math.floor(itCompanies.length/2),1))//21 zadanie
itCompanies.splice(-1,1)
console.log(itCompanies)//22 zadanie
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)//23 zadanie

//level 2
console.log('level 2')
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/([^a-z0-9 \.\_\-]+)/gi, '');
console.log(text)
let words = text.split('.')
text = words.toString()
text = text.replace(/([^a-z0-9 \.\_\-]+)/gi, '');
words = text.split(' ')
console.log(words)
console.log(words.length)// 2 zadanie, i don't understand for do this with only 1 RegEx, because RegEx, thah i find, don't remove a dots

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
!shoppingCart.includes('Meat') ? shoppingCart.unshift('Meat') : console.log('The meat is already here');
!shoppingCart.includes('Sugar') ? shoppingCart.push('Sugar') : console.log('The sugar is already here');
confirm('Do you have a allergy','') ? shoppingCart.splice(shoppingCart.indexOf('Honey'),1) : console.log('You don`t have a allergy');
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);//3 zadanie

!countries.includes('Ethiopia') ? console.log('cool!') : countries.includes('ETHIOPIA') ? countries.unshift('ETHIOPIA') : console.log('this country is here already');//zadanie 4, maybe i undersand this task not right

webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass'), console.log(webTechs);//5 zadanie

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd);
console.log(fullStack)// 6 zadanie

console.log('level 3')
//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let ages_not_const = ages.sort()
console.log(ages_not_const,ages_not_const[0],ages_not_const[ages_not_const.length-1]);
ages_not_const.length%2 == 1 ? console.log(ages_not_const[Math.floor(ages_not_const.length/2)]) :console.log((ages_not_const[Math.floor(ages_not_const.length/2)] + ages_not_const[Math.floor(ages_not_const.length/2)-1])/2);
let all_ages_count = 0
for(i = 0;i<ages_not_const.length; i++){
    all_ages_count = all_ages_count + ages_not_const[i];
};
avearge = all_ages_count/ages.length
print(avearge)
print(ages_not_const[ages_not_const.length-2]);
print(Math.abs(ages_not_const[0]-avearge)>Math.abs(ages_not_const[ages_not_const.length-1]-avearge))//1 zadanie

countries.splice(0,10)//2 zadanie

countries.length%2 == 1 ? console.log(countries[Math.floor(countries.length/2)]) :console.log(countries[Math.floor(countries/2-1)],countries[Math.floor(countries/2)]);//3 zadanie

countries.length%2 == 1 ? countries.push(prompt('enter a country')): countries_arr1 = countries.splice(0,Math.floor(countries.length/2)) , countries_arr2 = countries.splice(Math.floor(countries.length/2),Math.floor(countries.length/2)) ;//4 zadanie
