

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
        const serviceTitle= card.querySelector(".service-title")
        const subTitle = card.querySelector(".sub-title");
        const subTitleNumber=card.querySelector(".sub-title-number");
         alert("📞calling"+subTitle.innerText+" "+subTitleNumber.innerText);

        const realDateTime=new Date ().toLocaleTimeString();
        const callHistoryContainer= document.getElementById("call-history-container");
        const div=document.createElement("div");
        div.innerHTML=`
                      <div class="flex  justify-between items-center p-5">
                           <div>
                         <h1 class="font-bold">${serviceTitle.innerText}</h1>
                         <h5>${subTitleNumber.innerText}</h5>
                     </div>
                     <div>
                         <p>${realDateTime}</p>
                     </div>
                     </div>
                      </div>
                     
                     `;
                     callHistoryContainer.appendChild(div); 
       }
       coinCount.innerText = totalCoinCount ;
      })
        
}


// clear btn functionality

const clearBtn = document.getElementById("clear-btn").addEventListener('click',function(){
     console.log("clear-btn worked");
     const removeElement=document.getElementById("call-history-container");
     removeElement.innerHTML="";
    
});
