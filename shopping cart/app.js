const addToCartButtons = document.getElementsByClassName("games_button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppinCart_message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let buzz = 0;
let iron = 0;
let c3po = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "buzz":
                buzz += 1;
                break;

            case "iron":
                iron += 1;
                break;

            case "c3po":
                c3po += 1;
            break;
        }
        if(modalIsOpen === false){
            modalIsOpen = true;
        }
        shoppingModal.style.display = "flex";
        modalIsOpen = true;
        setTimeout(function(){
            shoppingModal.style.display = "none";
            modalIsOpen = false;
        },2000);
    }
    
}
const checkoutButton = document.getElementById("js--checkoutbutton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
const cartIcon = document.getElementById("js--cartIcon");
const arrowIcon = document.getElementById("js--arrowIcon");
const totalBuzz = document.getElementById("js--amount-buzz-total");
const totalIron = document.getElementById("js--amount-ironman-total");
const totalC3po = document.getElementById("js--amount-c3po-total");
arrowIcon.style.display = "none";
let checkoutIsOpen = false;

console.log(checkoutButton);
checkoutButton.onclick = function () { 
    if (checkoutIsOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
        document.getElementById("js--amount-ironman").innerHTML = iron + "x";
        document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
        totalBuzz.innerHTML = "€" + buzz * 49;
        totalIron.innerHTML = "€" + iron * 39;
        totalC3po.innerHTML = "€" + c3po * 49;
        cartIcon.style.display = "none";
        arrowIcon.style.display = "block";
        checkoutIsOpen = true;
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    cartIcon.style.display = "block";
    arrowIcon.style.display = "none";
    checkoutIsOpen = false;
}