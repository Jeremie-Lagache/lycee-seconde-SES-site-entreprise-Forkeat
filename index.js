let btn1 = document.querySelector('.product-1 .btn1');
let btn2 = document.querySelector('.product-2 .btn2');
let fourchette = document.querySelector('#products .product-1 img[src="fourchette.png"]');
let cuillere = document.querySelector('#products .product-2 img[src="cuillere.png"]');
let products = document.getElementById('products');
let product1 = document.querySelector('#products .product-1');
let product2 = document.querySelector('#products .product-2');
let clickEventbtn1 = document.querySelector('.click-event-btn1');
let clickEventbtn2 = document.querySelector('.click-event-btn2');
let defaultHtmlProduct1 = document.querySelector('.default-html-p1');
let defaultHtmlProduct2 = document.querySelector('.default-html-p2');


btn1.addEventListener('click', () => {
    if (product2.innerHTML === clickEventbtn1.innerHTML) {
        product2.innerHTML = defaultHtmlProduct2.innerHTML;
        fourchette.style.animation = "none";
        btn1.style.transform = "rotate(0)";
        sessionStorage.clear();
        sessionStorage.setItem('condition', 'false');
        location.reload();
    } else {
        product2.innerHTML = clickEventbtn1.innerHTML;
        product2.style.background = "rgb(36, 35, 35)"
        fourchette.style.animation = "rotateanim 1.5s linear";
        products.style.columnGap = "0";
        btn1.style.transform = "rotate(180deg)";
    }
})

btn2.addEventListener('click', () => {
    if (product1.innerHTML === clickEventbtn2.innerHTML) {
        product1.innerHTML = defaultHtmlProduct1.innerHTML;
        cuillere.style.animation = "none";
        btn2.style.transform = "rotate(0)";
        sessionStorage.clear();
        sessionStorage.setItem('condition', 'false');
        location.reload();
    } else {
        product1.innerHTML = clickEventbtn2.innerHTML;
        product1.style.background = "rgb(36, 35, 35)"
        cuillere.style.animation = "rotateanim 1.5s linear";
        products.style.columnGap = "0";
        btn2.style.transform = "rotate(180deg)";
    }
})

// preloader

let preloader = document.getElementById('preloader');
let unchangedLetters = document.querySelector('#preloader .letters-unchanged');
let fast = document.querySelector('.fast');
let bett = document.querySelector('.bett');
let clev = document.querySelector('.clev');
let fork = document.querySelector('.fork');
let e = document.querySelector('.e');
let r = document.querySelector('.r');
let logoRemoveBg = document.querySelector('.logo-removebg');
let logoRemoveBgImg = document.querySelector('.logo-removebg img');
let topPageLogo = document.getElementById('logo');
let condition = 0;

window.addEventListener('mouseover', () => {
    if (condition === 0 && sessionStorage.getItem('condition') !== "false") {
        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
          }
          
        delay(1000).then(() => {
            fast.style.display = "block"
            fast.style.animation = "letterSize 0.5s linear";
        }
        );
        delay(2500).then(() => {
        bett.style.display = "block";
        bett.style.animation = "letterSize 0.5s linear";
        fast.style.display = "none";
        e.style.color = "red";        
        r.style.color = "red";
        }

        );
        delay(3500).then(() => {
            bett.style.display = "none"
            clev.style.display = "block";
            clev.style.animation = "letterSize 0.5s linear";
            e.style.color = "green";        
            r.style.color = "green";
        } 
        );
        delay(4500).then(() => {
            clev.style.display = "none"
            fork.style.display = "block";
            fork.style.animation = "letterSize 0.5s linear";
            e.style.color = "pink";        
            r.style.color = "pink";
        } 
        );

        delay(6000).then(() => {
            unchangedLetters.style.display = "none";
            fork.style.display = "none";
            logoRemoveBg.style.display = "block";
        });

        delay(6100).then(() => {
            logoRemoveBg.style.display = "none";
        });

        delay(6200).then(() => {
            logoRemoveBg.style.display = "block";
        });

        delay(7000).then(() => {
            logoRemoveBgImg.style.animation = "preloaderLogo 2s linear";
        });

        // end of the preloader 
        // starter animations

        delay(9000).then(() => {
            preloader.style.display = "none";
            topPageLogo.style.animation = "rotatelogo 2s linear";
        })
        
        condition = 1;
    } else {
        preloader.style.display = "none";
    }
})






