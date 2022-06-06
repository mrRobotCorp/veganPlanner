window.onload = function(){

    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage', '9rdPage' ],
        navigation: true,
        showActiveTooltip: true,
        menu: '#menu'
    });
    
    document.getElementById("easyVegan").innerText = "쉬운 비건, 쉬운 실천!";
    
    document.querySelector(".keyword1").innerText = "생기있는";
    document.querySelector(".keyword2").innerText = "친근한";
    document.querySelector(".keyword3").innerText = "부드러운";

    document.querySelector(".testTxt").innerText = "진단테스트로 나의 비건 성향에 대해 알아보자";
    document.querySelector(".communityTxt").innerText = "모두와 서로 도우며 비건 생활을 더욱 윤택하게 만들어보자!";
    
    // -------------------- section9 cursor ---------------------------
    // const cursor = document.querySelector(".cursor");
    // const circle = cursor.getBoundingClientRect();

    // function follow(e){
    //     gsap.to(cursor, {duration: .3, left: e.pageX - circle.width, top: e.pageY - circle.height});
    // }

    // document.addEventListener("mousemove", follow);

    // ---------------------- menu trigger -----------------------------
    // var trigerMenu = document.getElementById("menu");
    // var gnbMenu = document.getElementById("menu");
    
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
}


