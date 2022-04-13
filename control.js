//document.getElementById("repCount").innerText = 4

let  count = 0

let addCount = document.getElementById("repCount")

console.log(addCount)

function increment(){
    count += 1
    repCount.innerText = count
}

function save(){
    console.log(count)
}