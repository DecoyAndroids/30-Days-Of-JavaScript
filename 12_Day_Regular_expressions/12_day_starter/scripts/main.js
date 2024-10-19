let pattern =  /[A-Za-z]/d
let flag = 'gi'
let regEx = new RegExp(pattern,flag)
text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
text = text.replace(regEx,'')
array = text.split(',')
sum = 0
for (i in array){
    array[i]= Number(array[i])
}
sum = array[0]*12 + array[1] + array[2]*12
console.log(sum )// 1 zadanie

sortedPointsTemp = []
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints = []
for (i in points){
    sortedPoints.push(Number(points[i]))
}
sortedPoints.sort()
sortedPointsTemp = (sortedPoints.slice(0,4)).reverse().concat( sortedPoints.slice(4))
sortedPoints = sortedPointsTemp
distance = sortedPoints[sortedPoints.length-1] -sortedPoints[0]
console.log(`points = ${points}`)
console.log(`sortedPoints = ${sortedPoints}`)
console.log(`distance = ${distance}`)//2 zadanie, maybe i`m a dumb, but i did understood where i need use redEx

function is_valid_variable(name){
    pattern = /^[A-Za-z]/
    if (pattern.test(name) & !name.includes('-')){
        return true
    }else{
        return false
    }
}
console.log(is_valid_variable('first_name'))// # True
console.log(is_valid_variable('first-name'))// # false
console.log(is_valid_variable('1first_name'))// # false
console.log(is_valid_variable('firstname'))// # True