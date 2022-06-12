
window.onload = function(){

    document.querySelector(".loading").style.visibility = "hidden";

    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage', '9rdPage' ],
        navigation: true,
        showActiveTooltip: true,
        menu: '#menu'
    });

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;

    }


    // ------------------- text 삽입 -------------------
    document.getElementById("easyVegan").innerText = "쉬운 비건, 쉬운 실천!";
    
    document.querySelector(".logoInfo1").innerText = "비건플래너는 둥근 형태와 Sandoll 티비스켓 서체를 활용하여 친근감을 나타낸다. 미소 짓는 입과 이파리를 응용한 형태는 즐겁게 비건을 실천하는 이용자를 표현한다. 또한 새싹은 새로이 도전하는 사람들을 상징한다.";
    document.querySelector(".logoInfo2").innerText = "비건과 플래너를 합친 단어와 비건하는 피플(people)의 줄임말로 이중적인 의미가 담겼습니다. 이러한 의미들을 담은 ‘비플’이이라는 글자에 자라나는 이파리를 달아 목표를 달성하는  깃발처럼 보이게 제작했습니다.";
    document.querySelector(".colorInfo").innerText = "전체적으로 푸릇푸릇하고 시원안 비주얼을 컨셉으로하여 부드러운 화이트톤으로 안정감 있어 보이게했습니다.  시원한 녹색과 남색을 포인트 컬러로 사용했습니다.";

    document.querySelector(".keyword1").innerText = "생기있는";
    document.querySelector(".keyword2").innerText = "친근한";
    document.querySelector(".keyword3").innerText = "부드러운";

    document.querySelector(".fontInfo").innerText = "Noto Sans로 가독성이 높은 서체로 전체 본문에 사용하였습니다.";

    document.querySelector(".testTxt").innerText = "진단테스트로 나의 비건 성향에 대해 알아보자";
    document.querySelector(".todoTxt").innerText = "투두리스트를 통해 실생활에서 직접 비건을 실천해보자!";
    document.querySelector(".communityTxt").innerText = "모두와 서로 도우며 비건 생활을 더욱 윤택하게 만들어보자!";
    document.querySelector(".pointTxt").innerText = "모두와 서로 도우며 비건 생활을 더욱 윤택하게 만들어보자!";

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