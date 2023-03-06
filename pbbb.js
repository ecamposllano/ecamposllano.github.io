(function(){
    const openButton = document.querySelector('.menu');
    const menu = document.querySelector('.navLink');
    const closeMenu = document.querySelector('.close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('navLink--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('navLink--show');
    });
})();