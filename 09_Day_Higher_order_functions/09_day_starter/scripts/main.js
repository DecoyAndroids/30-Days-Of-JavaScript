//level 1
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries2.forEach((element) => console.log(element.toUpperCase()))

const countriesToUpperCase = countries2.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesEndsByia = countries2.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const numbers2 = [1, 2, 3, 4, 5]
const sum = numbers2.reduce((acc, cur) => acc + cur, 0)

console.log(sum)//1 zadanie

//2 zadanie, i did not understood, what we need to define a function, it look like this "func smt(...args){....}" but what i need to write into a function

countries2.forEach((element) => console.log(element))//3 zadanie

names.forEach((element) => console.log(element))//4 zadanie

numbers.forEach((element) => console.log(element))//5 zadanie

upperCaseCountries = countries2.map((country) => country.toUpperCase())
console.log(upperCaseCountries)//6 zadanie

lenghtCountries = countries2.map((country) => country.length)
console.log(lenghtCountries)//7 zadanie

squareNumbers =  numbers.map((element) => element*element)
console.log(squareNumbers)//8 zadanie

UpperCaseNames = names.map((name) => name.toUpperCase())
console.log(UpperCaseNames)//9 zadanie

PriceProducts = products.map((product) => product.price)
console.log(PriceProducts)//10 zadanie

landCountries = countries2.filter((country) => country.endsWith('land'))
console.log(landCountries)//11 zadanie

lenghtCountriesFiltr = countries2.filter((country) => country.length == 6)
console.log(lenghtCountriesFiltr)//12 zadanie 

lenghtCountriesFiltr2 = countries2.filter((country) => country.length >= 6)
console.log(lenghtCountriesFiltr2)//13 zadanie 

charCountriesFiltr2 = countries2.filter((country) => country[0].startsWith('E'))
console.log(charCountriesFiltr2)//14 zadanie

priceFiltred = products.filter((product) => typeof product.price !== 'string')
console.log(priceFiltred)//15 zadanie
console.log(typeof 12)

someArray = ['123',12,'asd',125]
function getStringLists(array){
    for (i in array){
      if ((typeof array[i]) !== 'string'){
          array.splice(i,1)
      }
    }
    return array
}
console.log(someArray)
console.log(getStringLists(someArray))// 16 zadanie


summ = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(summ)//17 zadanie

//18 zadanie , i didnot understood

//19 zadanie So, 'some' return True, if some elements are similar. 'every' wants that all elememnts will be similar, then it will return true 

namesThan7 = names.some((name) => name.length > 7) 
console.log(namesThan7) //20 zadanie

countriesIncludLand = countries2.every((country) => country.includes('land')) 
console.log(countriesIncludLand) //21 zadanie

//22 zadanie find return the first elem, which satisfies the condition, findIndex return the position of the first element which satisfies the condition

letters6Country = countries2.find((country) => country.length == 6)
console.log(letters6Country)//23 zadanie

indexLetters6Country = countries2.findIndex((country) => country.length == 6)
console.log(indexLetters6Country)//24 zadanie

indexLetters6Country = countries2.findIndex((country) => country == 'Norway')
console.log(indexLetters6Country)//25 zadanie

indexLetters6Country = countries2.findIndex((country) => country == 'Russia')
console.log(indexLetters6Country)//26 zadanie

//level 2
totalPrice = []
products.forEach((product) => totalPrice.push(Object.values(product)[1]))
console.log(totalPrice)//1 zadanie

totalPrice2 = []
totalPrice2 = products.reduce((product)=> totalPrice2 += Object.values(product)[1])
console.log(totalPrice2)
