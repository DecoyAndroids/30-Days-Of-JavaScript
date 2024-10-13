//level 1
const dog = {
    name : 'laika',
    legs: 4,
    color : 'grey',
    age: 3,
    breed: 'labladoor',
    bark: function(){
        return `woof woof`  
    },
    getDogInfo: function(){
       return `${this.name}, ${this.legs}, ${this.color}, ${this.age}, ${this.breed}, ${this.bark()}`
    }
}
console.log(dog)
console.log(dog.name,dog.legs,dog.color,dog.age,dog.bark())
console.log(dog.getDogInfo())

//2 level

n = 'Alex'
for (i in users){
    if ((users[i].skills).length > (users[n].skills).length){
        n = i 
    }
}
console.log(users[n].skills)// 1 zadanie

countOfUsers = 0
for (i in users){
    if (users[i].isLoggedIn && users[i].points > 50)
        countOfUsers++
}
console.log(countOfUsers)// 2 zadanie

for (i in users){
    if (users[i].skills.includes('MongoDB') && users[i].skills.includes('Express') && users[i].skills.includes('React') && users[i].skills.includes('Node')) {
        console.log(i,users[i])
    }
}// 3 zadanie

const Stas= {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB',],
    age: 16,
    isLoggedIn: false,
    points: 88
}
users['Stas'] = Stas
for (i in users){
    console.log(i,users[i])
}//4 zadanie

const keys = Object.keys(users)
console.log(keys);//5 zadanie

const values = Object.values(users)
console.log(values)//6 zadanie

for (i in countries){
    console.log(countries[i].name,countries[i].capital,countries[i].population,countries[i].languages)
}



