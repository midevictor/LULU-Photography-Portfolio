//change navstyle on scroll
//I attached an event listner to the window object that gives the scroll position of the window a class of "window scrolled" when scrolling on te vertical axis
window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle("window-scrolled", window.scrollY > 0);
});
//contact buttons
//dom selector for all the contact buttons
const textButtons = document.querySelectorAll('.contact_btn');
//a forEach loop for each contact button
textButtons.forEach(textButton => {
  let text = textButton.querySelector('p'); 
  text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 13}deg)">${character}</span>`).join()                                                                         
});
//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599:{
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1023:{
      slidesPerView: 3,
      spaceBetween: 60,
    }
  }
});
const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}
const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
nav.querySelectorAll('li a').forEach(navLink => {
  navLink.addEventListener('click', closeNav);
})