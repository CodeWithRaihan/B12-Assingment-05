// heart btn functionality 
const heartButtons = document.getElementsByClassName("heart_button");
 for(let btn of heartButtons){
     btn.addEventListener('click',function (){
     const heartCount = document.getElementById("heart-count");
     const heartCountNumber = parseInt( heartCount.innerText) ;
     const totalHeartCount = heartCountNumber + 1;
     heartCount.innerText = totalHeartCount;
     })
 }
 
//  call btn functionality 
const callButtons = document.getElementsByClassName("call-button");
for (let btn of callButtons){
      btn.addEventListener('click',function(){
       const coinCount = document.getElementById("coin-count");
       const coinCountNumber = parseInt (coinCount.innerText);
       const totalCoinCount = coinCountNumber - 20 ;
       if(totalCoinCount < 0 ){
          alert("you don't have enough coin for call.you need 20 coins")
          return;
       }
       else{
        const card = btn.closest(".card_box");
        const subTitle = card.querySelector(".sub-title");
        const subTitle_2=card.querySelector(".sub-title-number");
         alert(subTitle.innerText+" - "+subTitle_2.innerText);
       }
       coinCount.innerText = totalCoinCount ;
      })
}
