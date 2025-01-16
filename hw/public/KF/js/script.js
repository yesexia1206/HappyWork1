//---漢堡按鈕---
$(document).ready(function () {
    $('.hamburger').click(function () {
        // 第二階段
        $(this).toggleClass('is-active');
        // 第三階段
        $('.navigation').toggleClass('show');
    });
});



// ----------------------滑鼠-----------------------
    class GlitchEffect {
        constructor() {
            this.root = document.body;
            this.cursor = document.querySelector(".curzr");

            (this.distanceX = 0),
                (this.distanceY = 0),
                (this.pointerX = 0),
                (this.pointerY = 0),
                (this.previousPointerX = 0);
            this.previousPointerY = 0;
            this.cursorSize = 25;
            this.glitchColorB = "#00feff";
            this.glitchColorR = "#ff4f71";

            this.cursorStyle = {
                boxSizing: "border-box",
                position: "fixed",
                top: `${this.cursorSize / -2}px`,
                left: `${this.cursorSize / -2}px`,
                zIndex: "2147483647",
                width: `${this.cursorSize}px`,
                height: `${this.cursorSize}px`,
                backgroundColor: "#222",
                borderRadius: "50%",
                boxShadow: `0 0 0 ${this.glitchColorB}, 0 0 0 ${this.glitchColorR}`,
                transition: "100ms, transform 100ms",
                userSelect: "none",
                pointerEvents: "none"
            };

            if (CSS.supports("backdrop-filter", "invert(1)")) {
                this.cursorStyle.backdropFilter = "invert(1)";
                this.cursorStyle.backgroundColor = "#1A00FF";
            } else {
                this.cursorStyle.backgroundColor = "#222";
            }

            this.init(this.cursor, this.cursorStyle);
        }

        init(el, style) {
            Object.assign(el.style, style);
            this.cursor.removeAttribute("hidden");
        }

        move(event) {
            this.previousPointerX = this.pointerX;
            this.previousPointerY = this.pointerY;
            this.pointerX = event.pageX + this.root.getBoundingClientRect().x;
            this.pointerY = event.pageY + this.root.getBoundingClientRect().y;
            this.distanceX = Math.min(
                Math.max(this.previousPointerX - this.pointerX, -10),
                10
            );
            this.distanceY = Math.min(
                Math.max(this.previousPointerY - this.pointerY, -10),
                10
            );

            if (
                event.target.localName === "button" ||
                event.target.localName === "a" ||
                event.target.onclick !== null ||
                event.target.className.includes("curzr-hover")
            ) {
                this.hover();
            } else {
                this.hoverout();
            }

            this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`;
            this.cursor.style.boxShadow = `
  ${+this.distanceX}px ${+this.distanceY}px 0 ${this.glitchColorB}, 
  ${-this.distanceX}px ${-this.distanceY}px 0 ${this.glitchColorR}`;
            this.stop();
        }

        hover() { }

        hoverout() { }

        click() {
            this.cursor.style.transform += ` scale(0.75)`;
            setTimeout(() => {
                this.cursor.style.transform = this.cursor.style.transform.replace(
                    ` scale(0.75)`,
                    ""
                );
            }, 35);
        }

        stop() {
            if (!this.moving) {
                this.moving = true;
                setTimeout(() => {
                    this.cursor.style.boxShadow = "";
                    this.moving = false;
                }, 50);
            }
        }

        remove() {
            this.cursor.remove();
        }
    }

    (() => {
        const cursor = new GlitchEffect();
        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            document.onmousemove = function (event) {
                cursor.move(event);
            };
            document.onclick = function () {
                cursor.click();
            };
        } else {
            cursor.remove();
        }
    })();



// 置頂按鈕
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

document.querySelector(".goTop").addEventListener("click", scrollToTop);


// 聯絡箭頭


// http://jsfiddle.net/1893foc7/4/

const circle = document.querySelector('.circle-button');
const buttonText = document.querySelector('.circle-button .circle-button__text');

const toggleCircleAnimation = () => {
    circle.classList.toggle('run-enter');
    circle.classList.toggle('run-leave');
}

const handleButtonHover = () => {
    buttonText.innerHTML = 'Play';
}

const handleButtonOut = () => {
    buttonText.innerHTML = 'The Story';
}

circle.addEventListener('mouseover', toggleCircleAnimation);
circle.addEventListener('mouseover', handleButtonHover);
circle.addEventListener('mouseout', toggleCircleAnimation);
circle.addEventListener('mouseout', handleButtonOut);
circle.addEventListener('click', () => console.log('circle click'));

const circleBackButton = document.querySelector('.circle-back-button');

const toggleCircleBackAnimation = () => {
    circleBackButton.classList.toggle('run-enter');
}

circleBackButton.addEventListener('mouseover', toggleCircleBackAnimation);
circleBackButton.addEventListener('mouseout', toggleCircleBackAnimation);
circleBackButton.addEventListener('click', () => console.log('circle click'));

const circleForwardButton = document.querySelector('.circle-forward-button');

const toggleCircleForwardAnimation = () => {
    circleForwardButton.classList.toggle('run-enter');
}

circleForwardButton.addEventListener('mouseover', toggleCircleForwardAnimation);
circleForwardButton.addEventListener('mouseout', toggleCircleForwardAnimation);

const rect = document.querySelector('.rect-button');

const toggleRectAnimation = () => {
    rect.classList.toggle('run-enter');
    rect.classList.toggle('run-leave');
}

rect.addEventListener('mouseover', toggleRectAnimation);
rect.addEventListener('mouseout', toggleRectAnimation);
rect.addEventListener('click', () => console.log('rect click'));