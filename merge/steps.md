# Merge Sort

Review the pseudocode below, then trace the algorithm by stepping through the process .

-----------------------------------------------------------

# Big O 
-Time 
-Space O(n)

-----------------------------------------------------------

# JS Code :

`'use strict';

function mergesort(array){
    let n=array.length;

    if(n>1){
        let mid= n/2;
        let left = array.slice(0,mid);
        let right = array.slice(mid,n);

        mergesort(left);
        mergesort(right);
     
    }

}

function merge(left,right,array){
    let i=0;
    let j=0;
    let k=0;

    while(i<left.length && j<right.length){
        if(left[i]<= right[j]){
            array[k]=left[i];
            i++
        }else{
            arr[k]=right[j];
            j++;
        }
        k++
    }
    if (i==left.length){
        while(j<right.length){
            arr[k]=right[j];
            j++;
            k++;
        }
    }else{
            while (i<left.length){
                arr[k]=left[i];
                i++;
                k++;
            }
        }
        return arr;
}


module.exports=mergesort; `

---------------------------------------------------------------------