// ----並び替えリストの設定-------
const selectBtns = document.querySelectorAll('.js-select-btn');
const itemList2 = document.querySelector('.js-list2');
const itemList3 = document.querySelector('.js-list3');
console.log(selectBtns);

selectBtns.forEach((element,index) => {
    element.addEventListener('click',function(){
        
        if(index === 0){
            itemList2.classList.toggle('active')
            // itemList1.classList.remove('active')
            itemList3.classList.remove('active')
        }
        if(index === 1){
            itemList3.classList.toggle('active')
            // itemList1.classList.remove('active')
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

// ラベルにカラーを追加する関数
function categoriesLabel(){
  const categories = document.getElementsByClassName('item-categories');    
  for(i=0;i<categories.length;i++){
    
    if(ITEMS[i].kind == 'ネックレス'){        
      categories[i].classList.add('ITEM-bk-pink');
    }
    if(ITEMS[i].kind == 'シルバーコインリング'){
      categories[i].classList.add('ITEM-bk-gray');
    }
    if(ITEMS[i].kind == 'バングル・ブレスレット'){
      categories[i].classList.add('ITEM-bk-blue');
    }
    if(ITEMS[i].kind == 'ピアス・イヤリング'){
      categories[i].classList.add('ITEM-bk-purple');
    }
    if(ITEMS[i].kind == 'コインリング'){        
      categories[i].classList.add('ITEM-bk-orenge');
    }
  }
}
// アイテム一覧をリセットする関数
function resetList(){
  const items = document.querySelectorAll('.item');
  for(i = 0; i < items.length; i++){
      targetItem.removeChild(items[i]);
  }
}
// 配列数が１２未満の時ロードボタンを消す戻す
function loadBtnRemove(){
  if(ITEMS.length<11){
    loadBtn.classList.add('active');
  }else{
    loadBtn.classList.remove('active');
  }
}
// load ボタンを押したときの関数
let X = 0;
loadBtn.addEventListener('click',function(){
    X = X+1
    for(i = X*12 ; i < (X+1)*12 ; i++){
      if(i >= ITEMS.length){
        loadBtn.classList.add('active');
        console.log(ITEMS.length)
      }
      else{
      targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ ITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + ITEMS[i].title + '</p><p class="cost">¥' + ITEMS[i].price + '(税込)</p></div><p class="item-categories">' + ITEMS[i].kind + '</p></a></div>'
      )}
      
    }
    categoriesLabel();
});
// 価格が高い順に並び変える
priceH.addEventListener('click',function(){
    resetList();
    ITEMS.sort(function(x,y){
    return y.priceValue - x.priceValue;    
    })
    
    itemLoad();
    priceH.classList.add('active');
    priceLow.classList.remove('active');
    newOrder.classList.remove('active');
    popularOrder.classList.remove('active');
    X = 0;
    loadBtnRemove()
    categoriesLabel();    
})
// 価格が低い順に並び変える
priceLow.addEventListener('click',function(){
    resetList();
    ITEMS.sort(function(x,y){
    return x.priceValue - y.priceValue;    
    })
    
    itemLoad();
    priceLow.classList.add('active');
    priceH.classList.remove('active');
    newOrder.classList.remove('active');
    popularOrder.classList.remove('active');
    X = 0;
    loadBtnRemove()
    categoriesLabel();
})
// 新着順に並び替える
newOrder.addEventListener('click',function(){
    resetList();
    ITEMS.sort(function(x,y){
    return (new Date(y.date)) - (new Date(x.date));
    })
    
    itemLoad();
    newOrder.classList.add('active');
    priceLow.classList.remove('active');
    priceH.classList.remove('active');
    popularOrder.classList.remove('active');
    X = 0;
    loadBtnRemove()
    categoriesLabel();
})
// 人気商品順に並び替える
popularOrder.addEventListener('click',function(){
    resetList();
    ITEMS.sort(function(x,y){
    return y.soldItem - x.soldItem;    
    })
    
    itemLoad();
    popularOrder.classList.add('active');
    newOrder.classList.remove('active');
    priceLow.classList.remove('active');
    priceH.classList.remove('active');
    X = 0;
    loadBtnRemove()
    categoriesLabel();
})

// 画面読み込み時に動く関数
window.onload = function(){
  for(i=0;i<ITEMS.length;i++){
    if(ITEMS[i].kind !== 'シルバーコインリング' ){
      ITEMS.splice(i,1);
      i--;    
    }
  }
  itemLoad();
  categoriesLabel();
};
// 配列を読み取ってHTMLを記述する関数
function itemLoad(){
  if(ITEMS.length < 12 ){
    for(i = 0 ; i < ITEMS.length ; i++){
      targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ ITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + ITEMS[i].title + '</p><p class="cost">¥' + ITEMS[i].price + '(税込)</p></div><p class="item-categories">' + ITEMS[i].kind + '</p></a></div>'
        )
    }
  }
  else{
    for(i = 0 ; i < 12 ; i++){
      targetItem.insertAdjacentHTML('beforeend','<div class="item"><a href=""><img src="'+ ITEMS[i].image + '" alt=""><div class="text-area"><p class="title">' + ITEMS[i].title + '</p><p class="cost">¥' + ITEMS[i].price + '(税込)</p></div><p class="item-categories">' + ITEMS[i].kind + '</p></a></div>'
        )
    }
  }
};
