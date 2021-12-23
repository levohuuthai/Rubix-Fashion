const trendProduct = [{
    id: 1,
    img: {
      img1: "../images/trend-product1.jpg",
      img2: "../images/trend-product01.jpg",
      img3: "../images/trend-product011.jpg",
    },
    name: "Womens classic glasses",
    price: "$80.00",
  },
  {
    id: 2,
    img: {
      img1: "../images/trend-product2.jpg",
      img2: "../images/trend-product02.jpg",
    },
    name: "Check Cotton T-shirt",
    price: "$79.00",
  },
  {
    id: 3,
    img: {
      img1: "../images/trend-product3.jpg",
      img2: "../images/trend-product3.jpg",
    },
    name: "Neocro Backpack In Canvas",
    price: "$29.00",
  },
  {
    id: 4,
    img: {
      img1: "../images/trend-product4.jpg",
      img2: "../images/trend-product04.jpg",
    },
    name: "Cotton Fleece Jogging",
    price: "$39.00",
  },
  {
    id: 5,
    img: {
      img1: "../images/trend-product5.jpg",
      img2: "../images/trend-product05.jpg",
    },
    name: "Checked Cotton Shirt",
    price: "$259.00",
  },
  {
    id: 6,
    img: {
      img1: "../images/trend-product6.jpg",
      img2: "../images/trend-product06.jpg",
    },
    name: "Casual Embossed Lettering",
    price: "$79.00",
  },
  {
    id: 7,
    img: {
      img1: "../images/trend-product7.jpg",
      img2: "../images/trend-product07.jpg",
    },
    name: "Daily Ritual Women’s",
    price: "$80.00",
  },
  {
    id: 8,
    img: {
      img1: "../images/trend-product8.jpg",
      img2: "../images/trend-product08.jpg",
    },
    name: "Sweeper And Funnel",
    price: "$80.00",
  },
];

//owlCarousel
$(document).ready(function () {
  // trendProduct.forEach(val => {
  //   console.log(val.img);
  // })

  $(".main-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    //margin: 20,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    autoplay: true, //Tự chạy
    autoplayTimeout: 6000, //Thời gian chạy
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
  $(".list-blog").owlCarousel({
    items: 3,
    loop: false,
    nav: true,
    margin: 28,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      460: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".slide-brand").owlCarousel({
    items: 6,
    loop: true,
    nav: false,
    dots: false,
    margin: 80,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
  $(".img-quick").owlCarousel({
    items: 1,
    loop: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    dots: false,

  });
});

//----------scrool header && click to top && search-------
$(document).ready(function () {
  //scroll header
  $(document).scroll(function () {
    const currentPos = $(document).scrollTop();
    if (currentPos > 145) {
      $(".header").addClass("active-fixed");
      if ($(window).width() < 576) {
        $(".header").removeClass("active-fixed");
      }
      $(".gotop").fadeIn().css("display", "flex"); //fadeIn kết hợp giữa display blok và opacity
    } else {
      $(".header").removeClass("active-fixed");
      $(".gotop").fadeOut(); //fadeout kết hợp giữa display none và opacity
    }
  });
  //click totop
  $(".gotop").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      1000
    );
  });
  //click search
  $(".search").click(function (e) {
    e.preventDefault();
    $(".search-header").addClass("active-search-header");
  });

  //click close search
  $(".cancel").click(function (e) {
    e.preventDefault();
    $(".search-header").removeClass("active-search-header");
  });

  //header-reponsive
  $(".menu-bar-reponsive").click(function (e) {
    $(".menu-reponsive").addClass("active-menu-repon");
    $(".blur-menu-repon").addClass("active-blur-menu-res");
  });
  $(".cancel-menu-res").click(function (e) {
    $(".menu-reponsive").removeClass("active-menu-repon");
    $(".blur-menu-repon").removeClass("active-blur-menu-res");
  });

  //menu-header-respon
  let checkHome = true;
  let checkShop = true;
  let checkPage = true;
  let checkBlog = true;
  $(".home-chevron-down").click(function (e) {
    e.preventDefault();
    if (checkHome == true) {
      menuSlideDown(".dropdown-home-res", ".home-chevron-down");
      menuSlideUp(".dropdown-blog-res", ".blog-chevron-down");
      menuSlideUp(".dropdown-page-res", ".page-chevron-down");
      menuSlideUp(".dropdown-shop-res", ".shop-chevron-down");
      checkHome = false;
      checkPage = true;
      checkBlog = true;
      checkShop = true;
    } else {
      menuSlideUp(".dropdown-home-res", ".home-chevron-down");
      checkHome = true;
    }
  });
  $(".shop-chevron-down").click(function (e) {
    e.preventDefault();
    if (checkShop == true) {
      menuSlideDown(".dropdown-shop-res", ".shop-chevron-down");
      menuSlideUp(".dropdown-blog-res", ".blog-chevron-down");
      menuSlideUp(".dropdown-page-res", ".page-chevron-down");
      menuSlideUp(".dropdown-home-res", ".home-chevron-down");
      checkShop = false;
      checkHome = true;
      checkPage = true;
      checkBlog = true;
    } else {
      menuSlideUp(".dropdown-shop-res", ".shop-chevron-down");
      checkShop = true;
    }
  });
  $(".page-chevron-down").click(function (e) {
    e.preventDefault();
    if (checkPage == true) {
      menuSlideDown(".dropdown-page-res", ".page-chevron-down");
      menuSlideUp(".dropdown-blog-res", ".blog-chevron-down");
      menuSlideUp(".dropdown-shop-res", ".shop-chevron-down");
      menuSlideUp(".dropdown-home-res", ".home-chevron-down");
      checkPage = false;
      checkBlog = true;
      checkHome = true;
      checkShop = true;
    } else {
      menuSlideUp(".dropdown-page-res", ".page-chevron-down");
      checkPage = true;
    }
  });

  $(".blog-chevron-down").click(function (e) {
    e.preventDefault();
    //$(".dropdown-blog-res").slideToggle()
    if (checkBlog == true) {
      menuSlideDown(".dropdown-blog-res", ".blog-chevron-down");
      menuSlideUp(".dropdown-page-res", ".page-chevron-down");
      menuSlideUp(".dropdown-shop-res", ".shop-chevron-down");
      menuSlideUp(".dropdown-home-res", ".home-chevron-down");
      checkBlog = false;
      checkPage = true;
      checkShop = true;
      checkHome = true;
    } else {
      menuSlideUp(".dropdown-blog-res", ".blog-chevron-down");
      checkBlog = true;
      //checkPage = false
    }
  });
});

function menuSlideDown(nameClass, iconChevron) {
  $(nameClass).slideDown();
  $(iconChevron).addClass("bi bi-chevron-up");
  $(iconChevron).removeClass("bi bi-chevron-down");
}

function menuSlideUp(nameClass, iconChevron) {
  $(nameClass).slideUp();
  $(iconChevron).removeClass("bi bi-chevron-up");
  $(iconChevron).addClass("bi bi-chevron-down");
}
//----------render product && cart aside-------
var listCartProduct = [];
//getLocalListCart
var dataListCart = localStorage.getItem("listcartproduct");
if (dataListCart) {
  listCartProduct = JSON.parse(dataListCart);
  renderListCart(listCartProduct);
} else {
  listCartProduct = [];
}
//renderProduct
$(document).ready(function () {
  trendProduct.forEach((val) => {
    $(".list-trend-product").append(`
            <div class="item-trend-product col-xs-6 col-sm-6 col-lg-4 col-xlg-3" data-id= ${val.id} ">
                <div class="img-trend-product">
                    <a href="../html/detailProduct.html" class = "image-trend">
                        <img src=${val.img.img1} alt="">   
                        <img src=${val.img.img2} class="img-hover" alt="" > 
                    </a>                   
                    <a href="" class="btn-addtocart flex a-center j-center" data-id=${val.id}><i class="bi bi-handbag" data-id=${val.id}></i>Add To Cart</a>       
                    <div class="item-buttons f-column">
                        <a href="" class ="wishlist-item"><i class="bi bi-suit-heart"></i></a>
                        <a href="" class="btn-compare-product"><i class="bi bi-sliders"></i></a>
                        <a href="" class="btn-quickview"><i class="bi bi-eye"></i></a>
                    </div>  
                    <div class="item-buttons-res">
                      <a href="" class="btn-wishlist-respon"><i class="bi bi-suit-heart"></i></a>
                      <a href="" class="btn-addtocart-respon"><i class="bi bi-handbag"></i></a>
                    </div>
                </div>
                <h2 class="title-trend-product"><a href="">${val.name}</a></h2>
                <p class="price-trend-product">${val.price}</p>          
            </div>
        `);
  });
  //click  cart aside
  $(".my-cart").click(function (e) {
    e.preventDefault();
    $(".my-cart-aside").addClass("active-my-cart-aside");
    if (listCartProduct.length == 0) {
      $(".list-cart-product").text("No product in cart.");
    }
  });

  //click close cart aside
  $(".title-cart .close-cart").click(function (e) {
    e.preventDefault();
    $(".my-cart-aside").removeClass("active-my-cart-aside");
  });
  $(".blur-cart-aside").click(function (e) {
    e.preventDefault();
    $(".my-cart-aside").removeClass("active-my-cart-aside");
  });

  //click btn-addtocart
  $(".btn-addtocart, .btn-addtocart-respon, .btn-addtocart-detail").click(function (e) {
    e.preventDefault();
    $(".my-cart-aside").addClass("active-my-cart-aside");
    const id = $(this).parents(".item-trend-product").data().id
    const cartProduct = trendProduct.filter((val) => val.id == id);
    let idx = listCartProduct.findIndex((val) => {
      return val.id == id;
    });
    if (idx !== -1) {
      listCartProduct[idx].qty += 1;
    } else {
      cartProduct.forEach(val => {
        listCartProduct.push({
          id: val.id,
          img: val.img.img1,
          name: val.name,
          price: val.price,
          qty: 1,
        });
      })
    }
    //set localstorage
    setLocal("listcartproduct", listCartProduct);
    renderListCart(listCartProduct);
  });

  //click close product-cart
  $(document).on("click", ".close-product-cart", function (e) {
    e.preventDefault();
    //$(".list-cart-product").empty();
    const id = $(this).parents(".item-product-cart").data().id;
    const currentIdx = listCartProduct.findIndex((val) => val.id == id);
    listCartProduct.splice(currentIdx, 1);
    setLocal("listcartproduct", listCartProduct);
    renderListCart(listCartProduct);
  });
  //------------------------------------------------------------View cart
  renderViewCart(listCartProduct);
  //Click input coupon
  document.addEventListener("click", function (e) {
    const target = e.target;
    if (target.classList.contains("input-coupon")) {
      $(".input-coupon").addClass("active-input-cou")
    } else {
      $(".input-coupon").removeClass("active-input-cou")
    }
  });
  // var total;     //total của từng product
  // total = listCartProduct.reduce((acc, val) => {
  //   let total1 = Number(val.price.split("").slice(1).join("") * val.qty)
  //   console.log(total1);
  //   listTotal.push(total1)
  // }, 0);
  // console.log(total);
  //add button plus
  let checkUpdate = false
  $(document).on("click", ".plus", function () {
    $(".update-cart").addClass("active-update-cart")
    const id = $(this).parents("tr").data().id;
    let idx = listCartProduct.findIndex((val) => val.id === id);
    checkUpdate = true;
    listCartProduct[idx].qty++;
    renderViewCart(listCartProduct);
  });
  //add button minus
  $(document).on("click", ".minus", function () {
    $(".update-cart").addClass("active-update-cart")
    const id = $(this).parents("tr").data().id;
    let idx = listCartProduct.findIndex((val) => val.id === id);
    if (listCartProduct[idx].qty > 1) {
      listCartProduct[idx].qty--;
    }
    renderViewCart(listCartProduct);
    checkUpdate = true;
  });
  //click close product-cart
  $(document).on("click", ".close-product-viewcart", function (e) {
    e.preventDefault();
    const id = $(this).parents("tr").data().id;
    const currentIdx = listCartProduct.findIndex((val) => val.id == id);
    listCartProduct.splice(currentIdx, 1);
    //Update again sumTotal
    sum = listCartProduct.reduce((acc, val) => {
      return acc + Number(val.price.split("").slice(1).join("") * val.qty);
    }, 0);
    $(".subtotal-viewcart").text("$" + sum + ".00");
    $(".total-cart").text("$" + sum + ".00");
    setLocal("listcartproduct", listCartProduct);
    renderViewCart(listCartProduct);
  });
  //click Update product-cart
  $(".update-cart").click(function (e) {
    if (checkUpdate == false) {
      e.preventDefault()
    } else {
      checkUpdate = false
      $("html, body").animate({
          scrollTop: 180,
        },
        1000
      );
      $(".update-cart").removeClass("active-update-cart")
      $(".notify-update").addClass("active-notify-update")
      sum = listCartProduct.reduce((acc, val) => {
        return acc + Number(val.price.split("").slice(1).join("") * val.qty);
      }, 0);
      $(".subtotal-viewcart").text("$" + sum + ".00");
      $(".total-cart").text("$" + sum + ".00");
      setLocal("listcartproduct", listCartProduct);
      renderViewCart(listCartProduct);
    }
  })
  //--------------------------------------------------------------Checkout
  rendercheckout(listCartProduct);
});

function setLocal(key, value) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}
var sum;
var listTotal = [];

