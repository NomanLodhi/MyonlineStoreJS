let row=document.querySelector(".row");
let cartImg=JSON.parse(localStorage.getItem('cartImg'))
let cartTitle=JSON.parse(localStorage.getItem('cartTitle'))
let emptyCart=document.querySelector('#emptyCart')

if(cartImg==null){
    emptyCart.style.display='flex'
}

cartImg.forEach((e)=>{
  row.innerHTML+=`
    <div class="col-lg-4 col-md-6 my-3">
    <div class="card">
    <img src=${e} class="rounded float-start w-100">
    </div>
    </div>
   
    `
})

