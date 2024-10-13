let challenge = '30 Days Of JavaScript';
console.log(challenge); //1 zadanie
console.log(challenge.length); //2 zadanie
console.log(challenge.toUpperCase()); //3 zadanie
console.log(challenge.toLowerCase()); //4 zadanie
console.log(challenge.substring(3)); //5 zadanie
console.log(challenge.substring(0,2)); //6 zadanie
console.log(challenge.includes('Script')); //7 zadanie
console.log(challenge.split()); //8 zadanie
console.log(challenge.split(' ')); //9 zadanie
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(', ')); //10 zadanie
console.log(challenge.replace('JavaScript', 'Python')); //11 zadanie
console.log(challenge.charAt(15)); //12 zadanie
console.log(challenge.charCodeAt('J')); //13 zadanie
console.log(challenge.indexOf('a')); //14 zadanie
console.log(challenge.lastIndexOf('a')); //15 zadanie
let sentence = 'You cannot end a sentence with because because because is a conjunction'; //16 zadanie
console.log(sentence.indexOf('because')); //17 zadanie
console.log(sentence.lastIndexOf('because')); //18 zadanie
console.log(sentence.search('because')); //19 zadanie
console.log(' 30 Days Of JavaScript '.trim()); //20 zadanie
console.log(challenge.startsWith("30", 0)); //21 zadanie
console.log(challenge.endsWith("30",2)); //22 zadanie
console.log(challenge.match(/a/gi)); //23 zadanie
console.log('30 Days Of'.concat(' ','JavaScript')); //24 zadanie
console.log(challenge.repeat(2)); //25 zadanie
//LEVEL 2
console.log('The quote `There is no exercise better for the heart than reaching down and lifting people up.` by John Holmes teaches us to help one another.'); //1 zadanie
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`); //2 zadanie
console.log(typeof '10'== typeof 10); //3 zadanie
if (!(typeof '10'== typeof 10)){
    console.log(typeof '10'== typeof String(10)); //4 zadanie
}
if ((typeof parseFloat('9.8') == typeof 10)){
    console.log(typeof parseFloat('9.8') == typeof 10); //5 zadanie
}
console.log('python'.includes('on'),' and ', 'jargon'.includes('on'));//5 zadanie
console.log('I hope this course is not full of jargon.'.includes('jargon'));//6 zadanie
console.log(Math.floor(Math.random()*101));//7 zadanie
console.log((Math.floor(Math.random()*51))+50);//8 zadanie
console.log(Math.random()*256);//9 zadanie
console.log('JavaScript'.charAt((Math.floor(Math.random()*('JavaScript'.length+1))))); //10 zadanie
console.log(`1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125`);//11 zadanie
console.log('You cannot end a sentence with because because because is a conjunction'.substring(31,54));//12 zadanie
//level 3
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi));//1 zadanie
console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi));//2 zadanie
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let let_sentence = sentence2
console.log(let_sentence.replace(/[^\w\s]+/gi,''));// i don'n understand how find tthe most frequent word //3 zadanie
let euros = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
euros = euros.match(/\d+/g);
let totalEuros = 0
for(let i = 0; i < euros.length; i++){
    totalEuros = totalEuros +  parseInt(euros[i]);
};
console.log(totalEuros);//4 zadanie