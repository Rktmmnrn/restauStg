document.addEventListener('DOMContentLoaded', () => {
  let rightSect = document.querySelector('hero-right');
  let sectRight = document.getElementById('menu-right');
  sectRight.addEventListener('Click', () => {
    console.log('click ohh');
    rightSect.style.display = 'flex';
    rightSect.style.transform = 'translateX(0%)';
  })

  sectRight.addEventListener('click', () => {
    console.log('cliccckk');
    let menu1 = document.getElementById('nav-menu1');

    if (menu1.style.display = 'none') {
      menu1.style.display = 'flex';
      menu1.style.transform = 'translateX(0)';
    } else {
      menu1.style.display = 'none';
    }
  })

  // queryselector : prendre les éléments class dans html avec JS

})