let b=document.getElementById("save-el")
let a=document.getElementById("count-el")
let count=0
console.log(b)
function increment(){
    count=count+1
    a.innerText=count
}

function save(){
let c=count + " - "
b.innerText+=c
a.innerText=0
count=0
}



