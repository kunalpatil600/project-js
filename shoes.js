let productData
function Fetchdata(){
    const store=fetch("https://js-json-js.onrender.com/posts")
    .then((res)=>res.json()) 
    .then((data)=>{cardlist(data)
        productData=data
    })
    .catch((err)=>console.log(err))
}
Fetchdata()
function cardlist(data){ 
    const store=data.map((el)=>singlecard(el.image,el.price,el.title,el.id))
    document.getElementById("my-card").innerHTML=store.join("")
}
function singlecard(image,title,price,id){
    let card=`
    <a style=" text-decoration: none;" href="cart.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&id=${id}"
    <div class=" marl col-12 col-sm-12 col-lg-3 col-md-6"  id="${id}">  
           <div class="products-images-main "  >
            <img src=${image[0]} alt=""  width="100%" class="col-12" >
            <div class="products-images col-12 ms-3" >
            <img src="${image[1]}"  width="100%" alt="">
            </div>
            </div>
           <div class="pt-4 pb-3 ms-xl-3 ms-lg-4 ms-sm-4 ms-md-3 ms-3 mb-5 shop" style="background-color: #EAECEB;" >
           <h6 class="text-center text-dark" style="font-weight: 900; text-transform: uppercase;">${price}</h6>
            <h6 class="text-center fw-bold text-dark" >${title}€</h6>
           </div>
           </div>
           </a>
     `
    return card;
}
let sortAtoZBtn=document.getElementById("sort-low-to-high");
let sortZtoABtn=document.getElementById("sort-high-to-low");


sortAtoZBtn.addEventListener("click",()=>{
    const sortAtoZdata=productData.sort((a,b)=>a.price-b.price)
    cardlist(sortAtoZdata)
  })
        
  
  sortZtoABtn.addEventListener("click",()=>{
    const sortAtoZdata=productData.sort((a,b)=>b.price-a.price)
    cardlist(sortAtoZdata)
  })
 