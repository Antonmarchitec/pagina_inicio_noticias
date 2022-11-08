let btnResAbrir = document.querySelector("#btnResAbrir")
let btnClear = document.querySelector("#btnClear")
let contUl = document.querySelector("#contUl")



btnResAbrir.addEventListener("click", ()=>{
    contUl.classList.add("containerHeader_ul_JS")
    contUl.style.transition = "1s all"
})


btnClear.addEventListener("click", ()=>{
    contUl.classList.remove("containerHeader_ul_JS")
})




