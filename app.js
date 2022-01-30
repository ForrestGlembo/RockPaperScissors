
// let notFound = true

// const { count } = require("console")


// let counter = 0

// while(notFound){

// if (counter === 5000){

// console.log('Found 5000!')
// notFound = false

// }
// else {
//     console.log('still looking bro')
// }
// counter += 1

// }


// const multiplier = 1






// for (let i= 1; i<= 10; i++){


// let temp = ''
// let result = i * multiplier
// temp += result


// let result1 = i * multiplier
// let result2 = result1 + 1
// let result3 = result2 + 1

// let num1, num2, num3, num4, num5, num6, num7, num8, num9, num10 = 0

// num1 = multiplier * i
// num2 = num1 + 1
// num3 = num2 + 2

// let x1 = multiplier * i
// let x2 =  multiplier * (i + 2)
// let x3 =  multiplier * (i + 3)
// let x4 =  multiplier * (i + 4)

// console.log(num1, num2, num3)



// }

// let str = ''
// let strArray = []

// for (let i = 1; i<=10; i++){


//      for (let j = 1; j<=10; j++){

// str += j * i + ' '


// if (j === 10){ 
// str = str.slice()


// console.log(str)
// str = ''
// }

//      }

// }

// function solution(str, ending){
  
//      let newStr = str.slice(str.length-3)
//      let newEnd = ending.slice(ending.length-3)
     
     
//      if (newStr === newEnd){
//        return true
//      } else {
//        return false
//      }
     
     
     
     
//      // TODO: complete
//    }



//    solution('sumo', 'omo')


// function grow(x){

//      let value = 1
     
//      for (let i = 0; i< x.length; i++){
       
       
//        value *= x[i]
       
       
       
//      }
     
//      return value
     
//    }


//    grow([6,5,10,4])


// const grow=x=> x.reduce((a,b) => a*b);



// console.log(grow([6,5,10,4]))



// function makeNegative(num) {
  
//      if (num < 0){
//        return num
//      } else if (num > 0){
//        return num * -1
//      }
     
     
     
//      // Code?
//    }


//    console.log(makeNegative(5))

//    console.log(makeNegative(-3))

//    console.log(makeNegative(0))


// function removeSmallest(numbers) {
  
  
//      let indexOfMin = numbers.indexOf(Math.min(...numbers));
//      return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
      
//       throw "TODO: removeSmallest";
//     }






//    console.log(removeSmallest([55,200,1,1,2,4]))


// function repeatStr (n, s) {
  
  
//      let newStr = ''
  
//      for (let i =0; i<n; i++){
       
//      newStr += s
       
       
//      }
     
     
//      return newStr
     
     
//    }

//    console.log(repeatStr(5, 'hi'))


// function maps(x){
  



//     return x.map(n => n * 2)
     


     
   
//    }


//    console.log(maps([3,6,9]))




// let binding = 8
// let str = ''

// function chessBoard(){



// for(let j = 0; j<binding/2;j++){


// for (let i=0; i<binding;i++){     
   
// if(i % 2 === 0){
//      str += ' '
// } else {
//      str += '#'
// }
// if(i === binding-1){
//      str += '\n'
// for(let i=0;i<binding;i++){
//      if(i % 2 === 0){
//           str += '#'
//      } else {
//           str += ' '
//      }}
//      str += '\n'
// }
// }
// }
// return str 

// }


// console.log(chessBoard())



// function isEven(x){

// if (x === 0){
//      return true 
// } else if (x===1) {
//      return false   
// } else {
// return isEven(x - 2)
// }

// }

// console.log(isEven(50))
// console.log(isEven(75))
// // console.log(isEven(-1))


// function countBs(str){
// let count = 0

// for(let i=0;i<str.length;i++){

// if(str[i] === 'B'){
//      count +=1
    
// }
// }
// return count
// }

// console.log(countBs('dfaBBbbB'))



