var h = window.innerHeight;

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        // make nav sticky
        // document.getElementsByTagName('nav')[0].style.top = "0";
        // document.getElementsByTagName('nav')[0].style.position = "sticky";
        document.getElementsByTagName('nav')[0].style.borderBottom = "2px solid #000621";
        // document.getElementsByTagName('nav')[0].classList.add("sticky");
        // document.getElementsByTagName('nav')[0].style.transform = "translateY(-60px)";



    } else {
        // make nav unsticky
        // document.getElementsByTagName('nav')[0].style.position = "unset";
        document.getElementsByTagName('nav')[0].style.borderBottom = "2px solid transparent";
        // document.getElementsByTagName('nav')[0].classList.remove("sticky");
    }
}


function clickSingleA(a) {
    items = document.querySelectorAll('.single.active');

    if (items.length) {
        items[0].className = 'single';
    }

    a.className = 'single active';
    // close nav

    if (document.body.offsetWidth <= 768) {
        menuOpen();
    }
}


const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("links");
const menuLineLeft = document.getElementById("menu-line-left");
const menuLineRight = document.getElementById("menu-line-right");

function menuOpen() {
    if (menuBtn.classList.contains('closed')) {
        menuLineLeft.style.animation = 'menu-line-left-open 0.5s ease forwards';
        menuLineRight.style.animation = 'menu-line-right-open 0.5s ease forwards';
        menuLinks.style.animation = 'menu-links-open 0.5s ease forwards';
        menuBtn.classList.remove("closed");
        menuBtn.classList.add("open");
    } else {
        menuLineLeft.style.animation = 'menu-line-left-close 0.5s ease forwards';
        menuLineRight.style.animation = 'menu-line-right-close 0.5s ease forwards';
        menuLinks.style.animation = 'menu-links-close 0.5s ease forwards';
        menuBtn.classList.remove("open");
        menuBtn.classList.add("closed");
    }
}