/**
 Pair Them Dow
Problem Statement

There is a class of N students, ith student has Ai skills. N is always even. For the upcoming team contest Amy wants to pair students, such that each student belongs to exactly one pair. Let’s say we paired the ith and jth student, so the resulting skill of the pair will pe (Ai + Aj)2.

Amy wants to minimise the summation of skills of all the N/2 pairs. Find the minimum possible sum of skills that she can get.

You are given T independent test cases.

Constraints

1 <= T <= 10 2 <= N <= 10^5 1 <= Ai <= 5*10^3

All input values are integers.

Input Format

First line contains T. First-line of each test case contains N. Second line of each test case contains N space separated integers A1, A2, A3, …….., AN

Output Format

Print a single integer denoting the minimum possible sum of skills that she can get.

Sample Input 1

1 4 2 1 2 2

Sample Output 1

25

Explanation of Sample 1

If she pairs the 1st and 2nd student together and 3rd and 4th student together then resulting sum of skills will be: (1+2)2 + (2+2)2 = 25
 */

let students = [ 1,9,2, 4, 2, 1, 2, 5]

function top(stu){

let firstStu;
let secondStu;

for(let i = 0; i < stu.length -2; i= i+ 2){

    firstStu = stu[i]

    for(let j =1; j< stu.length -2 ; j = j+ 2){
        secondStu = stu[j]
console.log("In for loop :",Math.pow((firstStu + secondStu) , 2))
        // return Math.pow((firstStu + secondStu) , 2)
    }
}

}

console.log(top(students))