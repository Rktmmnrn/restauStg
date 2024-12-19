document.addEventListener('DOMContentLoaded', () => {
  const rightSect = document.querySelector('.hero-right');
  const sectRight = document.querySelector('.menu-right');

  sectRight.addEventListener('click', () => {
    console.log('cliccckk');
    const menu1 = document.querySelector('.nav-menu-1');

    if (menu1.style.display = 'none') {
      menu1.style.display = 'flex';
      menu1.style.transform = 'translateX(0)';
      menu1.style.transform = 'translateY(100%)';
    } else {
      menu1.style.display = 'none';
    }
  })
})