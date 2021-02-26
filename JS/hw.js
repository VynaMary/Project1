
// Create a new list item when clicking on the "Add" button
let items = []
function newElement() {
  list = document.getElementById("myInput").value;
  items.push(list)
  console.log(items)
  let s = ""
  for (x of items) {
    s += `<li>${x}</li>`
  }
  document.getElementById("mylist").innerHTML = s
}


let items1 = []
function newElement1() {
  list = document.getElementById("myInput1").value;
  items1.push(list)
  console.log(items1)
  let r = ""
  for (y of items1) {
    r += `<li>${y}</li>`
  }
  document.getElementById("mylist1").innerHTML = r
}

//let items= []
//function newElementmove() {
//  list = document.getElementById("myInput").value;
  //items.push(list)
  //console.log(items)
  //let s= ""
  //for (x of items) {
   // s += `<li>${y}</li>`
  //}
  //document.getElementById("mylist").innerHTML = s
//}