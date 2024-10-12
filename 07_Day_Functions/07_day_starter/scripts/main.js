function fullName(){
    console.log('Dikov Stas')
}
fullName()//1 zadanie

function fullName2(firstName,lastName){
    console.log(lastName,firstName)
}
fullName2()//2 zadanie

function addNumber(a,b){
    return a+b
}
console.log(addNumber(1,2))//3 zadanie

function areaOfRectangle(height,widht){
    return height*widht
}
console.log(areaOfRectangle(2,3))//4 zadanie

function perimeterOfRectangle(height,widht){
    return 2*(height+widht)
}
console.log(perimeterOfRectangle(2,3))//5 zadanie


function volumeOfRectPrism(length,width,height){
    return length * width * height
}
console.log(volumeOfRectPrism(2,3,3))//6 zadanie

function areaOfCircle(r){
    return Math.PI * (r**2)
}
console.log(areaOfCircle(2))//7 zadanie

function circumOfCircle(r){
    return 2*Math.PI*r
}
console.log(circumOfCircle(2))//8 zadanie

function density(mass,volume){
    return mass/volume
}
console.log(density(1000/1))//9 zadanie

function speed(time,distance){
    return distance/time
}
console.log(speed(3,120))//10 zadanie

function weight(mass,gravity){
    return mass*gravity
}
console.log(weight(14,9.8))//11 zadanie

function convertCelsiusToFahrenheit(oC){
    return (oC * (9/5)) + 32
}
console.log(convertCelsiusToFahrenheit(15))//12 zadanie

function index_BMI(weight,height){
    let bmi = weight/(height*height)
    switch (true){
        case(bmi<18.5):
            console.log(`Underweight: BMI is less than 18.5, your's: ${bmi}`);
            break
        case(bmi>=18.5 && bmi <24.9):
            console.log(`Normal weight: BMI is 18.5 to 24.9, your's: ${bmi}`);
            break
        case(bmi>=25 && bmi < 29.9):
            console.log(`Overweight: BMI is 25 to 29.9, your's: ${bmi}`);
            break
        case(bmi > 30):
            console.log(`Obese: BMI is 30 or more, your's: ${bmi}`);
            break
    }
}
index_BMI(83,1.82)//13 zadanie

function season(mounth){
    mounth = mounth.toLowerCase()
    switch(true){
        case(mounth == 'september' || mounth == 'october' || mounth == 'november'):
            return 'Autumn'
        case(mounth == 'december' || mounth == 'january' || mounth == 'february'):
            return 'Winter'
        case(mounth == 'march' || mounth == 'april' || mounth == 'may'):
            return 'Spring'
        case(mounth == 'june' || mounth == 'july' || mounth == 'august'):
            return 'Summer'
    };
}
console.log(season('April'))//14 zadanie

function findMax(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b
    }else{
        return c
    }
}
console.log(findMax(12,3,-12))//15 zadanie

//level 2
function solveLinEquation(a,b,c){
    //ax + by + c = 0 ==> ax + c = -by ==> ( ax + c ) / -b = y
    //ax + by + c = 0 ==> by + c = -ax ==> ( by + c) / -a = x
    //where x = 0 ==> y == smt
    // x_0 = ()
    x_0 = (c ) / (-b)
    y_0 = (c) / (-a)
    return y_0,x_0
}
console.log(solveLinEquation(5,12,4))// 1 zadanie 

function solveQuadEquation(a,b,c){
    //ax**2 + bx + c = 0
    D = b**2 - 4*a*c
    if (d < 0){
        return "you`re dumb"
    }
    x1 = (-b - Math.sqrt(d))/2*a
    x2 = (-b + Math.sqrt(d))/2*a
    if (D == 1){
        return x1
    }else{
        return x1,x2
    }
}
console.log(solveLinEquation(1,3,-4))//2 zadanie

function printArray(array){
    for (i in array){
        console.log(array[i]);
    }
}
printArray([1,3,4])//3 zadanie

function showDateTime(){
    let now = new Date()
    time = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
    return time
}
console.log(showDateTime())//4 zadanie

function swapValues(x,y){
    return y,x
}
console.log(swapValues(1,10))//5 zadanie

