let s="123"
let i=100
let j=i.toString()
console.log(j,typeof j)
let data=String("hellooooooo")
console.log(data,typeof data)
let num=Number(12224)
console.log(typeof num)

let s1="hello world"
console.log(s1)
console.log(typeof s1)
let s2=new String("hello world")
console.log(s2)
console.log(s2.length)
console.log(typeof s2)
console.log(s2.toUpperCase())
console.log(s)
console.log(s2)
console.log(s1.startsWith("h"))
console.log(s1.endsWith("world"))
console.log(s1.indexOf("o"))
console.log(s1.lastIndexOf("o"))
let s3="hello all"
console.log(s3)
console.log(s3.trim())
console.log(s3.concat("  how are u"))
console.log(s3.substring(2,5)) //excluding 5
console.log(s3.substr(2,5))
console.log(s3.charAt(4))
//length of s3 times the loop repeats
for(letter of s3){
    console.log(letter)
}
//demo.js called in para.html//