// function countChar(str, letter){
// let count = 0

// for (let i=0; i<str.length;i++){
//      if(str[i] === letter){
//           count += 1
//      }
// }

// return count

// }

// console.log(countChar('dfaBBbbB', 'B'))







// let str = 'Hfasdfasd'

// console.log(str[4])





// function range(x,y, step = 1){

// let array = []   

// for (let i=x; i<y+1;i++){


// array.push(x)
// x += step
// i += step

// }     

// return array

// }


// console.log(range(1,10))


// function sum(x){

// let value = 0

// for(let i=0; i<x.length; i++){

// value += x[i]


// }
// return value

// }

// console.log(sum(range(1,10)))

// console.log(range(1,10,2))


// function reverseArray(arr){

// let newArr = []

// for(let i=0;i<arr.length;i++){

// newArr.unshift(arr[i])

// }


// return newArr


// }

// console.log(reverseArray([1,2,3]))



// function reverseArrayInPlace(arr){

// let halfArr = Math.floor((arr.length / 2))

// for(let i=0; i<halfArr; i++){

// let x = arr[i]


// arr[i] = arr.length - i

// arr[arr.length - 1 - i] = x


// }

// return arr


// }


// console.log(reverseArrayInPlace([1,2,3,4,5]))




// function arrayToList(array){

//      let list = null;

//      for (let i = array.length - 1; i >= 0; i--) {
//        list = {value: array[i], rest: list};
//      }
//      return list;

// }




// let obj = {value: 3, rest: {

//   value: 2, rest: {
//     value: 1, rest: null
//   }
// }}




// function listToArray(list){


  
// let arr = []

// for (let node = list; node; node = node.rest){

// arr.push(node.value)

// }

// return arr


// }



// console.log(listToArray({value: 3, rest: {

//   value: 2, rest: {
//     value: 1, rest: null
//   }
// }}))



// function prepend(elem, list){

//   return {elem, rest: list}

// }



// function nth(list, n) {
//   if (!list) return undefined;
//   else if (n == 0) return list.value;
//   else return nth(list.rest, n - 1);
// }


// console.log(nth({value: 3, rest: {

//   value: 2, rest: {
//     value: 1, rest: null
//   }
// }}, 2))




// console.log(arrayToList)


// let list = {}

// list.value = 1
// list.rest = {rest: 1}

// console.log(list)
// console.log(list.rest.rest)


// console.log(arrayToList([1,2,3]))


// function deepEqual(val1, val2){

// if (val1 === val2) return true

// if (val1 == null || typeof val1 != 'object' || val2 == null || typeof val2 != 'object') return false


// let keysVal1 = Object.keys(val1)
// let keysVal2 = Object.keys(val2)


// if (keysVal1.length != keysVal2.length) return false

// for (let key of keysVal1){
//   if (!keysVal2.includes(key) || !deepEqual(val1[key], val2[key])) return false
// }

// return true

// }


// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));

// console.log(deepEqual(obj, {here: 1, object: 2}));

// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));


// let array = [1,2,3]

// function incrementByOne(arr){

//   for(let i=0; i<arr.length;i++){

// arr[i] += 1


//   }

// return arr
// }


// console.log(incrementByOne(array))


// let arrOfStrings = ['hey', 'there', 'friend']

// function wordsToSentence(words){

//  let str = '' 

// for (let i=0;i<words.length;i++){

// str += words[i] + ' '

// }

// return str.trim()

// }

// console.log(wordsToSentence(arrOfStrings))


// const f1 = function(a){ 
//   return a + 1
// }

// const x = 3

// const r = f1(x)

// console.log(r)



// const x = 'string X'

// const f1 = function(a){a = 'string Y'}

// f1(x)


// console.log(x)

// var obj1 = {city: 'portland', state: 'oregon'}
// var obj2 = {city: 'portland', state: 'oregon'}
// var obj3 = {city: 'seattle', state: 'washington'}
// var obj4 = obj1



