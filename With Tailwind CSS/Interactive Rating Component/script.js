var btnRatings = [
    document.getElementById("btn-rating-1"),
    document.getElementById("btn-rating-2"),
    document.getElementById("btn-rating-3"),
    document.getElementById("btn-rating-4"),
    document.getElementById("btn-rating-5")
];

var submitRatingBtn = document.getElementById("submit-rating-btn");

const ratingBtnDefaultState = "rating-btn-default-state";
const ratingBtnSelectedState = "rating-btn-selected-state";
const ratingBtnTextDefaultState = "rating-btn-text-default-state";
const ratingBtnTextSelectedState = "rating-btn-text-selected-state";

function onBtnAnyRatingClicked(btn, rating)
{
    // set all buttons to their default state
    btnRatings.forEach(
        (btn, index) => {
            btn.classList.replace(ratingBtnSelectedState, ratingBtnDefaultState);
            btn.firstChild.classList.replace(ratingBtnTextSelectedState, ratingBtnTextDefaultState);
        }
    );

    // set the clicked button to its selected state
    btn.classList.replace(ratingBtnDefaultState, ratingBtnSelectedState);
    btn.firstChild.classList.replace(ratingBtnTextDefaultState, ratingBtnTextSelectedState);

    // change the rating value in the submit button so that we can
    // submit the appropriate value
    submitRatingBtn.setAttribute("value", rating);
}