function reverseArray(array){
    reverse_array = []
    for ( i in array){
        reverse_array.push(array[array.length -1 - i])
    }
    return reverse_array
}
console.log(reverseArray([1,2,3,4,5]))//6 zadanie

function capitalizeArray(array){
    for (i in array){
        array[i] = (array[i].slice(0,1)).toUpperCase() + array[i].slice(1)
    }
    return array
}
console.log(capitalizeArray(['lol','kek','eshkere']))//7 zadanie

function addItem(array,item){
    array.push(item)
    return array
}
console.log(addItem([1,2,3,4],5))//8 zadanie

function removeItem(array,index){
    array.splice(index,1)
    return array
}
console.log(removeItem([1,2,3,4],2))//9 zadanie

function sumOfNumbers(num){
    let sum = 0
    for (i = 0; i < num + 1; i++){
        sum += i;
    }
    return sum 
}
console.log(sumOfNumbers(100))//10 zadanie // i didn't understood in which range i must add it. So, i supposed, what range it's 0 to InputNumber(include)

function sumOfOdds(num){
    let sum_odds = 0
    for (i = 0; i < num + 1; i++){
        if(i%2 == 1){
            sum_odds += i;
        }
    }
    return sum_odds 
}
console.log(sumOfOdds(100))//11 zadanie

function sumOfEven(num){
    let sum_even = 0
    for (i = 0; i < num + 1; i++){
        if(i%2 == 0){
            sum_even += i;
        }
    }
    return sum_even 
}
console.log(sumOfEven(100))//12 zadanie

function evensAndOdds(num){
    let sum_odds = 0
    let sum_even = 0
    for (i = 0; i < num + 1; i++){
        if(i%2 == 0){
            sum_even += 1;
        }else{
            sum_odds += 1;
        }
    }
    console.log(`The number of odds are ${sum_odds}.`)
    console.log(`The number of evens are ${sum_even}.`)
}
evensAndOdds(100)//13 zadanie

function sum(...args){
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sum(1,23,12,3))//14 zadanie

function randomUserIp(){
    return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.`
}
console.log(randomUserIp())//15 zadanie

function randomMacAddress(){
    str = "0123456789ABCDEF"
    function smChr(str){
        return str.charAt(Math.floor(Math.random() * 16))
    }
    return `${smChr(str)}${smChr(str)}:${smChr(str)}${smChr(str)}:${smChr(str)}${smChr(str)}:${smChr(str)}${smChr(str)}`
}
console.log(randomMacAddress())//16 zadanie

function randomHexaNumberGenerator(){
    str = "0123456789ABCDEF"
    function smChr(str){
        return str.charAt(Math.floor(Math.random() * 16))
    }
    return `#${smChr(str)}${smChr(str)}${smChr(str)}${smChr(str)}${smChr(str)}${smChr(str)}`
}
console.log(randomHexaNumberGenerator())//17 zadanie

function userIdGenerator(){
    str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    function smChr(str){
        return str.charAt(Math.floor(Math.random() * str.length))
    }
    return `${smChr(str)}${smChr(str)}${smChr(str)}${smChr(str)}${smChr(str)}${smChr(str)}${smChr(str)}`
}
console.log(userIdGenerator())//18 zadanie

//3 level
function userIdGeneratedByUser(IsPrint){
    arrOfIds = []
    str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    count = prompt('enter count of Id',Number())
    len = prompt('enter a lenght of Id',Number())
    function smChr(str){
        return str.charAt(Math.floor(Math.random() * str.length))
    }
    for (i = 0; i < count; i++){
        let userId = ``
        for (j = 0; j < len; j++){
            userId += `${smChr(str)}`
        }
        if (IsPrint){
            console.log(userId)
        }else{
            arrOfIds.push(userId)
        }
    }
    return arrOfIds
}
userIdGeneratedByUser(true)//1 zadanie

function rgbColorGenerator(){
    function randomOFNum(num){
        return Math.floor(Math.random()*num)
    }
    return `rgb(${randomOFNum(256)},${randomOFNum(256)},${randomOFNum(256)})`
}
console.log(rgbColorGenerator())//2 zadanie



