let number=document.querySelector('#number')
let email=document.querySelector('#email')
let Username=document.querySelector('#name')
let password=document.querySelector('#password')
let Confirmpassword=document.querySelector('#Confirmpassword')
let Alertsignup=document.querySelector('#alert-signup')
let SignUpForm=document.querySelector('#SignUpForm')
let Signupbtn=document.querySelector('#Signupbtn')
let modalDesc=document.querySelector('#modalDesc')
// To generate password
document.querySelector('#change').addEventListener('input',()=>{
    let char='0123456789@_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num='P'
    for(i=0;i<10;i++){
        num+=char[Math.floor(Math.random()*36)]
        number.innerHTML=num
    }
})
// To copy generated password
document.querySelector('#Copy').addEventListener('click',()=>{
navigator.clipboard.writeText(number.innerHTML)
})

// To show password category
let selectPass=document.querySelector('#selectPass')
selectPass.addEventListener('change',()=>{
    let PassGenerator=document.querySelector('#PassGenerator');
    if(selectPass.value=='Enter your own password'){
        PassGenerator.style.display='none'
    }
    else if(selectPass.value=='Generate Auto Password'){
        PassGenerator.style.display='block'
}
})

// On SignUpForm Submitt
SignUpForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(email.value=='' || Username.value=='' || Confirmpassword.value!=password.value){
        console.log('null')
        Alertsignup.style.display='block'
        Signupbtn.style.pointerEvents='none'
    }
    else{
        Alertsignup.style.display='none'
        Signupbtn.style.pointerEvents='fill'
        console.log('filled')
        localStorage.setItem('Email',email.value)
        localStorage.setItem('Password',Confirmpassword.value)
        localStorage.setItem('Username',Username.value)
       }
    })
let modalDisplay=()=>{
    modalDesc.style.display='none'
}
setTimeout(modalDisplay,3000)

