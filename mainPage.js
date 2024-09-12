let row=document.querySelector('.row');
let loader=document.querySelector('#loader');



let getProducts=(getData)=>{
    let apiFetch=new XMLHttpRequest();
apiFetch.addEventListener('readystatechange',()=>{
    console.log(apiFetch.readyState)
    console.log(apiFetch.status)

    if(apiFetch.readyState==4 && apiFetch.status==200){
     getData(JSON.parse(apiFetch.response))
     loader.style.display='none'
    }
    else if(apiFetch.readyState <=3){
        loader.style.display='flex'
    }
    else if(apiFetch.readyState==4){
        row.innerHTML=`Error Of ${apiFetch.status}`
    }
})
apiFetch.open('GET','https://fakestoreapi.com/products')
apiFetch.send()
}

let showProducts=(arrOfProducts)=>{
    arrOfProducts.map((products)=>{
        let col=document.createElement('div')
        col.setAttribute('class','col-lg-4 col-md-6 my-2')
        let card=document.createElement('div')
        card.setAttribute('class','card')
        card.setAttribute('style','height:400px;')
        let img=document.createElement('img')
        img.setAttribute('class','card-img-top')
        img.setAttribute('style','height:300px; object-fit:cover;')
        img.setAttribute('src',products.image)
        let heading=document.createElement('h5')
        heading.innerText=products.title
        let btn=document.createElement('button')
        btn.setAttribute('class','btn btn-primary')
        btn.innerText='Add to Cart'
        row.append(col)
        col.append(card)
        card.append(img)
        card.append(heading)
        card.append(btn)

        btn.addEventListener('click',(e)=>{
            if(localStorage.getItem('cartImg')==null && localStorage.getItem('cartTitle')==null){
           localStorage.setItem('cartImg',JSON.stringify([products.image]))
           localStorage.setItem('cartTitle',JSON.stringify([products.title]))
            }
      else{
     let addnewImg=JSON.parse(localStorage.getItem('cartImg'))
     let newArrImg=[...addnewImg,products.image]
     localStorage.setItem('cartImg',JSON.stringify(newArrImg))
  
 }
        })
           
    })
        
        
        
}
getProducts(showProducts)