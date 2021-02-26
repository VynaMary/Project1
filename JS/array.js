let arr1=[]
let arr2=new Array()
//array mutable modiifiable
console.log(arr1)
console.log(arr2,typeof arr2)

let arr3=[100,100,200,3000,300,500]
console.log(arr3)
arr3[2]=999
console.log(arr3)
arr3.push(100)
console.log(arr3)
arr3.pop()
console.log(arr3)
arr3.shift()
console.log(arr3)
console.log(arr3.length)
arr3.unshift(222)
console.log(arr3)
arr3[3]=10000
console.log(arr3)

arr3.splice(4)
//console.log(arr3)
arr3.splice(2,1)
console.log(arr3)