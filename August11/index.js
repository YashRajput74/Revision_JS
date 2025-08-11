function addEvents() {
    const accordion = document.querySelector(".accordion");
    const accordionContent = document.querySelectorAll(".accordion-content");
    accordion.addEventListener("click", (event) => {
        let selectedAcc = 0;
        if (event.target.className.includes("accordion-header")) {
            if (selectedAcc == event.target.dataset.num) {
                selectedAcc = 0;
            }
            else {
                selectedAcc = event.target.dataset.num;
            }
        }
        accordionContent.forEach((acc, index) => {
            if (selectedAcc == index + 1) {
                if(acc.classList.contains("show")){
                    acc.classList.remove("show");
                }
                else{
                    acc.classList.add("show");
                }
            }
            else {
                acc.classList.remove("show");
            }
        })
    })
}
addEvents();