let btn = document.getElementById("changeText")

btn.addEventListener("click", () => {
let text = document.getElementById("text")
text.innerText= "Hi Everyone"
})

let addSize = document.getElementById("addSize")

addSize.addEventListener("click", () => {
let text = document.getElementById("text")
text.style.fontSize = "50px"

})

let lessSize = document.getElementById("lessSize")
lessSize.addEventListener("click", () => {
let text = document.getElementById("text")
text.style.fontSize = "20px"

})

let changeColor = document.getElementById("changeColor")
changeColor.addEventListener("click", () => {
let text = document.getElementById("text")
text.style.color = "pink"

})

let changeBK = document.getElementById("changeBK")
changeBK.addEventListener("click", () => {
let text = document.getElementById("text")
text.style.background = "red"

})


let changeimg = document.getElementById("changeimg")
changeimg.addEventListener("click", () => {
let img = document.getElementById("img")
img.src = "https://images.pexels.com/photos/31505961/pexels-photo-31505961/free-photo-of-rural-farmer-walking-cows-on-dirt-pathway.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load";
});
