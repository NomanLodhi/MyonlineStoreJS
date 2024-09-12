let emailConfirm=localStorage.getItem('Email');
let PasswordConfirm=localStorage.getItem('Password');
let LoginForm=document.querySelector('#LoginForm');
let Emaillogin=document.querySelector('#Emaillogin');
let Passwordlogin=document.querySelector('#Passwordlogin');
let loginBtn=document.querySelector('#loginBtn');
let Alertsignup=document.querySelector('#alert-signup')





LoginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(Emaillogin.value==emailConfirm && Passwordlogin.value==PasswordConfirm){
        // alert('Valid info')
        loginBtn.style.pointerEvents='fill'
          Alertsignup.style.display='none'
    }
    else{
        // alert('Invalid info')
        loginBtn.style.pointerEvents='none'
          Alertsignup.style.display='block'
    }
})
let modalDisplay=()=>{
    modalDesc.style.display='none'
}
setTimeout(modalDisplay,3000)