
import context from "../scripts/context.json" with {"type":'json'};



let bgRun="play";

let bgList = document.querySelector(".bg_list");
let ulList = document.getElementsByClassName("icon")[0].children[0];


// main page bg animation 

function pageOneAnime() {
    
    let bgList = document.querySelector(".bg_list");
    
        let bgSlider =setInterval(()=> { 
            if (bgRun=="play") {

            slideImage(bgList);
            listAnime();

            }
        }
        ,5000)
    }
    


   
// main page bg slider funtion

function slideImage() {
    let bgItem = document.querySelectorAll(".bg_list .bg_item");
    let preElem=  bgItem[0].cloneNode(true);
    bgList.appendChild(preElem);
    bgList.removeChild(bgList.firstElementChild)
   
}


// 2nd page options animations & bg 

function listAnime() {

    let listNodeBg =Object.values(bgList.children);
        let bgCurrent= document.getElementsByClassName("main_bg")[0];
    


    let listNodeUl=Object.values(ulList.children);
    
    let mainBgIndex = listNodeBg.indexOf(bgCurrent)
    
    let liItem = listNodeUl[mainBgIndex];
    
    for (const element of listNodeUl) {
        element.classList.remove("active")
    }

    liItem.classList.add("active")
        
        
       
}


// adds 2nd page options text & comment

function listIntegator() {
    
    let bgCount = bgList.children;
    
    
    for (let i = 0; i < bgCount.length; i++) {
        let listItem = document.createElement("li");
        let buttonNode = document.createElement("button")
    
          listItem.appendChild(buttonNode);
          ulList.appendChild(listItem);
 
        
    }
    
    
    
}

// click event of 2nd page button 

function buttonClick() {
    let buttonList= document.querySelectorAll(".page2_options")[0].children;

    let buttoncontext = context.page2.buttonContent;

    let paraComment = document.getElementsByClassName("page2_comment")[0].children[0];

    let bgImageList = document.getElementsByClassName("backbg")[0].children;

   
    
    for (let i = 0; i < buttonList.length; i++) {
        const element = buttonList[i];

        
        element.addEventListener("click",()=>{
            bgImageList[0].classList.remove("active")

            let value = buttoncontext[element.innerText]
            paraComment.innerText=value.text;
            
            
            
            for (let j = 0; j < buttonList.length; j++) {
                const element = buttonList[j];
                element.classList.remove("clic")

                    bgImageList[j].classList.remove("active");

            }
            
           element.classList.add("clic")
           bgImageList[i].classList.add("active")

            for (let k = 0; k < bgImageList.length; k++) {
                const element= bgImageList[k];
                
                if (element.classList.contains("active")==false) {
                    element.style.zIndex="1"
                }
            }
            
            
            

            
            
        })


  }
    
    
}

// pause button animations for main bg animation 
function mainBgStop() {
    let button = document.getElementsByClassName("main_bgStop")[0];
    let butt=true;
    button.addEventListener("click",()=>{
     
     
        
            if(butt){
                button.children[0].classList.remove("hidden")
                button.children[1].classList.add("hidden")
                bgRun=null;
                butt=false;
            }
            else{
                bgRun="play"
                butt=true;
                button.children[0].classList.add("hidden")
                button.children[1].classList.remove("hidden")
                
            }
            
        
   
       
    })
 
 
}




window.addEventListener("load",()=>{

mainBgStop()
pageOneAnime()
listIntegator()
buttonClick()
})