function addEvents(){
    let accordionItems= document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item)=>{
        console.log(item);
        if(item.includes(".accordion-header")){
            console.log("hell")
        }
    })
    
}
addEvents();