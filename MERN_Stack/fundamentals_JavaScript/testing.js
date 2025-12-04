// var str = "aziz";
// var left = 0;
//     var right = str.length - 1;
//     while (left < right) {
//         if (str[left] === str[right]) {
//             left++;
//             right--;
//         } else {
//             return true;
//         }
//     }



// function me (str , target) {
//     var str = "aziz";
//     var left = 0;
//     var right = str.length - 1;
//     while (left < right) {
//         if (str[left] + str[right] === target) {
//             left++;
//             right--;
//         } else {
//             return true;
//         }
//     }
// }




//===================================================================================

// var
// let
// const

// function twoSum(arr, target)
// {
//     let left = 0, right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];

//         if (sum === target)
//             return left + " " + right;
//         else if (sum < target)
//             left++; 
//         else
//             right--; 
//     }
//     return false;
// }

// let arr = [ 2, 7, 11, 13, 20 ];
// let target = 18;

// console.log(twoSum(arr, target));


//===================================================================================


// let x = 1;
// let y = 2;
// let z == 3;

// console.log (x+x);
// console.log (y-z);
// console.log (z*x);


//===================================================================================


// for (let i = 0; i < 3; i++) {
//     const name = "Khaled";
// }

// const name = names[index];



//===================================================================================


// let j =0
// const array = [2,3,3,3,6,9,9]
// for (let i = 0; i < array.length; i++) {
//     if(array[i] != array[j]){
//         j++
//         array[j] = array[i]
//     }
// }

// //set array length to j+1
// array.splice(j +1)
// console.log(array);

// // Output:
// [ 2, 3, 6, 9 ] 



//===================================================================================

// anather solution

var removeDuplicates = function(nums) {
    let left = 0;
    let right = 1;
    wihle (right < nums.length) {
        if (nums[left] !== nums [rigth]) {
            left ++;
            nums[left] = nums[right];
        }
        right ++;
    }
    nums.splice(left + 1);
};
