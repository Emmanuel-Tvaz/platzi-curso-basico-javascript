function calculaPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

//Precio con descuento
// function onClickButtonPriceDiscount(){
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("inputDiscount");
//      const discountValue = inputDiscount.value;
    
//     const resultPrecio = calculaPrecioConDescuento(priceValue, discountValue)

//     const resultP = document.getElementById("ResultPrice");
//     resultP.innerText ="El precio con descuento son: $" + resultPrecio;

// }

//Solución 1 y 2
// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];



//Cupones

//Solución #1: arrays y switch

// function onClickButtonPriceDiscountCoupon() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;
  
//     let descuento;
  
//     switch(couponValue) {
//       case "JuanDC_es_Batman":
//         descuento = 15;
//       break;
//       case "pero_no_le_digas_a_nadie":
//         descuento = 30;
//       break;
//       case "es_un_secreto":
//         descuento = 25;
//       break;
//     }
  
  
//     const precioConDescuento = calculaPrecioConDescuento(priceValue, descuento);
  
//     const resultP = document.getElementById("ResultPrice");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }

// Solución #2: legibilidad, error first y muerte al switch
// function onClickButtonPriceDiscountCoupon() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;
  
//     let descuento;
    
//     if (!coupons.includes(couponValue)) {
//         alert("El cupón " + couponValue + " no es válido");
//     }


//     if (!coupons.includes(couponValue)) {
//         alert("El cupón " + couponValue + "no es válido");
//      } else if (couponValue === "JuanDC_es_Batman") {
//         descuento = 15;
//      } else if (couponValue === "pero_no_le_digas_a_nadie") {
//         descuento = 30;
//      } else if (couponValue === "es_un_secreto") {
//         descuento = 25;
//      }
  
  
//     const precioConDescuento = calculaPrecioConDescuento(priceValue, descuento);
  
//     const resultP = document.getElementById("ResultPrice");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }

//Solución #3: arrays y condicionales mucho más inteligentes
function onClickButtonPriceDiscountCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    let descuento;
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calculaPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    
}