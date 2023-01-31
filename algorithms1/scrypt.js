const arr = [3,6,4,7,2,1,9];
 let num =1;


let index = arr.indexOf(num);
console.log(index);


let sum = 0;
for(i=0; i< arr.length; i++){
    sum += arr[i]*arr[i];
}
console.log(sum);