// const percioOriginal = 120;
// const descuento = 18;

// console.log({
//     percioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// }
// )

function calcularprecioConDescuento(precio, descuento) {
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;
}

function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularprecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$" + precioConDescuento;
}
