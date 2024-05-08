/* -----------------------------------------
ITEMページ
------------------------------------------ */
// ----並び替えリストの設定-------
const selectBtns = document.querySelectorAll('.js-select-btn');
const itemList1 = document.querySelector('.js-list1');
const itemList2 = document.querySelector('.js-list2');
const itemList3 = document.querySelector('.js-list3');
console.log(selectBtns);

selectBtns.forEach((element,index) => {
    element.addEventListener('click',function(){
        if(index === 0){
            itemList1.classList.toggle('active')
            itemList2.classList.remove('active')
            itemList3.classList.remove('active')
        }
        if(index === 1){
            itemList2.classList.toggle('active')
            itemList1.classList.remove('active')
            itemList3.classList.remove('active')
        }
        if(index === 2){
            itemList3.classList.toggle('active')
            itemList1.classList.remove('active')
            itemList2.classList.remove('active')
        }
    })
})


const newOrder = document.querySelector('#js-newOrder');
const popularOrder = document.querySelector('#js-popularOrder');
const priceH = document.querySelector('#js-priceHight');
const priceLow = document.querySelector('#js-priceLow');
const recomOrder = document.querySelector('#js-recomOrder');
const targetItem = document.querySelector('#item-detail');
const loadBtn = document.querySelector('#js-loadBtn');

let newITEMS = ITEMS;
let newOrders = [];

// 画面読み込み時に動く関数
window.onload = function(){
    newOrders = ITEMS.sort(function(x,y){
        return (new Date(y.date)) - (new Date(x.date));
    })
    newnewITEMS = newOrders.concat();
    CoinItemLoad();
    categoriesLabel();
};

// 配列を読み取ってHTMLを記述する関数
function itemLoad(){
    for(i = 0 ; i < 12 ; i++){
      targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ newITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + newITEMS[i].title + '</p><p class="cost">¥' + newITEMS[i].price + '(税込)</p></div><p class="item-categories">' + newITEMS[i].kind + '</p></a></div>'
        )
    }
};

// load ボタンを押したときの関数
// let X = 0;
// loadBtn.addEventListener('click',function(){
//     X = X+1
//     for(i = X*12 ; i < (X+1)*12 ; i++){
//       if(i >= newITEMS.length){
//         loadBtn.classList.add('active');
//         console.log(newITEMS.length)
//       }
//       else{
//       targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ newITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + newITEMS[i].title + '</p><p class="cost">¥' + newITEMS[i].price + '(税込)</p></div><p class="item-categories">' + newITEMS[i].kind + '</p></a></div>'
//       )}
      