function renderListCart(products) {
  $(".list-cart-product").empty();
  //countItem
  let countItem = products.reduce((acc, val) => {
    return acc + val.qty;
  }, 0);
  $(".qty-mc a").text(countItem);
  //subtotal item
  sum = products.reduce((acc, val) => {
    return acc + Number(val.price.split("").slice(1).join("") * val.qty);
  }, 0);
  $(".subtotal").text("$" + sum + ".00");
  if (products.length > 0) {
    products.forEach((val) => {
      $(".list-cart-product").append(`
      <div class="item-product-cart a-start" data-id=${val.id}>
        <div class="img-product-cart">
          <a href=""><img src=${val.img} alt=""></a>
        </div>
        <div class="name-product-cart">
          <a href="">${val.name}</a>
          <p>${val.qty} x ${val.price}</p>
        </div>
        <div class="close-product-cart" data-id=${val.id}>
          <i class="bi bi-x"></i>
        </div>
      </div>
      `);
    });
  } else {
    $(".list-cart-product").text("No product in cart.");
  }
}

function renderViewCart(viewcart) {
  $(".tbody-viewcart").empty();
  $(".subtotal-viewcart").text("$" + sum + ".00");
  $(".total-cart").text("$" + sum + ".00");

  if (viewcart.length) {
    viewcart.forEach((val) => {
      const total = Number(val.price.split("").slice(1).join("") * val.qty)
      $(".tbody-viewcart").append(`
        <tr data-id =${val.id}>
                <td class="close-product-viewcart"><i class="far fa-times-circle"></i></td>
                <td class="img-product"><img src=${val.img} alt=""></td>
                <td class="name-product"><a href="">${val.name}</a></td>
                <td class="price-product">${val.price}</td>
                <td class="qty-product">
                  <div class="control flex j-between a-center">
                    <a href="" class="plus"><i class="fas fa-plus"></i></a>
                    <p class="qty">${val.qty}</p>
                    <a href="" class="minus"><i class="fas fa-minus"></i></a>
                  </div>
                </td> 
                <td class="total">$${total}.00</td>
        </tr>
  `);
    });
  } else {
    $(".no-viewcart").addClass("active-nocart");
    $(".table-viewcart").css("display", "none");
    $(".coupon-group").css("display", "none");
    $(".cart-totals").css("display", "none");
  }
}

