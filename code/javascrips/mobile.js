const rightBtns = document.querySelectorAll('.mobile-icon__right')
const btnQuit = document.querySelector('.icon-thoat')
const menuChilds = document.querySelectorAll('.menu-child__GT')

const btnMenu = document.querySelector('.icon-menu')
const mobileTab = document.querySelector('.mobile-tab')
const layout = document.querySelector('.layout')
const iconClose = document.querySelector('.icon-dong')
rightBtns.forEach((btn,index) => {
  const menuchild = menuChilds[index]
  btn.onclick = () => {
    
    
      menuchild.style.display = 'block'
      document.querySelector('.meny-tab__list').style.display = 'none'
      btnQuit.style.display = 'block' 

    
      btnQuit.onclick = () => {
          menuchild.style.display = 'none'
          document.querySelector('.meny-tab__list').style.display = 'block'
          btnQuit.style.display = 'none' 
      }
  }
})
const iconSearch = document.querySelector('.icon-search')
iconSearch.onclick = () => {
  document.querySelector('.input-gwap').style.display = 'flex'
  iconSearch.style.display = 'none'
}
btnMenu.addEventListener('click',(e)=>{
  mobileTab.classList.toggle('active');
  layout.style.display = 'block';
})
iconClose.addEventListener('click',(e)=>{
mobileTab.classList.toggle('active');
layout.style.display = 'none';
})

