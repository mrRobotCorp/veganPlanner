// menu trigger 
window.onload = function(){
    // var trigerMenu = document.getElementById("menu");
    // var gnbMenu = document.getElementById("menu");
    const cursor = document.querySelector(".cursor");
    const icon = document.querySelectorAll(".icon");

    // trigerMenu.onclick = function(){
    //     gnbMenu.style.transition = "all .5s"
    //     this.classList.toggle("active");
    //     gnbMenu.classList.toggle("active");
    // };
    // window.onresize = function(){
    //     console.log("onresize");
    //     console.log(window.innerWidth);
    //     gnbMenu.style.transition = "none"

    //     if(window.innerWidth > 768){
    //         gnbMenu.classList.remove("active");
    //     }
    // }

    function Trailer(e) {
        gsap.to(cursor, { duration: 0.2, left: e.pageX, top: e.pageY });
    }

    document.addEventListener("mousemove", Trailer);


    icon.forEach(function (iconH) {
        iconH.addEventListener("mouseover", function () {
            cursor.classList.add("icon_hover");
        });
        iconH.addEventListener("mouseleave", function () {
            cursor.classList.remove("icon_hover");
        });
    });
}


var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage', '9rdPage' ],
    navigation: true,
    // navigationTooltips: ['Page 1', 'Page 2', 'Any text!'],
    showActiveTooltip: true,
    menu: '#menu'
});

document.getElementById("easyVegan").innerText = "쉬운 비건, 쉬운 실천!";


// ------------------ scrollTop -------------------------

// document.getElementById("scrollTop").onclick = function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// }