function rendercheckout(checkout) {
  $(".list-product-subtotal").empty();
  let sum = checkout.reduce((acc, val) => {
    return acc + Number(val.price.split("").slice(1).join("") * val.qty);
  }, 0);
  $(".subtotal-checkout").text("$" + sum + ".00");
  $(".total-checkout").text("$" + sum + ".00");
  checkout.forEach((val) => {
    $(".list-product-subtotal").append(`
    <div class="product-subtotal flex j-between">
      <p class="name-product">${val.name} x ${val.qty}</p>
      <p class="price-product">$${Number(
        val.price.split("").slice(1).join("") * val.qty
      )}.00</p>
    </div>
  `);
  });
}

//------------------Wishlist---------------
let wishlist = [];

//getlocal wishlist
var dataWishlist = localStorage.getItem("wishlist");
if (dataWishlist) {
  wishlist = JSON.parse(dataWishlist);
  renderWishlist(wishlist);
} else {
  wishlist = [];
}
$(document).ready(function () {
  renderWishlist(wishlist);
  $(".wishlist-item, .btn-wishlist-respon").click(function (e) {
    e.preventDefault();
    const id = $(this).parents(".item-trend-product").data().id;
    const wishlistID = trendProduct.filter((val) => val.id == id);
    let duplicateWL = wishlist.findIndex((val) => val.id == id);
    if (duplicateWL == -1) {
      wishlist.push({
        id: wishlistID[0].id,
        img: wishlistID[0].img.img1,
        name: wishlistID[0].name,
        price: wishlistID[0].price,
        qty: 1,
      });
    } else {
      $(".notify-duplicate-wishlist").fadeIn().fadeOut(1000);
    }
    setLocal("wishlist", wishlist);
    renderWishlist(wishlist);
  });

  //click close wishlist
  $(document).on("click", ".close-product-wishlist", function () {
    const id = $(this).parents(".product-wishlist").data().id;
    const idxremoveWL = wishlist.findIndex((val) => val.id == id);
    wishlist.splice(idxremoveWL, 1);
    setLocal("wishlist", wishlist);
    renderWishlist(wishlist);
  });

  //click add to cart wishlist
  $(document).on("click", ".add-cart-wishlist", function (e) {
    e.preventDefault();
    $(".my-cart-aside").addClass("active-my-cart-aside");
    const id = $(this).parents(".product-wishlist").data().id;
    const productWL = wishlist.filter((val) => val.id == id);
    const duplicatecartwl = listCartProduct.findIndex((val) => val.id == id);
    if (duplicatecartwl === -1) {
      listCartProduct.push({
        id: productWL[0].id,
        img: productWL[0].img,
        name: productWL[0].name,
        price: productWL[0].price,
        qty: 1,
      });
      const idxremoveWL2 = wishlist.findIndex((val) => val.id == id);
      wishlist.splice(idxremoveWL2, 1);
      setLocal("wishlist", wishlist);
      setLocal("listcartproduct", listCartProduct);
      renderWishlist(wishlist);
      renderListCart(listCartProduct);
    } else {
      listCartProduct[duplicatecartwl].qty += 1;
      const idxremoveWL1 = wishlist.findIndex((val) => val.id == id);
      wishlist.splice(idxremoveWL1, 1);
      setLocal("wishlist", wishlist);
      setLocal("listcartproduct", listCartProduct);
      renderWishlist(wishlist);
      renderListCart(listCartProduct);
    }
    $(".notify-addcart-wishlist").css("display", "block");

    // setLocal("listcartproduct", listCartProduct);
    // setLocal("wishlist", wishlist);
    // renderListCart(listCartProduct);
    // renderWishlist(wishlist);
  });
});

