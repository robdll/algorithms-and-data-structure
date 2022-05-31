// Quicksort  
// Time Complexity	O(n*log(n))	
// Space Complexity  O(n)
function quicksort(arr, start, end) {

    console.log(`start: ${start} end: ${end}`);
    let i = start;
    let j = end - 1;
    let p = end;    //pivot index

    while(i<=j) {        
        while(arr[i]<arr[p]) i++;       
        while(j>=start && arr[j]>=arr[p]) j--;  
        if(i<=j) swap(arr, i, j)
    }
    swap(arr,i,p)
    if(start<i-1) {
        quicksort(arr,start,i-1);
    }
    if(end>i+1) {
        quicksort(arr,i+1,end);
    }
}

function swap(arr, i, j) {
    console.log("swap:", arr[i], arr[j])
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(arr)
}

let myarr = [3,7,4,2,1];

console.log(`to be sorted:`, myarr);
quicksort(myarr,0,myarr.length-1);
