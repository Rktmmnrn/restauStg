document.addEventListener('DOMContentLoaded', () => {
  const rightSect = document.querySelector('.hero-right');
  const sectRight = document.querySelector('.nav-menu-2');

  sectRight.addEventListener('click', () => {
    console.log('cliccckk');
    const menu1 = document.querySelector('.nav-menu-1');

    if (menu1.classList.contains('active')) {
      console.log('navmenu1 is active');
      menu1.classList.remove('active');
      menu1.style.transform = 'translateX(100%)';
      menu1.style.transition = '200ms';
    } else {
      console.log('navmenu1 is not active');
      menu1.classList.add('active');
      menu1.style.transform = 'translateX(0%)';
      menu1.style.transition = '200ms';
    }
  })

})