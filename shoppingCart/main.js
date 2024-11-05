const adds = document.getElementsByClassName("bedels__button");
let cart = 0;
const cartvalue = document.getElementsByClassName("shoppingCart__message")[0];
const modal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;

let tijger = 0;
let stitch = 0;
let edna = 0;
let price_tijger = 0;
let price_stitch = 0;
let price_edna = 0;

for (let i = 0; i < adds.length; i++){
    adds[i].onclick = function () {
        cart += 1;
        cartvalue.innerHTML = cart;
        switch (adds[i].dataset.product) {
            case "tijger":
                tijger += 1;
                price_tijger = 90 * tijger;
                break;
            case "stitch":
                stitch += 1;
                price_stitch = 90 * stitch;
                break;
            case "edna":
                edna += 1;
                price_edna = 90 * edna;
                break;
        }
        if (modalIsOpen === false) {
            modal.style.display = "flex";
            modalIsOpen = true
            setTimeout(function(){
                modal.style.display = "none";
                modalIsOpen = false;
            }, 2000);
        }
    }
}

const checkout = document.getElementById("checkoutButton");
const checkoutWindow = document.getElementById("checkoutWindow");
const icon_arrow = document.getElementsByClassName("fa-arrow-left")[0];
const icon_cart = document.getElementsByClassName("fa-cart-shopping")[0];
let checkoutOpen = false;

checkout.onclick = function () {
    if (checkoutOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block"
        icon_arrow.style.display = "block"
        icon_cart.style.display = "none"
        checkoutOpen = true;
        document.getElementById("js--tijger").innerHTML = tijger + "x  €" + price_tijger;
        document.getElementById("js--stitch").innerHTML = stitch + "x  €" + price_stitch;
        document.getElementById("js--edna").innerHTML = edna + "x  €" + price_edna;
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none"
    icon_arrow.style.display = "none"
    icon_cart.style.display = "block"
    checkoutOpen = false;
}