// function compare(a, b){

//  let x = ''
//  let y = ''

// for (const [key, value] of Object.entries(c1)){

// x += key + value

// }

// for (const [key, value] of Object.entries(c2)){

//   y += key + value
  
//   }

// if (x === y ){

//   return true
// } else {
//   return false
// }




// }


// console.log(compare(obj1))




// function calculator(a, x, b){

// switch(x){

// case '+':
//   return a + b;
//   break;
//   case '-':
//     return a - b
//     break;
//     case '*':
//       return a * b;
//       break;
//       case '/':
//         return a / b;
//         break;
//         default:
//           return 'Sorry, not valid input'


// }


// }

// console.log(calculator(3,'+', 3))
// console.log(calculator(4, '-', 4))
// console.log(calculator(4, '*', 4))

// console.log(calculator(4, '/', 0))


// let contacts = [{name: 'amy', email: 'amy@yahoo', course: 'web dev'}, {name: 'fred', email: 'fredd@yaoo', course: 'web dev'}, {name: 'anne', email: 'anne@yahoo', course: 'web dev'}]



// name: 'amy', email: 'amy@yahoo', course: 'web dev'
// name: 'fred', email: 'fredd@yaoo', course: 'web dev'
// name: 'anne', email: 'anne@yahoo', course: 'web dev'

// for (let i=0; i< 3; i++){
  
// if( i === 0){

//   contacts[i].course = 'frontend dev'
// }



// }


// contacts[3] = {name: 'forrest', email: 'fglembo@yahoo', course: 'web dev'}


// function arrayFlattener(arr){


//  return arr.flat()



// }

// console.log(arrayFlattener([3,2,[1,2], 3,4]))






let newNum = Math.floor(Math.random() * 100)
let computerSelection = computerPlay()
playerScore = 0
computerScore = 0



function computerPlay(){

if(newNum <=33){
    return 'Rock'
} else if(newNum <=66){
    return 'Paper'
} else if (newNum > 66){
    return 'Scissors'
}

}


function playRound(playerSelection, computerSelection){



// playerSelection = 'Rock'
playerSelection = prompt('Rock Paper or Scissors??')

let playerSelectionLowercase = playerSelection.toLowerCase()
  
computerSelection = computerPlay().toLowerCase()
newNum = Math.floor(Math.random() * 100)

if(playerSelectionLowercase === computerSelection){
    playerScore += 0
    computerScore += 0
    return `Its a draw! Both chose ${computerSelection}` 
}
else if(playerSelectionLowercase === 'rock' && computerSelection === 'paper'){
    computerScore += 1
return 'Computer wins! Paper beats rock.'
} else if(playerSelectionLowercase === 'rock' && computerSelection === 'scissors'){
    playerScore += 1
    return 'Player wins! Rock beats scissors!'
}
else if(playerSelectionLowercase === 'paper' && computerSelection === 'rock'){
    playerScore += 1
    return 'Player wins! Paper beats rock.'
} else if(playerSelectionLowercase === 'paper' && computerSelection === 'scissors'){
    computerScore += 1
    return 'Computer wins! Scissors beats paper.'
}
else if (playerSelectionLowercase === 'scissors' && computerSelection === 'rock'){
    computerScore += 1
    return 'Computer wins! Rock beats scissors.'
} else if (playerSelectionLowercase === 'scissors' && computerSelection === 'paper'){
    playerScore += 1
    return 'Player wins! Scissors beats paper.'
}



}


function game(){

console.log(playRound())
console.log(playRound())
console.log(playRound())
console.log(playRound())
console.log(playRound())


if(playerScore > computerScore){
    return `Player won ${playerScore} rounds and wins game!`
} else {
    return `Computer won ${computerScore} rounds and wins game!`
}
}





console.log(game())



// console.log(playRound())









// console.log(playRound('ROCK'))


// console.log('Computer play: ', computerPlay())
