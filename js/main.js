let elCreatePlane = document.querySelector(".js-create-plane")
let elModalBox = document.querySelector(".modal-box")
let elBody = document.querySelector("body")

elCreatePlane.addEventListener("click", function(){
    elModalBox.classList.add("modal-close")
    elBody.classList.add("hidden")
})
elModalBox.addEventListener("click", function(evt){
    evt.preventDefault()
    elModalBox.classList.remove("modal-close")
    elBody.classList.remove("hidden")
})
console.log(elCreatePlane)