// // 1.Write a program to find all pairs of an integer array whose sum is equal to a given number?

// var arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2]
// var output = 8;
// var pairs = []


// for (var i=0; i<arr.length; i++){
//     for (var j = 0; j<arr.length; j++){
//         if(arr[i]+arr[j] == output){
//             pairs.push([arr[i] , arr[j]])
//         }
//     }
// }

// console.log(pairs)

// //2.Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

// let numbers = [1, 2, 3, 4, 5];
// let reversedNumbers = numbers.reverse();

// console.log(reversedNumbers);


// //3. Write a program to check if two strings are a rotation of each other?
// function left_rotate(str){ 
//     str = str.substr(1) + str.substr(0,1);
//     return str;
//   }
//   function check(str1, str2){
//     if(str1.length != str2.length){
//        return false;
//     } 
//     var k = str1.length
//     while(k--){
//        if(str1 == str2){
//           return true;
//        }
//        str1 = left_rotate(str1);
//     }
//     return false;
//   }
  
  
//   var str1 = "abcdef" 
//   var str2 = "cdefab"
//   console.log("The given strings are " + str1 + " and " + str2);
  
//   if(check(str1,str2)){
//     console.log("rotating");
//   } else{
//     console.log("Not rotating ");
//   }
  
//   str1 = "abcdef" 
//   str2 = "bacdef"
//   console.log("The given strings are " + str1 + " and " + str2);
  
//   if(check(str1,str2)){
//     console.log(" rotating");
//   } else{
//     console.log("Not rotating ");
//   }

//   //4.Write a program to print the first non-repeated character from a string?
//   var findChar = function(str){
//     var char;
  
//     for(var i = 0; i < str.length; i++){
//       if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//         char = str[i];
//         break;
//       }
//     }
  
//     return char;
//   }
  
//   console.log(findChar("abacdsdbecs"));


// //   Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

// function towerOfHanoi(n, from_rod, to_rod, aux_rod)
// {
// 		if (n == 0)
// 		{
// 			return;
// 		}
// 		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
// 		document.write("Move disk " + n + " from rod " + from_rod +
// 		" to rod " + to_rod+"<br/>");
// 		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
// 	}

// 	// Driver code
// 	var N = 3;
	
// 	// A, B and C are names of rods
// 	towerOfHanoi(N, 'A', 'C', 'B');


//6.Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

//     function isOperator(x)
//         {
      
//             switch (x) {
//             case '+':
//             case '-':
//             case '/':
//             case '*':
//                 return true;
//             }
//             return false;
//         }
      
//         function postToPre(post_exp)
//         {
//             let s = [];
//             let length = post_exp.length;
      
//             for (let i = 0; i < length; i++) {
      
//                 if (isOperator(post_exp[i])) {
//                     let op1 = s[s.length - 1];
//                     s.pop();
//                     let op2 = s[s.length - 1];
//                     s.pop();
//                     let temp = post_exp[i] + op2 + op1;
      
//                     s.push(temp);
//                 }
//                 else {
      
//                     s.push(post_exp[i] + "");
//                 }
//             }
      
//             let ans = "";
//             while (s.length > 0)
//                 ans += s.pop();
//             return ans;
//         }
         
//         let post_exp = "ABC/-AK/L-*";
//         console.log("Postfix",post_exp)    
        
//         console.log("Prefix : " + postToPre(post_exp));


// // /7.Write a program to convert prefix expression to infix expression.

//         function isOperator(x) {
//           switch (x) {
//             case "+":
//             case "-":
//             case "*":
//             case "/":
//             case "^":
//             case "%":
//               return true;
//           }
//           return false;
//         }
        
//         function convert(str) {
//           let stack = [];
//           let l = str.length;
        
//           // Reading from right to left
//           for (let i = l - 1; i >= 0; i--) {
//             let c = str[i];
        
//             if (isOperator(c)) {
//               let op1 = stack[stack.length - 1];
//               stack.pop();
//               let op2 = stack[stack.length - 1];
//               stack.pop();
        
//               // Concat the operands and operator
//               let temp = "(" + op1 + c + op2 + ")";
//               stack.push(temp);
//             } else {
//               // To make character to string
//               stack.push(c + "");
//             }
//           }
//           return stack[stack.length - 1];
//         }
        
//         let exp = "*+AB+CD";
        
//         console.log("Infix : " + convert(exp));
        


//8.Write a program to check if all the brackets are closed in a given code snippet.

// function areBracketsBalanced(expr) {
//     let stack = [];
  
//     for (let i = 0; i < expr.length; i++) {
//       let x = expr[i];
  
//       if (x == "(" || x == "[" || x == "{") {
//         stack.push(x);
//         continue;
//       }
//       if (stack.length == 0) return false;
  
//       let check;
//       switch (x) {
//         case ")":
//           check = stack.pop();
//           if (check == "{" || check == "[") return false;
//           break;
  
//         case "}":
//           check = stack.pop();
//           if (check == "(" || check == "[") return false;
//           break;
  
//         case "]":
//           check = stack.pop();
//           if (check == "(" || check == "{") return false;
//           break;
//       }
//     }
//     return stack.length == 0;
//   }
  
//   let expr = "{([{}])})";
  
//   if (areBracketsBalanced(expr)) console.log("Balanced ");
//   else console.log("Not Balanced ");


//9. Write a program to reverse a stack.

// let st = [];
// function insert_at_bottom(x)
// {
//     if(st.length==0)
//         st.push(x);
//     else
//     {
//             let a = st.pop();
//             insert_at_bottom(x);
//             st.push(a);
//     }  
// }
// function reverse()
// {
//     if(st.length > 0)
//         {
//             let x = st.pop();
//             reverse();
//             insert_at_bottom(x);
//         }
// }
// st.push('1');
// st.push('2');
// st.push('3');
// st.push('4');
 
// console.log("Original Stack");
 
// console.log(st.join(" "));
// reverse();
 
// console.log("Reversed Stack");
 
// console.log(st.join(" "));

//10.Write a program to find the smallest number using a stack.

function findMissing(array, start, end)
    {
        if (start > end)
            return end + 1;
   
        if (start != array[start])
            return start;
   
        let mid = parseInt((start + end) / 2, 10);
   
        if (array[mid] == mid)
            return findMissing(array, mid+1, end);
   
        return findMissing(array, start, mid);
    }
     
    let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 10,9,3];
    let n1 = arr.length;
 
    console.log("smallest Missing element is " +
    findMissing(arr1, 0, n1 - 1));

    console.clear();
