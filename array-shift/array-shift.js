// let arr1 = [2, 4, 6, 8];
// let arr2 = [4, 8, 15, 23, 42];
// function insertShiftArray() {

//         let index1 = 2; 
//         let element1 = 5; 

//         let index2=3;
//         let element2=16;
 
//         for (i = arr1.length; i > index1; i--) { 
//             arr1[i] = arr1[i - 1]; 
//         } 

//         // insert the element at the index 
//         arr1[index1] = element1;

//          for (j = arr2.length; j > index2; j--) { 
//             arr2[j] = arr2[j - 1]; 
//         } 

//         // insert the element at the index 
//         arr2[index2] = element2; 

// }
// insertShiftArray(arr2);
// insertShiftArray(arr1);

function insertArray(arr,value){
    let array=[];
    let multipleArray = Math.ceil(array.length /2);

    for(let i=0;i<=array.length;i++){
        if(i>multipleArray){
            return array[i-1];
        }
        if(i<multipleArray){
            return array[i]
        }
        if(i === null){
            return 'no value';
        }
    }
}
module.exports = insertArray;