//     }
//     categoriesLabel();
// });
// アイテム一覧をリセットする関数
function resetList(){
    const items = document.querySelectorAll('.item');
    for(i = 0; i < items.length; i++){
        targetItem.removeChild(items[i]);
    }
}
// ラベルにカラーを追加する関数
function categoriesLabel(){
  const categories = document.getElementsByClassName('item-categories');    
  for(i=0;i<categories.length;i++){
    
    if(newITEMS[i].kind == 'ネックレス'){        
      categories[i].classList.add('ITEM-bk-pink');
    }
    if(newITEMS[i].kind == 'シルバーコインリング'){
      categories[i].classList.add('ITEM-bk-gray');
    }
    if(newITEMS[i].kind == 'バングル・ブレスレット'){
      categories[i].classList.add('ITEM-bk-blue');
    }
    if(newITEMS[i].kind == 'ピアス・イヤリング'){
      categories[i].classList.add('ITEM-bk-purple');
    }
    if(newITEMS[i].kind == 'コインリング'){        
      categories[i].classList.add('ITEM-bk-orenge');
    }
  }
}
// 価格が高い順に並び変える
priceH.addEventListener('click',function(){
    resetList();
    const hightPrice = newnewITEMS.sort(function(x,y){
    return y.priceValue - x.priceValue;    
    })
    newnewITEMS = [];
    newnewITEMS = hightPrice.concat();
    CoinItemLoad();
    priceH.classList.add('active');
    priceLow.classList.remove('active');
    newOrder.classList.remove('active');
    popularOrder.classList.remove('active');
    X = 0;
    CoinCategoriesLabel()    
})
// 価格が低い順に並び変える
priceLow.addEventListener('click',function(){
    resetList();
    const lowPrice = newnewITEMS.sort(function(x,y){
    return x.priceValue - y.priceValue;    
    })
    newnewITEMS = [];
    newnewITEMS = lowPrice.concat();
    CoinItemLoad();
    priceLow.classList.add('active');
    priceH.classList.remove('active');
    newOrder.classList.remove('active');
    popularOrder.classList.remove('active');
    X = 0;
    CoinCategoriesLabel();
})
// 新着順に並び替える
newOrder.addEventListener('click',function(){
    resetList();
    const newOrders = newnewITEMS.sort(function(x,y){
    return (new Date(y.date)) - (new Date(x.date));
    })
    newnewITEMS = [];
    newnewITEMS = newOrders.concat();
    CoinItemLoad();
    newOrder.classList.add('active');
    priceLow.classList.remove('active');
    priceH.classList.remove('active');
    popularOrder.classList.remove('active');
    X = 0;
    CoinCategoriesLabel();
})
// 人気商品順に並び替える
popularOrder.addEventListener('click',function(){
    resetList();
    const popularOrders = newnewITEMS.sort(function(x,y){
    return y.soldItem - x.soldItem;    
    })
    newnewITEMS = [];
    newnewITEMS = popularOrders.concat();
    CoinItemLoad();
    popularOrder.classList.add('active');
    newOrder.classList.remove('active');
    priceLow.classList.remove('active');
    priceH.classList.remove('active');
    X = 0;
    CoinCategoriesLabel();
})

/* -----------------------------------------
ITEM　コインアクセサリーページ
------------------------------------------ */
const coinRingBtn = document.querySelector('.js-coinRing-btn');
const silverCoinBtn = document.querySelector('.js-silverCoin-btn');
const necklaceBtn = document.querySelector('.js-necklace-btn');
const bangleBtn = document.querySelector('.js-bangle-btn');
const earringsBtn = document.querySelector('.js-earrings-btn');
let newnewITEMS = newOrders.concat();

