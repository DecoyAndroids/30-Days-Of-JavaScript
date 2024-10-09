//level 1
let caseValue = prompt('enter a number of task(1-4):','');
switch (caseValue){
case '1':
    let age = prompt('Enter your age:', '');
    if (age >= 18){
        console.log('You are old enough to drive');
    } else{
        console.log('you are left with ', 18-age ,' years to drive');//1 zadanie
    }
    break
case '2':
    let myAge = prompt('Enter my age:','');
    let yourAge = prompt('Enter your age:','');
    if (myAge > yourAge){
        console.log('I`m ', myAge - yourAge , 'older than you')
    }else if (myAge < yourAge){
        console.log('You are', yourAge - myAge ,'years older than me')
    }else{
        console.log('Our age is equal')//2 zadanie
    }
    break
case '3':
    let a = 4;
    let b = 3;
    if (a>b){
        console.log('a is greater than b');
    }else{
        console.log('a is less than b');
    };
    c = a > b ? console.log('a is greater than b') : console.log('a is less than b');//3 zadanie
    break
case '4':
    let numb = prompt('Enter a number','');
    if (numb %2 == 0){ //also here we can use that construction (!String(numb/2).includes('.')) in if 
        console.log(numb,'is an even number');
    }else{
        console.log(numb,'is an odd number')//4 zadanie
    }
    break
//level 2
case('5'):
    let score = prompt('Enter a score of student to convert to grade',0)
    switch(true){
        case(score > 0 && score<50):
            console.log('this score is equal F');
            break
        case(score > 49 && score<60):
            console.log('this score is equal D');
            break
        case(score > 59 && score<70):
            console.log('this score is equal C');
            break
        case(score > 69 && score<90):
            console.log('this score is equal B');
            break
        case(score > 89 && score<101):
            console.log('this score is equal A');
            break
    };//1 zadanie
    break 
case('6'):
    mounth = prompt('Enter a mounth to define a season');
    mounth = mounth.toLowerCase()
    switch(true){
        case(mounth == 'september' || mounth == 'october' || mounth == 'november'):
            console.log('the season is Autumn');
            break
        case(mounth == 'december' || mounth == 'january' || mounth == 'february'):
            console.log('the season is Winter');
            break  
        case(mounth == 'march' || mounth == 'april' || mounth == 'may'):
            console.log('the season is Spring');
            break
        case(mounth == 'june' || mounth == 'july' || mounth == 'august'):
            console.log('the season is Summer');
            break  
    };//2 zadanie
    break
case('7'):
    dayOfWeek = prompt('What is the day today?','');
    dayOfWeek = dayOfWeek.toLowerCase()
    switch(true){
        case(dayOfWeek == 'saturday' || dayOfWeek == 'sunday'):
            console(dayOfWeek,'is a weekend');
            break
        case(dayOfWeek != 'saturday' && dayOfWeek != 'sunday'):
            console(dayOfWeek,'is a working day');
            break
    };//3 zadanie
    break
//level 3
case('8'):
    mounth = prompt('Enter a mounth to define a count of days');
    mounth = mounth.toLowerCase();
    switch(true){
        case(mounth == 'january'):
            console.log('January has 31 day');
            break
        case(mounth == 'february'):
            console.log('February has 28 day');
            break
        case(mounth == 'march'):
            console.log('March has 31 day');
            break
        case(mounth == 'april'):
            console.log('April has 30 day');
            break
        case(mounth == 'may'):
            console.log('May has 31 day');
            break
        case(mounth == 'june'):
            console.log('June has 30 day');
            break
        case(mounth == 'july'):
            console.log('July has 31 day');
            break
        case(mounth == 'august'):
            console.log('August has 31 day');
            break
        case(mounth == 'september'):
            console.log('September has 30 day');
            break
        case(mounth == 'october'):
            console.log('October has 31 day');
            break
        case(mounth == 'november'):
            console.log('November has 30 day');
            break
        case(mounth == 'december'):
            console.log('December has 31 day');
            break
    };//1 zadanie
    break
case('9'):
    mounth = prompt('Enter a mounth to define a count of days, it`s a same task, but now year is leap');
    mounth = mounth.toLowerCase();
    switch(true){
        case(mounth == 'january'):
            console.log('January has 31 day');
            break
        case(mounth == 'february'):
            console.log('February has 29 day');
            break
        case(mounth == 'march'):
            console.log('March has 31 day');
            break
        case(mounth == 'april'):
            console.log('April has 30 day');
            break
        case(mounth == 'may'):
            console.log('May has 31 day');
            break
        case(mounth == 'june'):
            console.log('June has 30 day');
            break
        case(mounth == 'july'):
            console.log('July has 31 day');
            break
        case(mounth == 'august'):
            console.log('August has 31 day');
            break
        case(mounth == 'september'):
            console.log('September has 30 day');
            break
        case(mounth == 'october'):
            console.log('October has 31 day');
            break
        case(mounth == 'november'):
            console.log('November has 30 day');
            break
        case(mounth == 'december'):
            console.log('December has 31 day');
            break
    };//2 zadanie
    break    
}