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
console.log(random_arr)//14 zadanie

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
i = 1
for (i=1;i<7;i++){
    if ((Math.floor(Math.random()*10))%2 == 0){
        id += String.fromCharCode(Math.floor(Math.random()*10)*i)
        console.log(id,' asd ' ,String.fromCharCode(Math.floor(Math.random()*10)*i))//почему-то String.fromCharCode этот микрочел в консоль у меня выдает просто квадратик с вопросом, а не какой-то адекватный знак, ну и я в целом хз как это можно нормально сделать
    }else{
        id = id + (Math.floor(Math.random()*10)).toString();
        console.log(id,' asd')
    }
}
console.log(id,' asd')//15 zadanie 
