var empty = document.querySelector('#empty')
var btn = document.querySelector('.btn-sendjs')
var inp = document.querySelector('#userInp')
var mode = document.querySelector('.mode-btn')
console.log(mode);
var main = document.querySelector('.main')
var body = document.querySelector('body')
var dl = document.getElementById('btn-dl')
var icon = document.getElementById('icon')
var txt = document.querySelector('.txt-cent')

//dark-light mode
function modes() {
    if (dl.className.includes('light')) {
        dl.className += ' dark'
        dl.classList.remove('light')
        icon.className = 'fa-regular fa-moon'
        icon.classList.remove('fa-solid')
        body.style.backgroundColor = 'white'

    } else {
        dl.classList.remove('dark')
        dl.className += ' light'
        icon.className = 'fa-solid fa-moon'
        icon.classList.remove('fa-regular')
        body.style.backgroundColor = 'black'
        inp.style.backgroundColor = 'white'
        txt.style.color = 'white'
    }
}
// console.log(icon.className='fa-solid fa-moon');



function mssgSend(e) {
    var userVal = e.target.value
    var userVal = inp.value.toLowerCase()

    console.log(e.target.value);

    if (e.keyCode == 13 || e.type === "click") {
        empty.innerHTML += `<div class="stylejs"> ${userVal} </div>`
        inp.value = ''
        txt.style.display = "none"
        empty.scrollTop = empty.scrollHeight
        console.log(mssgSend);
        if (["hi", "hello", "hey", "excuse me"].includes(userVal)) {
            setTimeout(function () {
                empty.innerHTML += `<div class="responsejs"><img src:"./images/logo.png> hello,how can I help you?</div>`

                empty.scrollTop = empty.scrollHeight
            }, 2000)
        } else if (["how are you", "how are you?", "Whats up?", "how are you doing?"].includes(userVal)) {
            setTimeout(function () {
                empty.innerHTML += `<div class="responsejs"> All good! Thanks for asking. tell me about yourself</div>`

                empty.scrollTop = empty.scrollHeight
            }, 2000)
        } else if (["what is your name?", "your good name", "tell me your name", "apka name"].includes(userVal)) {
            setTimeout(function () {
                empty.innerHTML += `<div class="responsejs">My name is <em><b><u> "Ugamo"</u></b></em>.A chatBot to make your life easier </div>`

                empty.scrollTop = empty.scrollHeight
            }, 2000)
        } else if (["salam", "asslamualaikum", "Assalam o alaikum", "AoA"].includes(userVal)) {
            setTimeout(function () {
                empty.innerHTML += `<div class="responsejs"> Walaikum Salam , How can i help you?</div>`

                empty.scrollTop = empty.scrollHeight
            }, 2000)
        } else if (['tell me about the basics of coding', 'coding kia hai?', 'what is programming', "basics of programming"].includes(userVal)) {
            setTimeout(function () {
                empty.innerHTML += `<div class="responsejs"> Code is to write commands to computer.Computer understands binary language 01. Human codes in programming (high level languages ) to convert high level to machine level computer uses compiler and interpreter`
            }, 3000);
        } else {
            setTimeout(function () {
                empty.innerHTML += `<div class="responsejs"> I cannot catch it! Please try again</div>`
                empty.scrollTop = empty.scrollHeight
            }, 3000);
        }
    }

}

// empty.scrollTop = empty.scrollHeight
//froom index to signup
function newpage() {
    window.location.href = 'signup.html'
}
//signup
var email = document.querySelector('#email')
var userInp = document.querySelector('input')
var returnMes = document.querySelector('#returnMsg')
var passMsg = document.querySelector('#passMsg')
var password = document.querySelector('#passwordd')
var eye = document.querySelector('.icon-eye')
var fullname = document.querySelector('#fName')
var nameMsg = document.querySelector("#nameMsg")
function login() {
    var valid = true
    if (fullname.value.length === 0) {
        nameMsg.innerHTML = "*This is a required field"
        nameMsg.style.color = "red"
        nameMsg.style.display = "block"
        valid = false
    } else if (email.value.length === 0) {
        returnMes.innerHTML = "you can't leave this field empty"
        returnMes.style.color = "red"
        returnMes.style.display = "block"
        eye.style.position = "fixed"
        eye.style.top = "63%"
        valid = false
    } else if (!email.value.includes('@')) {
        returnMes.innerHTML = "Invalid email format!"
        returnMes.style.color = "red"
        returnMes.style.display = "block"
        valid = false
    } else if (!email.value.endsWith('.com') && !email.value.endsWith('.org')) {
        returnMes.innerHTML = "Email must end with .com / .org"
        returnMes.style.color = "orange"
        returnMes.style.display = "block"
        valid = false
    } else if (password.value.length === 0) {
        passMsg.innerHTML = "*This is a required field"
        passMsg.style.display = "block"
        passMsg.style.color = "red"
        valid = false
    } else if (password.value.length < 8) {
        passMsg.innerHTML = "Password should be atleast 8 characters"
        passMsg.style.display = "block"
        passMsg.style.color = "red"
        valid = false
    } else {
        passMsg.innerHTML = ""
        returnMes.innerHTML = ""
        valid = true
    } setTimeout(function () {
        email.value = ""
        returnMes.innerHTML = ""
        returnMes.style = ""
        passMsg.innerHTML = ""
        password.value = ""
        nameMsg.innerHTML = ""
        nameMsg.style = ""
        eye.style = ""
    }, 2000)
    if (valid) {
        localStorage.setItem("fullname", fullname.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        window.location.href = "login.html"
    }
}
var icon = document.getElementById('icon')
function togglepass() {
    if (password.type === 'password') {
        password.type = 'text'
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    }
    else {
        password.type = 'password'
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    }
}
//login to next page
function nextpage() {
    window.location.href = './chat.html'
}
//login page
var email = document.querySelector('#email')
var password = document.querySelector('#passwordd')

function chatBotpage() {
    var emailSave = localStorage.getItem('email')
    var passwordSave = localStorage.getItem('password')
    if (email.value === emailSave && password.value === passwordSave) {
        
           window.location.href = "./chat.html"; 
        //
    } else {
        passMsg.innerHTML = '*Invalid email or password!'
        passMsg.style.display="block"
        passMsg.style.color="red"
    }setTimeout(function(){
        email.value=""
        password.value=""
        passMsg.innerHTML=""
        passMsg.style=""
    },2000)
}