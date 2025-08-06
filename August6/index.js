function addEvents() {
    let ratingDiv = document.querySelector("#rating");
    ratingDiv.addEventListener("click",(event)=>{
        if(event.target.closest(".eachStar")){
            let numberStars=event.target.dataset.num;
            document.querySelectorAll(".eachStar").forEach((star)=>{
                    star.style.backgroundColor="white";
            })
            document.querySelectorAll(".eachStar").forEach((star,index)=>{
                if(index<numberStars){
                    star.style.backgroundColor="yellow";
                }
            })
        }
    })
}

addEvents();