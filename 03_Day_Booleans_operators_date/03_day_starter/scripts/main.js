// level 1 
let firstName = 'Homer';//1 zadanie
let lastName = 'Simpson';
let country = 'USA';
let city = "Springfield";
let age = 35;
let isMarried = true;
let year = 2014;
console.log("first name is",typeof firstName,
    ", last name is",typeof lastName,
    ", country is",typeof country,
    ", city is",typeof city,
    ", age is",typeof age,
    ", isMarried is",typeof isMarried,
    ", year is",typeof year,);
console.log(typeof '10' == 10);//2 zadanie
console.log(parseInt('9.8') == 10);//3 zadanie
console.log(4<1, 1=="12", null <= undefined);//4 zadanie

console.log(4>1, true == true, "1"==1);
let first = 4 > 3;
let second = 4 >= 3;
let third = 4 < 3;
let fourth = 4 <= 3;
let fifth = 4 == 4;
let sixth = 4 === 4;
let seventh = 4 != 4; 
let eighth = 4 !== 4;
let ninth = 4 != '4'; 
let tenth = 4 == '4'; 
let eleventh = 4 === '4';
let twelfth = 'python'.length > 'jargon'.length;
console.log(first,second,tenth,fourth,fifth,sixth,seventh,eighth,ninth,tenth,eleventh,twelfth);//5 zadanie

first = 4 > 3 && 10 < 12;
second = 4 > 3 && 10 > 12;
third = 4 > 3 || 10 < 12;
fourth = 4 > 3 || 10 > 12;
fifth = !(4 > 3);
sixth = !(4 < 3);
seventh = !(false); 
eighth = !(4 > 3 && 10 < 12);
ninth = !(4 > 3 && 10 > 12); 
tenth = !(4 === '4'); 
eleventh =!('dragon'.includes('on') && 'python'.includes('on'));
console.log(first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth,eleventh);//6 zadanie

let now = new Date;
first = now.getFullYear();
second = now.getMonth() + 1;
fourth = now.getDate();
fifth = now.getHours();
sixth = now.getMinutes();
seventh = now.getTime(); 
third =`${fourth}/${second}/${first} ${fifth}:${sixth}`;
console.log(first,second,third,fourth,fifth,sixth,seventh); //7 zadanie
//level 2
case_value = prompt('Enter a number of task(1-16)')
switch(case_value){
case('1'):
    let base = prompt('Enter base: ', 0);
    let height = prompt('Enter height: ', 0);
    console.log('The area of the triangle is ', 0.5*base*height);//1 zadanie
    break
case('2'):
    let a = prompt('Enter side a: ',0);
    let b = prompt('Enter side b: ',0);
    let c = prompt('Enter side c: ',0); 
    console.log('The perimeter of the triangle is',Number(a)+Number(b)+Number(c));//2 zadanie
    break
case('3'):
    let len = prompt('Enter side a: ',0);
    let wid = prompt('Enter side b: ',0);
    console.log('area is: ',len*wid,'; perimeter is: ', 2*len*wid);//3 zadanie
    break
case('4'):
    let r = prompt('enter radius: ',0);
    console.log('area of circle: ', 2*Math.PI*r);//4 zadanie
    break
case('5'):
    zero_y = 2 * 0 - 2; //here x = 0
    zero_x = 1 + 0 ;// here y = 0
    x1 = 1;
    x2 = 3;
    y1 = 2*x1 -2;
    y2 = 2*x2 - 2;
    m = (y2-y1)/(x2-x1);
    console.log(m,zero_x,zero_y);//5 zadanie
    break
case('6'):
    x1 = 2;
    y1 = 2;
    x2 = 6;
    y2 = 10;
    m=(y2-y1)/(x2-x1);
    console.log(m);//6 zadanie
    break
case('7'):
    x1_1 = 1;
    x2_1 = 3;
    y1_1 = 2*x1 -2;
    y2_1 = 2*x2 - 2;
    m_1 = (y2-y1)/(x2-x1);

    x1_2 = 2;
    y1_2 = 2;
    x2_2 = 6;
    y2_2 = 10;
    m_2=(y2-y1)/(x2-x1);  
    m_1 > m_2 ? console.log('first slope is more'):console.log('second slope is more');//7 zadanie
    break
case('8'):
    x1 = 1
    x2 = 2
    y1 = x1**2 + 6*x1 + 9;
    y2 = x2**2 + 6*x2 + 9;
    //x**2 + 6*x + 9 = 0 like y =0
    a = 1
    b = 6
    c = 9
    D = 6**2 - 4*b*c;
    x1 = (-b + Math.sqrt(d))/2*a
    x2 = (-b - Math.sqrt(d))/2*a
    console.log('x1 =',x1,'; x2 =',x2);//8 zadanie
    break
case('9'):
    h = prompt('Enter hours:', 0);
    r = prompt('Enter rate per hour:', 0);
    console.log('Your weekly earning is',r*h);//9 zadanie
    break
case('10'):
    name_man = prompt('enter your name','');
    name_man.length>7 ? console.log('your name is long'): console.log('your name is short');//10 zadanie
    break
case('11'):
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    firstName.length >lastName.length ? console.log('Your first name, Asabeneh is longer than your family name, Yetayeh'): console.log();//11 zadanie
    break
case('12'):
    let myAge = 250
    let yourAge = 25
    myAge > yourAge ? console.log('I am', myAge - yourAge ,'years older than you.') : console.log('You are', yourAge - myAge ,'years older than I.');//12 zadanie
    break
case('13'):
    let yourDateBirth = prompt('Enter birth year:', 2000);
    console.log(new Date().getFullYear())
    new Date().getFullYear() - 18 >= yourDateBirth ? console.log('You are',new Date().getFullYear() - yourDateBirth,'. You are enoght old to drive') : console.log('You are',new Date().getFullYear() - yourDateBirth ,'. You will be allowed to drive after', 18 - (new Date().getFullYear() - yourDateBirth),'years.');//13 zadanie
    break
case('14'):
    let age = prompt('Enter number of years you live:', 0);
    console.log('You lived',age*365*24*60*60,'seconds');//14 zadanie
    break
case('15'):
    let now = new Date();
    time_variant_1 = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    time_variant_2 = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`; 
    time_variant_3 = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`; 
    console.log(time_variant_1,'\n',time_variant_2,'\n',time_variant_3);//15 zadanie
    break
//level 3
case('16'):
    let now2 = new Date();
    let hours = 0
    let minutes = 0
    now2.getHours()>12 ? hours = now2.getHours() -12 : hours = now2.getHours(); 
    now2.getHours()<10 ? minutes = `0${now2.getMinutes()}` : minutes = now2.getMinutes(); 
    time_readable = `${now2.getFullYear()}-${now2.getMonth()+1}-${now2.getDate()} ${hours}:${minutes}`;
    console.log(time_readable)//1 zadanie
    break
}   


