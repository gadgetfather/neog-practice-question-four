var input = document.querySelector("#input")
var redBtn = document.querySelector("#red-btn")
var greenBtn = document.querySelector("#green-btn")
var blueBtn = document.querySelector("#blue-btn")
var outputEl = document.querySelector("#output")


redBtn.addEventListener('click', function goRed(){
    var inputData = input.value
    outputEl.textContent = inputData
    outputEl.style.color = "red"

})

greenBtn.addEventListener('click', function goGreen(){
    var inputData = input.value
    outputEl.textContent = inputData
    outputEl.style.color = "green"
})

blueBtn.addEventListener('click', function goBlue(){
    var inputData = input.value
    outputEl.textContent = inputData
    outputEl.style.color = "blue"
})