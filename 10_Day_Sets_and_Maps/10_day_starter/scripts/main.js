//level 1\
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries2 = ['Finland', 'Sweden', 'Norway']

emptySet = new Set()
console.log(emptySet)//1 zadanie

A = new Set()
for (i = 0; i < 11; i++){
    A.add(i)
}
console.log(A)//2 zadanie

A.delete(2)
console.log(A)//3 zadanie

A.clear()
console.log()//4 zadanie

array1 = ['rusland','douchland','britan','japan','jagermeister']
A = new Set(array1)
console.log(a)//5 zadanie

countriesAndLenght = []
for (i in countries2){
    countriesAndLenght.push([countries2[i],countries2[i].length]);
}
map = new Map(countriesAndLenght)
console.log(map)//6 zadanie

//2 level
C = [...a,...b]
console.log(C);//1 zadanie

c = a.filter((num) => B.has(num))
C = new Set(c)
console.log(C)//2 zadanie

//3 zadanie, it mean i need to print:"a:[1,12,3,4,] and b:[123,1,24]" or what. IF there need union, so we alredy used union 1 task before


