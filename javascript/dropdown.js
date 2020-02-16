const dropdown = document.querySelector('.dropdown');
const dropdownChild = document.querySelector('.dropdown-child');
const menuBtn = document.querySelector('.mainmenubtn')

dropdown.addEventListener('click', function () {
    dropdownChild.style.display == 'block' ? dropdownChild.style.display = 'none' : dropdownChild.style.display = 'block';
    menuBtn.innerHTML = `${'&#9776;'}`;
    menuBtn.style.color = `black`
    if(dropdownChild.style.display == 'block'){
        dropdownChild.style = `
        display:block;
        position: absolute;
        top: ${menuBtn.clientHeight + 5}px;
        right: 0;
        `
        menuBtn.innerHTML = `${'&#10006'}`;
        menuBtn.style.color = 'red'
    }
})