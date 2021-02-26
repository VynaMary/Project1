function calc(a, b, o) {
    let result;
    if (o == "+") {
        let c = a + b;
        result = c;
        //console.log("sum", c)
    }
    if (o == "-") {
        let c = a - b;
        result = c;
        //console.log("sdifference", c)
    }
    if (o == "*") {
        let c = a * b;
        //console.log("answer is", c)
        result = c;
    }
    return result
}
let data = calc(3, 3, "+")
console.log(data)
//calc(2, 3, "+")
//calc(2, 3, "-")
//calc(2, 3, "*")

let add = function (x, y) {
    return x + y
}
console.log(add)
let result = add(1, 2)
console.log(result)
let i = 500
function outer() {
    let i = 100
    //i=100
    let s="hello"
    console.log("inside function outer..............")
    console.log(i)
    function inner() {
        console.log(s)
        let k = 200
        console.log("inside function inner..........")
        console.log(k)
    }
    inner()
}
outer
console.log(i)