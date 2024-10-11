const buttons = document.querySelectorAll(".faq-item");
const imgSrc = document.querySelectorAll(".toggle-icon");
for (let i = 0; i < 4; i++) {
    buttons[i].addEventListener("click", function() {
        toggle(i);
    });
}

const answer = document.getElementsByClassName("answer");

function toggle(index) {
    console.log(index)
    if (answer[index].style.display === "none") {
        answer[index].style.display = "block";
        imgSrc[index].src = "/assets/images/icon-minus.svg";
    } else {
        answer[index].style.display = "none";
        imgSrc[index].src = "/assets/images/icon-plus.svg";
    }
}