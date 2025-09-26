

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

// copy btn functionality 
const copyButtons = document.getElementsByClassName("copy-btn");

for (let callBtn of copyButtons) {
    callBtn.addEventListener('click', function () {

        const copyCount = document.getElementById("copy-count");
        const copyCountNumber = parseInt(copyCount.innerText);
        const totalCopyCount = copyCountNumber + 1;
        copyCount.innerText = totalCopyCount;

        const card = callBtn.closest(".card_box");
        const copyServiceText = card.querySelector(".service-title");
        const copyNumber = card.querySelector(".sub-title-number");
        
        const copyNumberText = `${copyServiceText.innerText} - ${copyNumber.innerText}`;

        
        navigator.clipboard.writeText(copyNumberText).then(() => {
            alert(`Calling "${copyNumberText}" copied!`);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });
}


// clear btn functionality

const clearBtn = document.getElementById("clear-btn").addEventListener('click',function(){
     const removeElement=document.getElementById("call-history-container");
     removeElement.innerHTML="";

});
