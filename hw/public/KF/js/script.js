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
// // 置頂按鈕
// const scrollToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// };

// document.querySelector(".goTop").addEventListener("click", scrollToTop);


// 聯絡箭頭


// http://jsfiddle.net/1893foc7/4/

// const circle = document.querySelector('.circle-button');
// const buttonText = document.querySelector('.circle-button .circle-button__text');

// const toggleCircleAnimation = () => {
//     circle.classList.toggle('run-enter');
//     circle.classList.toggle('run-leave');
// }

// const handleButtonHover = () => {
//     buttonText.innerHTML = 'Play';
// }

// const handleButtonOut = () => {
//     buttonText.innerHTML = 'The Story';
// }

// circle.addEventListener('mouseover', toggleCircleAnimation);
// circle.addEventListener('mouseover', handleButtonHover);
// circle.addEventListener('mouseout', toggleCircleAnimation);
// circle.addEventListener('mouseout', handleButtonOut);
// circle.addEventListener('click', () => console.log('circle click'));

const circleBackButton = document.querySelector('.circle-back-button');//

const toggleCircleBackAnimation = () => {
    circleBackButton.classList.toggle('run-enter');//
}

// circleBackButton.addEventListener('mouseover', toggleCircleBackAnimation);
// circleBackButton.addEventListener('mouseout', toggleCircleBackAnimation);
// circleBackButton.addEventListener('click', () => console.log('circle click'));

// const circleForwardButton = document.querySelector('.circle-forward-button');

const toggleCircleForwardAnimation = () => {
    circleForwardButton.classList.toggle('run-enter');//
}

circleForwardButton.addEventListener('mouseover', toggleCircleForwardAnimation);//
circleForwardButton.addEventListener('mouseout', toggleCircleForwardAnimation);//

// const rect = document.querySelector('.rect-button');

// const toggleRectAnimation = () => {
//     rect.classList.toggle('run-enter');
//     rect.classList.toggle('run-leave');
// }

// rect.addEventListener('mouseover', toggleRectAnimation);
// rect.addEventListener('mouseout', toggleRectAnimation);
// rect.addEventListener('click', () => console.log('rect click'));
