
// $(document).ready(function () {
//     var filterDetail;
//     var dataDetailProduct = localStorage.getItem("detailProduct1");
//     if (dataDetailProduct) {
//       filterDetail = JSON.parse(dataDetailProduct);
//     } else {
//       filterDetail = [];
//     }

//     renderDetailProduct(filterDetail)
//         //click img-item
//     $(".img-item a").click(function(e) {
//         e.preventDefault()
//         const imgId = $(this).parent(".img-item").data().id
//         const displayWidth = document.querySelector(".img-showcase img:first-child").clientWidth;
//         document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId -1) * displayWidth}px)`;
//     })

//         //parallax
//         $("#img-item1").mousemove(function (e) {      
//             const x = ((window.innerWidth - e.pageX*5)/20)
//             const y = ((window.innerWidth -  e.pageY *5)/20)
//             $("#img-item1").css("transform",`translateX(${x}px) translateY(${y}px) scale(1.5)`)
//         });
//         $("#img-item1").mouseout(function (e) {        
//             const x = ((window.innerWidth - e.pageX*5)/1113011)
//             const y = ((window.innerWidth -  e.pageY *5)/1111301)
//             $("#img-item1").css("transform",`translateX(${x}px) translateY(${y}px )`)
//         });
//         $("#img-item2").mousemove(function (e) {        
//             const x = ((window.innerWidth - e.pageX*5)/20)
//             const y = ((window.innerWidth -  e.pageY *5)/20)
//             $("#img-item2").css("transform",`translateX(${x}px) translateY(${y}px) scale(1.5)`)
//         });
//         $("#img-item2").mouseout(function (e) {        
//             const x = ((window.innerWidth - e.pageX*5)/1113011)
//             const y = ((window.innerWidth -  e.pageY *5)/1111301)
//             $("#img-item2").css("transform",`translateX(${x}px) translateY(${y}px )`)
//         });
//         $("#img-item3").mousemove(function (e) {        
//             const x = ((window.innerWidth - e.pageX*5)/20)
//             const y = ((window.innerWidth -  e.pageY *5)/20)
//             $("#img-item3").css("transform",`translateX(${x}px) translateY(${y}px) scale(1.5)`)
//         });
//         $("#img-item3").mouseout(function (e) {        
//             const x = ((window.innerWidth - e.pageX*5)/1113011)
//             const y = ((window.innerWidth -  e.pageY *5)/1111301)
//             $("#img-item3").css("transform",`translateX(${x}px) translateY(${y}px )`)
//         });
//         $("#img-item4").mousemove(function (e) {        
//             const x = ((window.innerWidth - e.pageX*5)/20)
//             const y = ((window.innerWidth -  e.pageY *5)/20)
//             $("#img-item4").css("transform",`translateX(${x}px) translateY(${y}px) scale(1.5)`)
//         });
//         $("#img-item4").mouseout(function (e) {        
//             const x = ((window.innerWidth - e.pageX*5)/1113011)
//             const y = ((window.innerWidth -  e.pageY *5)/1111301)
//             $("#img-item4").css("transform",`translateX(${x}px) translateY(${y}px )`)
//         });
// });


// //cart
// let qty = 1
// $(document).ready(function () {
//     $(document).on("click",".plus-detail",function (e) {
//         e.preventDefault();
//         $(".qty-detail").text(qty+=1)
//     });
//     $(document).on("click",".minus-detail",function (e) {
//         e.preventDefault();
//         if(qty > 1) {
//             $(".qty-detail").text(qty-=1)
//         }
//     });

//     //get-Listcart-Local
//     var dataListCart = localStorage.getItem("listcartproduct");
//     if (dataListCart) {
//         listCartProduct = JSON.parse(dataListCart);
//     } else {
//         listCartProduct = [];
//     }
//    //add-to-cart
// //    $(document).on("click",".btn-addtocart-detail",function (e) {
// //         e.preventDefault();
// //         $(".my-cart-aside").addClass("active-my-cart-aside");
// //         const id = $(this).parents(".content-detailproduct").data().id;
// //         const cartProduct = trendProduct.filter((val) => val.id == id);
// //         console.log(cartProduct);
// //         let idx = listCartProduct.findIndex((val) => {
// //         return val.id == id;
// //         });
// //         if (idx !== -1) {
// //         listCartProduct[idx].qty += 1;
// //         } else {
// //         {
// //             listCartProduct.push({
// //             id: cartProduct[0].id,
// //             img: cartProduct[0].img,
// //             name: cartProduct[0].name,
// //             price: cartProduct[0].price,
// //             qty: 1,
// //             });
// //         }
// //         }
// //         //set localstorage
// //         renderListCart(listCartProduct);
// //         setLocal("listcartproduct", listCartProduct);
// //     });
// });   