function renderWishlist(wishlist) {
  $(".tbody-wishlist").empty();
  let quantityWl = wishlist.reduce((acc, val) => {
    return acc + val.qty;
  }, 0);
  $(".qty-wl").text(quantityWl);
  if (wishlist.length > 0) {
    wishlist.forEach((val) => {
      $(".tbody-wishlist").append(`
        <tr class="product-wishlist" data-id = ${val.id}>
          <td class="close-product-wishlist"><i class="far fa-times-circle"></i></td>
          <td class="img-product-wishlist"><img src=${val.img} alt=""></td>
          <td class="name-product-wishlist"><a href="">${val.name}</a></td>
          <td class="unitprice-product-wishlist">${val.price}</td>
          <td class="stock-product-wishlist">In Stock</td>
          <td class="add-cart-wishlist"><a href="#">Add to cart</a></td>
        </tr>
      `);
    });
  } else {
    $(".table-wishlist").text("No ");
  }
}

//------------------detailProduct---------------
//rednderdetail-prallax-mousemove-item
var filterDetail;
$(document).ready(function () {
  $(document).on("click", ".image-trend", function (e) {
    const id = $(this).parents(".item-trend-product").data().id;
    filterDetail = trendProduct.filter((val) => val.id == id);
    setLocal("detailProduct1", filterDetail);

  });
  //getLocal detail
  var dataDetailProduct = localStorage.getItem("detailProduct1");
  if (dataDetailProduct) {
    filterDetail = JSON.parse(dataDetailProduct);
  } else {
    filterDetail = [];
  }
  renderDetailProduct(filterDetail)
  //click img-item
  $(".img-item a").click(function (e) {
    e.preventDefault()
    const imgId = $(this).parent(".img-item").data().id
    const displayWidth = document.querySelector(".img-showcase img:first-child").clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId -1) * displayWidth}px)`;
  })
  //parallax
  $("#img-item1").mousemove(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 20)
    const y = ((window.innerWidth - e.pageY * 5) / 20)
    $("#img-item1").css("transform", `translateX(${x}px) translateY(${y}px) scale(1.5)`)
  });
  $("#img-item1").mouseout(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 1113011)
    const y = ((window.innerWidth - e.pageY * 5) / 1111301)
    $("#img-item1").css("transform", `translateX(${x}px) translateY(${y}px )`)
  });
  $("#img-item2").mousemove(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 20)
    const y = ((window.innerWidth - e.pageY * 5) / 20)
    $("#img-item2").css("transform", `translateX(${x}px) translateY(${y}px) scale(1.5)`)
  });
  $("#img-item2").mouseout(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 1113011)
    const y = ((window.innerWidth - e.pageY * 5) / 1111301)
    $("#img-item2").css("transform", `translateX(${x}px) translateY(${y}px )`)
  });
  $("#img-item3").mousemove(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 20)
    const y = ((window.innerWidth - e.pageY * 5) / 20)
    $("#img-item3").css("transform", `translateX(${x}px) translateY(${y}px) scale(1.5)`)
  });
  $("#img-item3").mouseout(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 1113011)
    const y = ((window.innerWidth - e.pageY * 5) / 1111301)
    $("#img-item3").css("transform", `translateX(${x}px) translateY(${y}px )`)
  });
  $("#img-item4").mousemove(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 20)
    const y = ((window.innerWidth - e.pageY * 5) / 20)
    $("#img-item4").css("transform", `translateX(${x}px) translateY(${y}px) scale(1.5)`)
  });
  $("#img-item4").mouseout(function (e) {
    const x = ((window.innerWidth - e.pageX * 5) / 1113011)
    const y = ((window.innerWidth - e.pageY * 5) / 1111301)
    $("#img-item4").css("transform", `translateX(${x}px) translateY(${y}px )`)
  });
});

//Cart-detail
let qty = 1
$(document).ready(function () {
  $(document).on("click", ".plus-detail", function (e) {
    e.preventDefault();
    $(".qty-detail").text(qty += 1)
  });
  $(document).on("click", ".minus-detail", function (e) {
    e.preventDefault();
    if (qty > 1) {
      $(".qty-detail").text(qty -= 1)
    }
  });

  //get-Listcart-Local
  var dataListCart = localStorage.getItem("listcartproduct");
  if (dataListCart) {
    listCartProduct = JSON.parse(dataListCart);
  } else {
    listCartProduct = [];
  }
  //add-to-cart
  $(document).on("click", ".btn-addtocart-detail", function (e) {
    e.preventDefault();
    $(".my-cart-aside").addClass("active-my-cart-aside");
    const id = $(this).parents(".content-detailproduct").data().id;
    const cartProduct = trendProduct.filter((val) => val.id == id);
    console.log(cartProduct);
    let idx = listCartProduct.findIndex((val) => {
      return val.id == id;
    });
    if (idx !== -1) {
      listCartProduct[idx].qty += qty;
    } else {
      {
        listCartProduct.push({
          id: cartProduct[0].id,
          img: cartProduct[0].img.img1,
          name: cartProduct[0].name,
          price: cartProduct[0].price,
          qty: 1,
        });
      }
    }
    //set localstorage
    renderListCart(listCartProduct);
    setLocal("listcartproduct", listCartProduct);
  });
});

function renderDetailProduct(filterDetail) {
  $(".detail-product .container").empty();
  $(".detail-product .container").append(`      
    <div class="img-detailproduct-group">
      <div class="img-select f-column">
          <div class = "img-item" data-id = "1" >
              <a href ="#"  ><img src=${filterDetail[0].img.img1} alt=""></a>
          </div>
          <div class = "img-item" data-id = "2">
              <a href ="#" ><img src=${filterDetail[0].img.img2} alt=""></a>
          </div>
          <div class = "img-item" data-id = "3">
              <a href ="#" ><img src=${filterDetail[0].img.img1} alt=""></a>
          </div>
          <div class = "img-item" data-id = "4">
              <a href ="#" data-id = "4"><img src=${filterDetail[0].img.img2} alt=""></a>
          </div>
      </div>
      <div class = "img-display">
          <div class="img-showcase">
              <img src=${filterDetail[0].img.img1} alt="" data-id = "1"  id="img-item1">
              <img src=${filterDetail[0].img.img2} alt="" id="img-item2">
              <img src=${filterDetail[0].img.img1} alt="" id="img-item3">
              <img src=${filterDetail[0].img.img2} alt="" id="img-item4">
          </div>
      </div>
    </div>
    <div class="content-detailproduct" data-id = ${filterDetail[0].id}>
      <h2>${filterDetail[0].name}</h2>
      <div class="rating">
          <span class="fa fa-star checked" style="color: #ba933e;"></span>
          <span class="fa fa-star checked" style="color: #ba933e;"></span>
          <span class="fa fa-star checked" style="color: #ba933e;"></span>
          <span class="fa fa-star-half-alt checked" style="color: #ba933e;"></span>
          <span class="fa fa-star"></span>
          <span style="margin-left: 15px;">(1 custom review)</span>
      </div>
      <p>${filterDetail[0].price}</p>
      <p class="describe-product">Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel
          with notch. Back slit. Two
          pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.<br>
          Summer tops for women<br>
          Cheetah kimonos ,beach cover ups<br>
          Lightweight chiffon casual shirts<br>
          Open front outwear,short sleeve blouse.
      </p>
      <div class="btn-group flex">
          <div class="control flex j-between a-center">
              <a href="" class="plus-detail"><i class="fas fa-plus"></i></a>
              <span class="qty-detail">1</span>
              <a href="" class="minus-detail"><i class="fas fa-minus"></i></a>
          </div>
          <a class="btn-addtocart-detail flex a-center"><i class="bi bi-handbag"></i>Add To Cart</a>
          <a class="wishlist-item-detail flex a-center"><i class="bi bi-suit-heart"></i></a>
          <a href="" class="compare-product flex a-center"><i class="bi bi-sliders"></i></a>
      </div>
      <div class="sku-wrapper flex">
          <h4 style="margin-right: 8px; color: #444;">SKU: </h4>
          <span> FUW233-1-1</span>
      </div>
      <div class="social-sharing flex">
          <h3>Share This Product:</h3>
          <ul class="flex">
              <li><a href="" class="face"><i class="fab fa-facebook"></i></a></li>
              <li><a href="" class="twitter"><i class="fab fa-twitter"></i></a></li>
              <li><a href="" class="pin"><i class="fab fa-pinterest"></i></a></li>
              <li><a href="" class="em"><i class="far fa-envelope"></i></a></li>
              <li><a href="" class="vi"><i class="fab fa-viber"></i></a></li>
          </ul>
      </div>
    </div>        
  `);
}
//------------------Quickview---------------
var filterNameQuick
$(document).ready(function () {
  $(document).on("click", ".btn-quickview", function (e) {
    e.preventDefault()
    $(".quick-view").addClass("active-quick-view")
    $(".blur-quickview").addClass("active-blur-quick")
    const id = $(this).parents(".item-trend-product").data().id
    const filterQuick = trendProduct.filter(val => val.id == id)
    renderQuickview(filterQuick)
  })
  //cancel-quick
  $(document).on("click", ".cancel-quick", function (e) {
    e.preventDefault()
    $(".quick-view").removeClass("active-quick-view")
    $(".blur-quickview").removeClass("active-blur-quick")
  });
  $(document).on("click", ".blur-quickview", function (e) {
    e.preventDefault()
    $(".quick-view").removeClass("active-quick-view")
    $(".blur-quickview").removeClass("active-blur-quick")
  });
  //click-name-quick
  $(document).on("click", ".name-quick", function (e) {
    //e.preventDefault()
    const id = $(this).parents(".content-quick").data().id
    filterNameQuick = trendProduct.filter(val => val.id == id)
    setLocal("detailProduct1", filterNameQuick)
  });
  // window.location.href = "../html/detailProduct.html"


});
let listImg = []

function renderQuickview(products) {
  $(".quick-view .content-quick").remove()
  listImg.splice(0, 3)
  for (var i = 0; i < 3; i++) {
    $('.img-quick').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
  }
  listImg.push([products[0].img.img1], [products[0].img.img2])
  listImg.forEach(val => {
    $('.img-quick').trigger('add.owl.carousel', [`
      <div class = "item-img-quick">
        <img src=${val} alt="">
      </div>
    `]).trigger("refresh.owl.carousel")
  })

  $(".quick-view").append(`
    <div class="content-quick" data-id = ${products[0].id}>
      <div class="cancel-quick"><i class="bi bi-x-circle"></i></div>
      <h2 class ="name-quick"><a href="../html/detailProduct.html">${products[0].name}</a></h2>
      <div class="rating">
        <span class="fa fa-star checked" style="color: #ba933e;"></span>
        <span class="fa fa-star checked" style="color: #ba933e;"></span>
        <span class="fa fa-star checked" style="color: #ba933e;"></span>
        <span class="fa fa-star-half-alt checked" style="color: #ba933e;"></span>
        <span class="fa fa-star"></span>
        <span style="margin-left: 15px;">(1 custom review)</span>
      </div>
      <p>${products[0].price}</p>
      <p class="describe-product">Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel
        with notch. Back slit. Two
        pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.<br>
        Summer tops for women<br>
        Cheetah kimonos ,beach cover ups<br>
        Lightweight chiffon casual shirts<br>
        Open front outwear,short sleeve blouse.
      </p>
      <div class="btn-group flex">
        <div class="control flex j-between a-center">
          <a href="" class="plus-quick"><i class="fas fa-plus"></i></a>
          <span class="qty-quick">1</span>
          <a href="" class="minus-quick"><i class="fas fa-minus"></i></a>
        </div>
        <a class="btn-addtocart-quick flex a-center">Add To Cart</a>
      </div>
      <div class="sku-wrapper flex">
        <h4 style="margin-right: 8px; color: #444;">SKU: </h4>
        <span> FUW233-1-1</span>
      </div>
      <div class="social-sharing flex">
        <h3>Share This Product:</h3>
        <ul class="flex">
          <li><a href="" class="face"><i class="fab fa-facebook"></i></a></li>
          <li><a href="" class="twitter"><i class="fab fa-twitter"></i></a></li>
          <li><a href="" class="pin"><i class="fab fa-pinterest"></i></a></li>
          <li><a href="" class="em"><i class="far fa-envelope"></i></a></li>
          <li><a href="" class="vi"><i class="fab fa-viber"></i></a></li>
        </ul>
      </div>
    </div>
  `);
}

//------------------Compare Product---------------

var compareProduct = []
//getLocal
var dataCompare = localStorage.getItem("compare");
if (dataCompare) {
  compareProduct = JSON.parse(dataCompare);
} else {
  compareProduct = [];
}
$(document).ready(function () {
  $(document).on("click", ".btn-compare-product", function (e) {
    e.preventDefault();
    $(".compare-product").addClass("active-compare")
    const id = $(this).parents(".item-trend-product").data().id
    const filterCompare = trendProduct.filter(val => val.id == id)
    const duplicateCompare = compareProduct.findIndex(val => val.id === id)
    if (duplicateCompare == -1) {
      compareProduct.push({
        id: filterCompare[0].id,
        img: filterCompare[0].img.img1,
        name: filterCompare[0].name,
        price: filterCompare[0].price,
      });
      setLocal("compare", compareProduct);
    }
    console.log(compareProduct.length);
    renderCompare(compareProduct)
  });

  $(document).on("click", ".delete-compare", function (e) {
    e.preventDefault();
    $(".compare-product").removeClass("active-compare")
  });
  $(document).on("click", ".remove-item-product-com td span", function (e) {
    e.preventDefault();
    const id = $(this).data().id
    const removeCompare = compareProduct.findIndex(val => val.id == id)
    compareProduct.splice(removeCompare, 1)
    renderCompare(compareProduct)
    setLocal("compare", compareProduct);
  });
});

function renderCompare(products) {
  $(".img-compare td ").remove()
  $(".remove-item-product-com td ").remove()
  $(".name-compare td ").remove()
  $(".price-compare td ").remove()
  $(".addtocart-compare td ").remove()
  $(".des-compare td ").remove()
  $(".availability td ").remove()
  if (products.length > 0) {
    $(".table-com .table-com-wrapper").removeClass("active-table-com")
    $(".table-com p").css("display", "none")
    products.forEach(val => {
      $(".remove-item-product-com").append(`
        <td><span data-id = ${val.id}>Remove</span></td> 
    `);
      $(".img-compare").append(`
        <td><img src=${val.img} alt=""></td>
    `);
      $(".name-compare").append(`
      <td>${val.name}</td>
    `);
      $(".price-compare").append(`
      <td>${val.price}</td>
    `);
      $(".addtocart-compare").append(`
      <td><span>ADD TO CART</span></td>
    `);
      $(".des-compare").append(`
      <td>Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. Back slit. Two
      pockets with flaps on the front. Button up. Inner lining. Inner pocket. Back length 95.0 cm.<br>
      Summer tops for women<br>
      Cheetah kimonos ,beach cover ups<br>
      Lightweight chiffon casual shirts<br>
      Open front outwear,short sleeve blouse</td>
    `);
      $(".availability").append(`
      <td class="available">In stock</td>
    `);
    })
  } else {
    $(".table-com .table-com-wrapper").addClass("active-table-com")
    $(".table-com p").css("display", "block")
  }
}