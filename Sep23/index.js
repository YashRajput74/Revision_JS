const rating = {
    id: 253,
    name: "Service Rating",
    label: "Review",
    maxStars: 5,
    isHalf: false,
    currentRating: 4,
};

function attachEventsToStars(divToRender, maxStars) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
        star.addEventListener("click", (event) => {
            if (event.target.dataset.num == rating.currentRating) {
                rating.currentRating = 0;
                createStarRating(divToRender, maxStars);
            }
            else {
                rating.currentRating = event.target.dataset.num;
                createStarRating(divToRender, maxStars);
            }
        })
    })
}

function createStarRating(divToRender, maxStars) {
    rating.maxStars = maxStars;
    let tpl = ``;
    for (let i = 0; i < rating.maxStars; i++) {
        if (i < rating.currentRating) {
            tpl += `<div class="star selected" data-num="${i + 1}">★</div>`
        }
        else {
            tpl += `<div class="star" data-num="${i + 1}">★</div>`
        }
    }
    divToRender.innerHTML = tpl;
    attachEventsToStars(divToRender, maxStars);
}

createStarRating(document.getElementById("rating"), 5);