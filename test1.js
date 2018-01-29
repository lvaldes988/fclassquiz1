// 1. Write a **recursive** function
//  which receives an array and returns
//   the sum of the elements of the array. 

function numberSum(array){
    if(array.length < 1){
        return 0;
    }
    let sum = array.pop();
    return sum + numberSum(array);
 }
 
 numberSum([5,7,2,8,3]);

//2.Given two temperatures, return true if one is less than 0 and the other is greater than 100.
//a.icyHot(120, -1) → true
//b.icyHot(-1, 120) → true
//c.icyHot(2, 120) → false

let temp = icyHt
function icyHot() {
    if (temp >= 120 || temp) {
        return true;
    } else {
        return false;
    }
}  

    //3.Given 2 ints, a and b, return true if
    //  one if them is 10 or if their sum is 10.  
    //     a.    makes10(9, 10) → true  
    //     b.    makes10(9, 9) → false  
    //     c.    makes10(1, 9) → true 
function makesTen(a, b) {
    return (a === 10 || b === 10 || a + b === 10) ? true : false;
}

    makes10(9, 10);
    makes10(9, 9);
    makes10(1, 9);


//4.Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki".If the string length is less than 2, use whatever chars are there.
//a.front22("kitten") → "kikittenki"
//b.front22("Ha") → "HaHaHa"
//c.front22("abc") → "ababcab"
//Solve https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/ Submit the screenshot of your solution after being put through the codility grader.
//(Optional) Solve https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/ Submit a screenshot of your solution after being put through the codility grader.

function addAll(string){
    return (string.length < 2) ? string + string + string : string.substr(0,2) + string + string.substr(0,2);
 }
 
 addAll('kitten');
 addAll('HaHaHa');
 addAll('ababcab');


 