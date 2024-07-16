//Display mobile menu js
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.mealtime-menu');
const navlogo = document.querySelector('#mealtime-logo');
const menuItems = document.querySelectorAll(".mealtime-links");

function mobileMenu(){
    menu.classList.toggle("isactive");
    menuLinks.classList.toggle("active");
}

menu.onclick = ()=>{
    mobileMenu();
}

navlogo.onclick = ()=>{
    menu.classList.remove("isactive");
    menuLinks.classList.remove("active");
}

menuItems.forEach((button)=>{
    button.addEventListener("click",()=>{
        menu.classList.remove("isactive");
    menuLinks.classList.remove("active");
    })
})

//Breakfast tray working js
const breakfastTrayForwardBtn = document.querySelector(".breakfast-traycontrol-forward");
const breakfastTrayBackwardBtn = document.querySelector(".breakfast-traycontrol-backward");
const breakfastTrayElement = document.querySelectorAll(".breakfast-trayelement-item");
const breakfastRotateElement = document.querySelector(".breakfast-tray-wrapper");

let breakfastTrayAngle = 0;
let breakfastActiveElement = 0;

function breakfastElementIncrease(){
    breakfastTrayElement[breakfastActiveElement].className = "breakfast-trayelement-item";
    if(breakfastActiveElement < 3){
        breakfastActiveElement +=1
    }
    let currentBreakfastElement = breakfastTrayElement[breakfastActiveElement];
    currentBreakfastElement.classList.add(currentBreakfastElement.getAttribute("data-element"))
}

function breakfastElementDecrease(){
    breakfastTrayElement[breakfastActiveElement].className = "breakfast-trayelement-item";
    if(breakfastActiveElement > 0){
        breakfastActiveElement -= 1;
    }
    let currentBreakfastElement = breakfastTrayElement[breakfastActiveElement];
    currentBreakfastElement.classList.add(currentBreakfastElement.getAttribute("data-element"))
}

function breakfastRotateTrayIncrease(){
    if(breakfastTrayAngle < 270){
        breakfastTrayAngle += 90;
    }
    breakfastRotateElement.style.cssText = `transform:rotate(${breakfastTrayAngle}deg)`;
}

function breakfastRotateTrayDecrease(){
    if(breakfastTrayAngle > 0){
        breakfastTrayAngle -= 90;
    }
    breakfastRotateElement.style.cssText = `transform:rotate(${breakfastTrayAngle}deg)`;
}

breakfastTrayForwardBtn.addEventListener("click",()=>{
    breakfastRotateTrayIncrease();
    breakfastElementIncrease();
})

breakfastTrayBackwardBtn.addEventListener("click",()=>{
    breakfastRotateTrayDecrease();
    breakfastElementDecrease();
})

//Lunch tray working js
const lunchTrayForwardBtn = document.querySelector(".lunch-traycontrol-forward");
const lunchTrayBackwardBtn = document.querySelector(".lunch-traycontrol-backward");
const lunchTrayElement = document.querySelectorAll(".lunch-trayelement-item");
const lunchRotateElement = document.querySelector(".lunch-tray-wrapper");

let lunchTrayAngle = 0;
let lunchActiveElement = 0;

function lunchElementIncrease(){
    lunchTrayElement[lunchActiveElement].className = "lunch-trayelement-item";
    if(lunchActiveElement < 3){
        lunchActiveElement +=1
    }
    let currentLunchElement = lunchTrayElement[lunchActiveElement];
    currentLunchElement.classList.add(currentLunchElement.getAttribute("data-element"))
}

function lunchElementDecrease(){
    lunchTrayElement[lunchActiveElement].className = "lunch-trayelement-item";
    if(lunchActiveElement > 0){
        lunchActiveElement -= 1;
    }
    let currentLunchElement = lunchTrayElement[lunchActiveElement];
    currentLunchElement.classList.add(currentLunchElement.getAttribute("data-element"))
}

function lunchRotateTrayIncrease(){
    if(lunchTrayAngle < 270){
        lunchTrayAngle += 90;
    }
    lunchRotateElement.style.cssText = `transform:rotate(${lunchTrayAngle}deg)`;
}

function lunchRotateTrayDecrease(){
    if(lunchTrayAngle > 0){
        lunchTrayAngle -= 90;
    }
    lunchRotateElement.style.cssText = `transform:rotate(${lunchTrayAngle}deg)`;
}

lunchTrayForwardBtn.addEventListener("click",()=>{
    lunchRotateTrayIncrease();
    lunchElementIncrease();
})

lunchTrayBackwardBtn.addEventListener("click",()=>{
    lunchRotateTrayDecrease();
    lunchElementDecrease();
})

