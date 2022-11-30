
    
    const button=document.querySelector(".button");
const circle =document.querySelector(".circle");
 let buttonOn=false;

 button.addEventListener("click",()=>{
    if(!buttonOn){
        buttonOn=true;
        circle.style.animation="moveCircleRight 1s forwards";
        button.style.animation="backgroundYellow 1s forwards";
        
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files:"appOn.js"
        });

    }
    else{
        buttonOn=false;
        circle.style.animation="moveCircleLeft 1s forwards";
        button.style.animation="backgroundBlue 1s forwards";
        
        chrome.scripting.executeScript({
            target: {tabId: my_tabid},
            files:"appOff.js"
        })
    }
 })
 chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    console.log(tabs[0].id);
    my_tabid=tabs[0].id;
}); 