// 配列を読み取ってHTMLを記述する関数
function CoinItemLoad(){
  if(newnewITEMS.length < 12 ){
    for(i = 0 ; i < newnewITEMS.length ; i++){
      targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ newnewITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + newnewITEMS[i].title + '</p><p class="cost">¥' + newnewITEMS[i].price + '(税込)</p></div><p class="item-categories">' + newnewITEMS[i].kind + '</p></a></div>'
        )
    }
  }
  else{
    for(i = 0 ; i < 12 ; i++){
      targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ newnewITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + newnewITEMS[i].title + '</p><p class="cost">¥' + newnewITEMS[i].price + '(税込)</p></div><p class="item-categories">' + newnewITEMS[i].kind + '</p></a></div>'
        )
    }
  }  
};
// ラベルにカラーを追加する関数
function CoinCategoriesLabel(){
  const categories = document.getElementsByClassName('item-categories');    
  for(i=0;i<categories.length;i++){
    
    if(newnewITEMS[i].kind == 'ネックレス'){        
      categories[i].classList.add('ITEM-bk-pink');
    }
    if(newnewITEMS[i].kind == 'シルバーコインリング'){
      categories[i].classList.add('ITEM-bk-gray');
    }
    if(newnewITEMS[i].kind == 'バングル・ブレスレット'){
      categories[i].classList.add('ITEM-bk-blue');
    }
    if(newnewITEMS[i].kind == 'ピアス・イヤリング'){
      categories[i].classList.add('ITEM-bk-purple');
    }
    if(newnewITEMS[i].kind == 'コインリング'){        
      categories[i].classList.add('ITEM-bk-orenge');
    }
  }
}
// 絞り込みを行う際に配列数が１２未満の時ロードボタンを消す
function loadBtnRemove(){
  if(newnewITEMS.length<11){
    loadBtn1.classList.add('active');
  }else{
    loadBtn1.classList.remove('active');
  }
}
// load ボタンを押したときの関数
const loadBtn1 = document.querySelector('#js-loadBtn1');
let X = 0;
loadBtn1.addEventListener('click',function(){
    X = X+1    
    for(i = X*12 ; i < (X+1)*12 ; i++){
      if(i >= newnewITEMS.length){
        loadBtn1.classList.add('active');        
      }
      else{
      targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ newnewITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + newnewITEMS[i].title + '</p><p class="cost">¥' + newnewITEMS[i].price + '(税込)</p></div><p class="item-categories">' + newnewITEMS[i].kind + '</p></a></div>'
      )}      
    }    
    CoinCategoriesLabel();
});
// コインリングのみの絞り込み
coinRingBtn.addEventListener('click',function(){
  resetList(); 
  newnewITEMS = [];
  newnewITEMS = newITEMS.concat();
  for(i=0;i<newnewITEMS.length;i++){
    if(newnewITEMS[i].kind !== 'コインリング' ){
      newnewITEMS.splice(i,1);
      i--;    
    }
  }
  loadBtnRemove()
  coinRingBtn.classList.add('active');
  silverCoinBtn.classList.remove('active');
  necklaceBtn.classList.remove('active');
  bangleBtn.classList.remove('active');
  earringsBtn.classList.remove('active');
  CoinItemLoad();
  CoinCategoriesLabel()
  X = 0;
})
// シルバーコインリングのみの絞り込み
silverCoinBtn.addEventListener('click',function(){
  resetList(); 
  newnewITEMS = [];
  newnewITEMS = newITEMS.concat();
  for(i=0;i<newnewITEMS.length;i++){
    if(newnewITEMS[i].kind !== 'シルバーコインリング' ){
      newnewITEMS.splice(i,1);
      i--;    
    }
  }  
  loadBtnRemove()
  coinRingBtn.classList.remove('active');
  silverCoinBtn.classList.add('active');
  necklaceBtn.classList.remove('active');
  bangleBtn.classList.remove('active');
  earringsBtn.classList.remove('active');
  CoinItemLoad();
  CoinCategoriesLabel()
  X = 0;
})
// ネックレスのみの絞り込み
necklaceBtn.addEventListener('click',function(){
  resetList(); 
  newnewITEMS = [];
  newnewITEMS = newITEMS.concat();
  for(i=0;i<newnewITEMS.length;i++){
    if(newnewITEMS[i].kind !== 'ネックレス' ){
      newnewITEMS.splice(i,1);
      i--;    
    }
  }
  loadBtnRemove()
  coinRingBtn.classList.remove('active');
  silverCoinBtn.classList.remove('active');
  necklaceBtn.classList.add('active');
  bangleBtn.classList.remove('active');
  earringsBtn.classList.remove('active');
  CoinItemLoad();
  CoinCategoriesLabel()
  X = 0;
})
// バングル・ブレスレットのみの絞り込み
bangleBtn.addEventListener('click',function(){
  resetList(); 
  newnewITEMS = [];
  newnewITEMS = newITEMS.concat();
  for(i=0;i<newnewITEMS.length;i++){
    if(newnewITEMS[i].kind !== 'バングル・ブレスレット' ){
      newnewITEMS.splice(i,1);
      i--;    
    }
  }  
  loadBtnRemove()
  coinRingBtn.classList.remove('active');
  silverCoinBtn.classList.remove('active');
  necklaceBtn.classList.remove('active');
  bangleBtn.classList.add('active');
  earringsBtn.classList.remove('active');
  CoinItemLoad();
  CoinCategoriesLabel()
  X = 0;
})
// ピアス・イヤリングのみの絞り込み
earringsBtn.addEventListener('click',function(){
  resetList(); 
  newnewITEMS = [];
  newnewITEMS = newITEMS.concat();
  for(i=0;i<newnewITEMS.length;i++){
    if(newnewITEMS[i].kind !== 'ピアス・イヤリング' ){
      newnewITEMS.splice(i,1);
      i--;    
    }
  }
  loadBtnRemove()
  coinRingBtn.classList.remove('active');
  silverCoinBtn.classList.remove('active');
  necklaceBtn.classList.remove('active');
  bangleBtn.classList.remove('active');
  earringsBtn.classList.add('active');
  CoinItemLoad();
  CoinCategoriesLabel()
  X = 0;
})

