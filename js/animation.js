window.onload = function () {
  setTimeout(videoShow, 3800)
  setTimeout(box2Show, 4000)
  setTimeout(box3Show, 8200)
  setTimeout(videoHide, 12200) 
  setTimeout(anfangAnimationHide, 11400)
  setTimeout(boxNachOben, 11350)
  setTimeout(homeShow, 12200)
  setTimeout(textHide, 19000)
  setTimeout(satzHomeShow2, 19000)
  setTimeout(satzHomeHide2, 28400)
  setTimeout(satzHomeShow3, 28500)
  setTimeout(satzHomeHide3, 37900)
  setTimeout(satzHomeShow4, 38000)




  
};

const videoShow = () => {
    document.querySelector('#video').className = "show";

};


const box2Show = () => {
    document.querySelector('#boxText-2').className = "show";

}


const box3Show = () => {
    document.querySelector('#boxText-3').className = "show";

}


const videoHide = () => {
    document.querySelector('#video').className = "hide";

}

const boxNachOben = () => {
    document.querySelector('#backgroundNachOben').className = "show";

}

const anfangAnimationHide = () => {
   document.querySelector('.anfangAnimation').className = "hide";

};

const homeShow = () => {
    document.querySelector('#home').className = "show";

};

const textHide = () => {
    document.querySelector('#homeText1').className = "hide";

};

const satzHomeShow2 = () => {
    document.querySelector('#homeText2').className = "show";

};

const satzHomeHide2 = () => {
    document.querySelector('#homeText2').className = "hide";


};

const satzHomeShow3 = () => {
    document.querySelector('#homeText3').className = "show";

};

const satzHomeHide3 = () => {
    document.querySelector('#homeText3').className = "hide";

};

const satzHomeShow4 = () => {
    document.querySelector('#homeText4').className = "show";

};
