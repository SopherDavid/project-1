/* function printHello(pr1) {
    counter = 0
      for foo > a;
      console.log("Hello")
      counter += 1
}

//let printHello (3) */

/* for (let i = 0; i < 1000; i++) {
    console.log("** hello ** " )
}


for (let i = myArry.length; i < 0; i--) {
    const item = myArray[i]
}
*/


// A: חשב את סכום המערך
let myArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for  (let i = 0; i < myArr.length; i++) { 
    sum += myArr[i];
    
}
console.log(sum) 


//  B: calc multiplation of array
let myArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 1
for  (let i = 0; i < myArr.length; i++) { 
    sum *= myArr[i];
    
}
console.log(sum) 

// C: calc the average
let myArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for  (let i = 0; i < myArr.length; i++) { 
    sum += myArr[i] / myArr.length;
}
console.log(sum) 

// D: change the last # to the first one
const myArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = myArr.pop()
b=myArr.unshift(a)
console.log(myArr) 

// E: create a coppy of array
myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sliced = myArr.slice(2,7)
console.log(sliced)

// F:  reverse the array
let myArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let mynewarr1 = []
let num3 = 0
const length = myArr.length;
for (let i = 0; i < length; i++){
    num3 = myArr.pop()
    mynewarr1.push(num3)
}
console.log(mynewarr1)

//G: findig the gratest num
myArr = [1, 2, 3, 4, 5, 420, 7, 8, 9, 10]
num = 0
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > num) {
        num = myArr[i]
    }

}
console.log(num)


// H: craete a new array with even numbers only
myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myArr2 = []
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] %2 == 0) {
        myArr2.push(myArr[i])
    }

}
console.log(myArr2)

//2. A:
strArray = ["whay", "do", "you", "think", "you", "understan", "creation?"]
str = []
for (let i = 0; i< strArray.length; i++) {
    str += ' ' + strArray[i]
}
console.log(str)


// B: 1 combain arr to sentens 
strArray = ["whay", "do", "you", "think", "you", "understan", "creation?"]
str = []
for (let i = 0; i< strArray.length; i++) {
    str += ',' + strArray[i]
}
console.log(str)

// B : 2 combain arr to sentens 
const strArray = ["whay", "do", "you", "think", "you", "understan", "creation?"];
const str = strArray.join(',');

console.log(str);

// C: clc the charters in arr
const strArray = ["whay", "do", "you", "think", "you", "understan", "creation?"];
str = []
count = 0
for (let i = 0; i< strArray.length; i++) {
    str +=  strArray[i]
}

console.log(str.length)


// D:  create a copy of str in Uppercase
const strArray = ["whay", "do", "you", "think", "you", "understan", "creation?"];
strUpper = []
for (let i = 0; i< strArray.length; i++) {
    strUpper += ' ' + strArray[i].toUpperCase()
}

console.log(strUpper);

// E: take only the  string that has more then 6 charters
const strArray = ["whay", "do", "you", "think", "you", "understand", "creation?"];
char = []
for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > 6)
    char += strArray[i] + ' '
}
console.log(char)




// F: find the longest word
const strArray = ["whay", "do", "you", "think", "you", "understand", "creation?"];
sum = 0
    for (let i = 0; i< strArray.length; i++) {
        if (strArray[i].length > sum) {
            sum = strArray[i]. length
        }
    }
console.log(sum)

// G: find how many letters you have in your arry with 4 charters
const strArray = ["whay", "do", "you", "think", "you", "understand", "creation?"];
sum = 0
for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length == 4)
    sum +=1
}
console.log(sum)


// 3. A: print all inner arrays

const mat = [[2, 3, 4], [4, 6, 8], [10, 13, 5]]

for (let i = 0; i < mat.length; i++) {
    console.log(mat[i])
}

// B: print each  inner array's lenght
const mat = [[2, 3, 4], [4, 6, 8], [10, 13, 5]]

for (let i = 0; i < mat.length; i++) {
    console.log(mat[i].length)
}

// C: calc the length of the arrays
const mat = [[2, 3, 4], [4, 6, 8], [10, 13, 5]]
count = 0
for (let i = 0; i < mat.length; i++) {
    count += mat[i].length
}
console.log(count)

// D: print all numbers from all arrays
const mat = [[2, 3, 4], [4, 6, 8], [10, 13, 5]]
nweMat = []
for (let i = 0; i < mat.length; i++) {
    nweMat += mat[i] + ','
}
console.log(nweMat)

// E: print all numbers that are graeter then 5
const mat = [[2, 3, 4], [4, 6, 8], [10, 13, 5]]
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {

     if (mat[i][j] > 5){
       console.log(mat[i][j])
     }
    }
}


// F: calc how many numbers are i the array
const mat = [[2, 3, 4], [4, 6, 8], [10, 13, 5]]
let nweMat = []

for (let i = 0; i < mat.length; i++) {
    nweMat += mat[i];
}

console.log(nweMat.length)


//4. 7 BOOM, A: create numbers 1-100
for (num = 0 ; num <= 100; num++) {
    console.log(num)
}

//7 BOOM, B: create numbers 1-100
for (num = 0 ; num <= 100; num++) {
    if ( num % 7 == 0  || (num).toString().match(/7/)){
    console.log(num)
    } 
}



// 3.1:
function typeNum(num) {
    count = 0
    if (count <= typeNum()) {
    console.log(count)
    count ++;
   }
}

a = typeNum(13)
