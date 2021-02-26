let i = 400; let j = 200; let k = 300
if (i > j && i > k) {
    console.log("i is largest",i)
}
else if (j > k && j > i) {
    console.log("j is largest",j)
}
else if (k > j && k > i) {
    console.log("k is largest",k)
}

console.log("after if else block")
let choice = "*"
switch (choice) {
    case "+": {
        console.log(i + j)
        break
    }
    case "-": {
        console.log(i - j)
        break
    }
    default:
        console.log("invalid operation............")
}

