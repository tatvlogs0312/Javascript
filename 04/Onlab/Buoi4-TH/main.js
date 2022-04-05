const btnT = document.querySelector(".btn.counterBtn.prevBtn")
const btnC = document.querySelector(".btn.counterBtn.nextBtn")
const h1 = document.getElementById("counter")

btnC.addEventListener("click",function(){
    h1.innerText = Number(h1.innerText) + 1;
    if(Number(h1.innerText) == 0){
        h1.style.color = "#333333"
    }
    else if(Number(h1.innerText) > 0){
        h1.style.color = "green"
    }
    else{
        h1.style.color = "red"
    }
})

btnT.addEventListener("click",function(){
    h1.innerText = Number(h1.innerText) - 1;
    if(Number(h1.innerText) == 0){
        h1.style.color = "#333333"
    }
    else if(Number(h1.innerText) > 0){
        h1.style.color = "green"
    }
    else{
        h1.style.color = "red"
    }
})

