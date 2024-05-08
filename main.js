// --------------------------
// header アニメーション
// --------------------------
const header = document.querySelector('#header');

const windH = innerHeight;

window.addEventListener('scroll',function(){
    const amoutScroll = window.scrollY;
    if(amoutScroll > 250){
        header.classList.add('active');        
    }
    if(amoutScroll > 270){
      header.classList.add('active1');      
  }
    if(amoutScroll > 500){
        header.classList.add('move');        
    }
    if(amoutScroll <= 250){
        header.classList.remove('active');        
    }
    if(amoutScroll <= 270){
      header.classList.remove('active1');      
  }
    if(amoutScroll <= 500){
        header.classList.remove('move');        
    }
    console.log(amoutScroll)
})

// ハンバーガーメニュー
// ドロップダウンメニュー　通常時
const headITEM = document.querySelector('.js-header-doropMenu-ITEM');
const doropM = document.querySelector('.js-dropMenu');
const coinAkse = document.querySelector('.js-coinAkse');
const coinAkse2 = document.querySelector('.js-coinAkse2');
const doropC =document.querySelector('.js-dropCoin');
const Dmanu =document.querySelector('.item-dropMenu');
headITEM.addEventListener('mouseover',function(){
    doropM.classList.add('active');
})
coinAkse.addEventListener('mouseover',function(){
    doropC.classList.add('active');
})
coinAkse2.addEventListener('mouseover',function(){
    doropC.classList.remove('active');
})
Dmanu.addEventListener('mouseleave',function(){
    doropC.classList.remove('active');
    doropM.classList.remove('active');
})
// SPの時 ドロップダウンメニュー
const humBtn = document.querySelector('.SP-hum-btn');
const headNavi = document.querySelector('#SP-headNavi');
const backBtn =document.querySelector('.SP-back-btn');
const arrow1 = document.querySelector('.js-arrow1');
const arrow2 = document.querySelector('.js-arrow2');
const itemMenu = document.querySelector('.js-item-menu');
const coinList = document.querySelector('.js-coin-list');

humBtn.addEventListener('click',function(){
    headNavi.classList.add('active');    
})
backBtn.addEventListener('click',function(){
    headNavi.classList.remove('active');    
})
arrow1.addEventListener('click',function(){
    itemMenu.classList.toggle('active');    
})
arrow2.addEventListener('click',function(){
    coinList.classList.toggle('active');    
})
console.log(arrow1);


// --------------------------
// swiper1
// --------------------------
const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup:1,
    loop: true,
    speed:1500,
    autoplay:{        
        delay:4000,        
        disableOnInteraction:true,
    },
    breakpoints: {
        800: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
});

// --------------------------
// swiper2
// --------------------------
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1500,    
    centeredSlides:true,
    spaceBetween:12,
    slidesPerView: 1.1,
    slidesPerGroup:1,    
    loop:true,
    autoplay:{        
        delay:4000,        
        disableOnInteraction:true,
    },
    breakpoints: {
        700:{            
            slidesPerView: 1.8,
            slidesPerGroup: 1,
        },
        1000: {
          slidesPerView: 3.3,
          slidesPerGroup: 3,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
});

// --------------------------
// swiper3
// --------------------------
const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1500,
    spaceBetween:15,
    slidesPerView:2,
    slidesPerGroup:2,
    autoplay:{        
        delay:4000,        
        disableOnInteraction:true,
    },  
    breakpoints: {
        700:{            
            slidesPerView: 4,
            slidesPerGroup: 4,
        },        
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
});

// --------------------------
// swiper4
// --------------------------
const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1500,
    spaceBetween:15,
    slidesPerView:2,
    slidesPerGroup:2,
    autoplay:{        
        delay:4000,        
        disableOnInteraction:true,
    },
    breakpoints: {
        700:{            
            slidesPerView: 4,
            slidesPerGroup: 4,
        },        
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });