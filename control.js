let addCount = document.getElementById("repCount")
let  count = 0
let saveCount = document.getElementById("Entries")
console.log(addCount)
console.log(saveCount)

function increment(){
    count += 1
    repCount.textContent = count
}

function save(){
    newCount = count + " - "
    saveCount.textContent += newCount
    repCount.textContent = 0
    count = 0
}