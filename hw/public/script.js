// 環境區動態
window.addEventListener('scroll', checkImage);

// //選取所有的image元素：
const allImage = document.getElementsByClassName('feature-view');

function checkImage() {
    for (let i = 0; i < allImage.length; i++) {
        const imageElement = allImage[i];

    //將每個image元素都加上判斷式：
    const imgElement = imageElement.querySelector('img');

        //條件一：
        const currentPosition = window.scrollY + window.innerHeight;
        const imageShowPosition = imageElement.offsetTop + imageElement.clientHeight / 4;
        const imageAppear = currentPosition > imageShowPosition;

        //條件二：

        const imageBottom = imageElement.offsetTop + imageElement.clientHeight * 3 / 4;
        const imageOnWindow = window.scrollY < imageBottom;

        if (imageOnWindow && imageAppear) {
            imageElement.classList.add('active');
        } else {
            imageElement.classList.remove('active');
        }

        if (imageOnWindow && imageAppear) {
        //符合出現條件，加上active此class
        imgElement.classList.add('img-active'); 
        } else {
        //不符合出現條件，移除active此class
        imgElement.classList.remove('img-active');
        }
    }
}

// 據點區動態
"use strict"

// Adding scroll event listener
document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');
let locHeader = document.querySelector('#location header.title');
let hori = document.querySelector('#location .horizontal');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

//Scroll function 
function horizontalScroll(){

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        let leftAmount = (scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
        
        hori.scrollLeft =leftAmount;
        let a = 0.75 + leftAmount * 0.25 / scrollWidth;
        // locHeader.style.transform = `scale(${a})`;
    
    }
}
// 方案區動態
/*document.addEventListener('DOMContentLoaded', function () {
    const planItems = document.querySelectorAll('.plan-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
                
            }
        });
    }, {
    });

    planItems.forEach(item => {
        observer.observe(item);
    });
});*/
// 頁首carousel
// 來源=>https://codepen.io/emilio-dominguez/pen/NWNmvbO
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots button');
  
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
  
    // Function to change the active slide
    function changeSlide(newIndex) {
      // Hide current slide and deactivate the dot
      slides[currentSlideIndex].classList.remove('slide-active');
      dots[currentSlideIndex].classList.remove('slide-active');
  
      // Update the index
      currentSlideIndex = newIndex;
  
      // Show the new slide and activate the dot
      slides[currentSlideIndex].classList.add('slide-active');
      dots[currentSlideIndex].classList.add('slide-active');
    }
  
    // Event listeners for navigation dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function () {
        changeSlide(index);
      });
    });
  
    // Optional: Automatic slide change (Autoplay)
    setInterval(function () {
      const nextIndex = (currentSlideIndex === totalSlides - 1) ? 0 : currentSlideIndex + 1;
      changeSlide(nextIndex);
    }, 5000); // Change slide every 5 seconds
  });
  
//   設備動態
$(".content").hover(function () {
    $(this).find(".step-dec").toggleClass("animated swing");
 });
$(".faciL-card").hover(function () {
    $(this).find("figure").toggleClass("animated swing");
 });
 $('.smoove').smoove({
    // offset整數預設為像素，不加引號，%要加。
    offset: '40%'
});


//--置頂按鈕
    //捲動至top0的位置
    $("#gotop").click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });
    //指定捲軸位置淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('fast', 1);
            $('#BOT').stop().fadeTo('fast', 1);
        } 
        else {
            $('#gotop').stop().fadeOut('fast');
            $('#BOT').stop().fadeOut('fast');
        }
    });