//Dinner tray working js
const dinnerTrayForwardBtn = document.querySelector(".dinner-traycontrol-forward");
const dinnerTrayBackwardBtn = document.querySelector(".dinner-traycontrol-backward");
const dinnerTrayElement = document.querySelectorAll(".dinner-trayelement-item");
const dinnerRotateElement = document.querySelector(".dinner-tray-wrapper");

let dinnerTrayAngle = 0;
let dinnerActiveElement = 0;

function dinnerElementIncrease(){
    dinnerTrayElement[dinnerActiveElement].className = "dinner-trayelement-item";
    if(dinnerActiveElement < 3){
        dinnerActiveElement +=1
    }
    let currentDinnerElement = dinnerTrayElement[dinnerActiveElement];
    currentDinnerElement.classList.add(currentDinnerElement.getAttribute("data-element"))
}

function dinnerElementDecrease(){
    dinnerTrayElement[dinnerActiveElement].className = "dinner-trayelement-item";
    if(dinnerActiveElement > 0){
        dinnerActiveElement -= 1;
    }
    let currentDinnerElement = dinnerTrayElement[dinnerActiveElement];
    currentDinnerElement.classList.add(currentDinnerElement.getAttribute("data-element"))
}

function dinnerRotateTrayIncrease(){
    if(dinnerTrayAngle < 270){
        dinnerTrayAngle += 90;
    }
    dinnerRotateElement.style.cssText = `transform:rotate(${dinnerTrayAngle}deg)`;
}

function dinnerRotateTrayDecrease(){
    if(dinnerTrayAngle > 0){
        dinnerTrayAngle -= 90;
    }
    dinnerRotateElement.style.cssText = `transform:rotate(${dinnerTrayAngle}deg)`;
}

dinnerTrayForwardBtn.addEventListener("click",()=>{
    dinnerRotateTrayIncrease();
    dinnerElementIncrease();
})

dinnerTrayBackwardBtn.addEventListener("click",()=>{
    dinnerRotateTrayDecrease();
    dinnerElementDecrease();
})

//cart working js
const mealCartBtn = document.querySelector("#mealtime-cart-logo");
const mealCart = document.querySelector(".mealtime-cart");
const closeCart = document.querySelector(".mealtime-close-cart");

mealCartBtn.addEventListener("click",()=>{
    menu.classList.remove("isactive");
    menuLinks.classList.remove("active");
    mealCart.classList.add("active");
})

closeCart.addEventListener("click",()=>{
    mealCart.classList.remove("active");
})

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}

function ready(){
    let removeCartBtn = document.querySelectorAll("#cart-remove");
    console.log(removeCartBtn);
    for(let i = 0; i < removeCartBtn.length;i++){
        let button = removeCartBtn[i];
        button.addEventListener("click",removeCartItem)
    }
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change",quantityChanged)
    }
    let addCart = document.getElementsByClassName("mealtime-add-tocart");
    for(let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener("click",addCartClicked)
    }
    document.getElementsByClassName("mealtime-buy-btn")[0].addEventListener("click",buyButtonClicked);
}

function buyButtonClicked(){
    alert('Your Order has been placed');
    let cartContent = document.getElementsByClassName("mealtime-cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value)  || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}

function addCartClicked(event){
    let button = event.target;
    let shopProduct = button.parentElement;
    let title = shopProduct.getElementsByClassName("mealtime-product-title")[0].innerText;
    let price = shopProduct.getElementsByClassName("mealtime-product-price")[0].innerText;
    let productImg = shopProduct.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updateTotal();
}

function addProductToCart(title,price,productImg){
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    let cartItems = document.getElementsByClassName('mealtime-cart-content')[0];
    let cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for(let i = 0; i < cartItemsNames.length; i++) {
        if(cartItemsNames[i].innerText == title){
            alert('You have already added this item to cart');
            return;
        }
    }
    let cartBoxContent = `
         <img src="${productImg}" alt="" class="cart-img">
         <div class="detail-box">
          <div class="cart-product-title">${title}</div>
          <div class="cart-product-price">${price}</div>
          <input type="number" value="1" class="cart-quantity">
         </div>
         <i class="bx bxs-trash" id="cart-remove"></i>`
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.querySelectorAll("#cart-remove")[0].addEventListener("click",removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);
}

function updateTotal(){
    let cart = document.getElementsByClassName("mealtime-cart-content")[0];
    let cartBoxes = cart.getElementsByClassName("cart-box");
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-product-price")[0];
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("$",""));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName("mealtime-total-price")[0].innerText = "$" + total;
}