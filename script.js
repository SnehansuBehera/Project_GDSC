
// var crsr = document.querySelector("#cursor")
// var crsr_b = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x + "px"
//     crsr.style.top = dets.y + "px"
//     crsr_b.style.left = dets.x - 50 + "px"
//     crsr_b.style.top = dets.y - 50 + "px"

// })


gsap.to("#nav", {
    backgroundColor: "rgba(255, 255, 255, 0.327)",
    height: "90px",
    duration: .25,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,

    }
})
gsap.to(".nav", {
    height: "50px",
    width: "6vw",
    border: "solid 1px white",
    display: "none",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -70%",
        end: "top -100%",
        scrub: 0,

    }

})
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
});

function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("items").classList.toggle("change");
}