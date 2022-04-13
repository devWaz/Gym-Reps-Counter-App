let addCount = document.getElementById("repCount")
let  count = 0
let saveCount = document.getElementById("entries")
console.log(addCount)
console.log(saveCount)

function increment(){
    count += 1
    repCount.innerText = count
}

function save(){
    newCount = count + " - "
    saveCount.innerText += newCount
    console.log(newCount)
}