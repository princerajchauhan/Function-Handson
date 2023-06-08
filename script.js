
let time = document.getElementById("time")
function currentTime(){
    let tm = new Date()
    let hours = tm.getHours()
    let ampm = hours < 12 ? 'AM' : 'PM'
    hours = hours%12
    let mins = tm.getMinutes()
    mins = mins < 10 ? '0'+mins : mins
    let sec = tm.getSeconds()
    sec = sec < 10 ? '0'+sec : sec
    time.innerHTML = `${hours} : ${mins} : ${sec} ${ampm}`
}
setInterval(() => {
    currentTime()
},1000)


// ******************** QUESTION 1 *************************

let code1 = document.getElementById("code1")
let isCode1 = false
function seeHide1(element){
    if (isCode1) {
        element.innerText = "See Code"
        code1.style.display = "none"
        isCode1 = false   
    }
    else{
        element.innerText = "Hide Code"
        code1.style.display = "block"
        isCode1 = true
    }
}

// ******************** QUESTION 2 *************************

let code2 = document.getElementById("code2")
let isCode2 = false
function seeHide2(element){
    if (isCode2) {
        element.innerText = "See Code"
        code2.style.display = "none"
        isCode2 = false   
    }
    else{
        element.innerText = "Hide Code"
        code2.style.display = "block"
        isCode2 = true
    }
}


// ******************** QUESTION 3 *************************

let code3 = document.getElementById("code3")
let isCode3 = false
function seeHide3(element){
    if (isCode3) {
        element.innerText = "See Code"
        code3.style.display = "none"
        isCode3 = false   
    }
    else{
        element.innerText = "Hide Code"
        code3.style.display = "block"
        isCode3 = true
    }
}


// ******************** QUESTION 4 *************************

let code4 = document.getElementById("code4")
let isCode4 = false
function seeHide4(element){
    if (isCode4) {
        element.innerText = "See Code"
        code4.style.display = "none"
        isCode4 = false   
    }
    else{
        element.innerText = "Hide Code"
        code4.style.display = "block"
        isCode4 = true
    }
}


// ******************** QUESTION 5 *************************

let code5 = document.getElementById("code5")
let isCode5 = false
function seeHide5(element){
    if (isCode5) {
        element.innerText = "See Code"
        code5.style.display = "none"
        isCode5 = false   
    }
    else{
        element.innerText = "Hide Code"
        code5.style.display = "block"
        isCode5 = true
    }
}


// ******************** QUESTION 6 *************************

let code6 = document.getElementById("code6")
let isCode6 = false
function seeHide6(element){
    if (isCode6) {
        element.innerText = "See Code"
        code6.style.display = "none"
        isCode6 = false   
    }
    else{
        element.innerText = "Hide Code"
        code6.style.display = "block"
        isCode6 = true
    }
}


// ******************** QUESTION 7 *************************

let code7 = document.getElementById("code7")
let isCode7 = false
function seeHide7(element){
    if (isCode7) {
        element.innerText = "See Code"
        code7.style.display = "none"
        isCode7 = false   
    }
    else{
        element.innerText = "Hide Code"
        code7.style.display = "block"
        isCode7 = true
    }
}


// ******************** QUESTION 8 *************************

let code8 = document.getElementById("code8")
let isCode8 = false
function seeHide8(element){
    if (isCode8) {
        element.innerText = "Guess Output"
        code8.style.display = "none"
        isCode8 = false   
    }
    else{
        element.innerText = "Hide Output"
        code8.style.display = "block"
        isCode8 = true
    }
}


// ******************** QUESTION 9 *************************

let code9 = document.getElementById("code9")
let isCode9 = false
function seeHide9(element){
    if (isCode9) {
        element.innerText = "Guess Output"
        code9.style.display = "none"
        isCode9 = false   
    }
    else{
        element.innerText = "Hide Output"
        code9.style.display = "block"
        isCode9 = true
    }
}


// ******************** QUESTION 10 *************************

let code10 = document.getElementById("code10")
let isCode10 = false
function seeHide10(element){
    if (isCode10) {
        element.innerText = "Guess Output"
        code10.style.display = "none"
        isCode10 = false   
    }
    else{
        element.innerText = "Hide Output"
        code10.style.display = "block"
        isCode10 = true
    }
}


// ******************** QUESTION 11 *************************

let code11 = document.getElementById("code11")
let isCode11 = false
function seeHide11(element){
    if (isCode11) {
        element.innerText = "Guess Output"
        code11.style.display = "none"
        isCode11 = false   
    }
    else{
        element.innerText = "Hide Output"
        code11.style.display = "block"
        isCode11 = true
    }
}


