// 학원 이미지 슬라이드

let curPos= 0;
let position = 0;
const IMAGE_WIDTH = 550;

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".images")


function prev(){
    if(curPos > 0){
    nextBtn.removeAttribute("disabled")
    position += IMAGE_WIDTH

    images.style.transform = `translateX(${position}px)`
    curPos -= 1;
    }
    if(curPos == 0){
        prevBtn.setAttribute("disabled", 'true')
    }
 }
function next(){
    if(curPos < 3){
        prevBtn.removeAttribute("disabled")
        position -= IMAGE_WIDTH

        images.style.transform = `translateX(${position}px)`
        curPos += 1;
    }
    if(curPos == 3){
        nextBtn.setAttribute("disabled", 'true')
    }
}

function init(){

    prevBtn.setAttribute("disabled", 'true')
    prevBtn.addEventListener("click", prev)
    nextBtn.addEventListener("click", next)
}

init();



// 강사 리스트 슬라이드
let slideItems = document.querySelectorAll(".t-image");
const maxSlide = slideItems.length-1;

let TcurPos = 0;
let Tposition = 0;
const TIMAGE_WIDTH = slideItems[0].offsetWidth + 15;
const TIMAGE_COUNT = slideItems.length;

const TprevBtn = document.querySelector(".t-prev");
const TnextBtn = document.querySelector(".t-next");
const Timages = document.querySelector(".t-images");

function Tprev() {
  if (TcurPos > 0) {
    TnextBtn.removeAttribute("disabled");
    Tposition += TIMAGE_WIDTH;
    Timages.style.transform = `translateX(${Tposition}px)`;
    TcurPos -= 1;
  }
  if (TcurPos === 0) {
    TprevBtn.setAttribute("disabled", "true");
  }
}

function Tnext() {
  if (TcurPos < TIMAGE_COUNT - Math.ceil(Timages.offsetWidth / TIMAGE_WIDTH)) {
    TprevBtn.removeAttribute("disabled");
    Tposition -= TIMAGE_WIDTH;
    Timages.style.transform = `translateX(${Tposition}px)`;
    TcurPos += 1;
  }
  if (TcurPos === TIMAGE_COUNT - Math.ceil(Timages.offsetWidth / TIMAGE_WIDTH)) {
    TnextBtn.setAttribute("disabled", "true");
  }
}

function Tinit() {
  TcurPos = 0;
  Tposition = 0;
  TprevBtn.setAttribute("disabled", "true");
  TprevBtn.addEventListener("click", Tprev);
  TnextBtn.addEventListener("click", Tnext);
}

Tinit();



// 팝업 여닫기
function Popup1__show() {
  $('.teacher-popup').css('display', 'block');
  $('.academy-mid').css('z-index', '-1');
}
$('.t-image').click(Popup1__show);




$(document).mouseup(function (e){

    var container = $('.teacher-popup');

    if( container.has(e.target).length === 0){

      container.css('display','none');

    }
    $('.academy-mid').css('z-index', '0');
  });