// function renderDetailProduct(filterDetail) {
//     $(".detail-product .container").append(`      
//       <div class="img-detailproduct-group">
//         <div class="img-select f-column">
//             <div class = "img-item" data-id = "1" >
//                 <a href ="#"  ><img src=${filterDetail[0].img} alt=""></a>
//             </div>
//             <div class = "img-item" data-id = "2">
//                 <a href ="#" ><img src=${filterDetail[0].img1} alt=""></a>
//             </div>
//             <div class = "img-item" data-id = "3">
//                 <a href ="#" ><img src=${filterDetail[0].img} alt=""></a>
//             </div>
//             <div class = "img-item" data-id = "4">
//                 <a href ="#" data-id = "4"><img src=${filterDetail[0].img1} alt=""></a>
//             </div>
//         </div>
//         <div class = "img-display">
//             <div class="img-showcase">
//                 <img src=${filterDetail[0].img} alt="" data-id = "1"  id="img-item1">
//                 <img src=${filterDetail[0].img1} alt="" id="img-item2">
//                 <img src=${filterDetail[0].img} alt="" id="img-item3">
//                 <img src=${filterDetail[0].img1} alt="" id="img-item4">
//             </div>
//         </div>
//       </div>
//       <div class="content-detailproduct" data-id = ${filterDetail[0].id}>
//         <h2>${filterDetail[0].name}</h2>
//         <div class="rating">
//             <span class="fa fa-star checked" style="color: #ba933e;"></span>
//             <span class="fa fa-star checked" style="color: #ba933e;"></span>
//             <span class="fa fa-star checked" style="color: #ba933e;"></span>
//             <span class="fa fa-star-half-alt checked" style="color: #ba933e;"></span>
//             <span class="fa fa-star"></span>
//             <span style="margin-left: 15px;">(1 custom review)</span>
//         </div>
//         <p>${filterDetail[0].price}</p>
//         <p class="describe-product">Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel
//             with notch. Back slit. Two
//             pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.<br>
//             Summer tops for women<br>
//             Cheetah kimonos ,beach cover ups<br>
//             Lightweight chiffon casual shirts<br>
//             Open front outwear,short sleeve blouse.
//         </p>
//         <div class="btn-group flex">
//             <div class="control flex j-between a-center">
//                 <a href="" class="plus-detail"><i class="fas fa-plus"></i></a>
//                 <span class="qty-detail">1</span>
//                 <a href="" class="minus-detail"><i class="fas fa-minus"></i></a>
//             </div>
//             <a class="btn-addtocart-detail flex a-center"><i class="bi bi-handbag"></i>Add To Cart</a>
//             <a class="wishlist-item-detail flex a-center"><i class="bi bi-suit-heart"></i></a>
//             <a href="" class="compare-product flex a-center"><i class="bi bi-sliders"></i></a>
//         </div>
//         <div class="sku-wrapper flex">
//             <h4 style="margin-right: 8px; color: #444;">SKU: </h4>
//             <span> FUW233-1-1</span>
//         </div>
//         <div class="social-sharing flex">
//             <h3>Share This Product:</h3>
//             <ul class="flex">
//                 <li><a href="" class="face"><i class="fab fa-facebook"></i></a></li>
//                 <li><a href="" class="twitter"><i class="fab fa-twitter"></i></a></li>
//                 <li><a href="" class="pin"><i class="fab fa-pinterest"></i></a></li>
//                 <li><a href="" class="em"><i class="far fa-envelope"></i></a></li>
//                 <li><a href="" class="vi"><i class="fab fa-viber"></i></a></li>
//             </ul>
//         </div>
//       </div>        
//     `);


// }