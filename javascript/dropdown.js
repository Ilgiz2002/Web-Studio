class Dropdown {
    constructor(obj) {
        this.nameDropdown = document.querySelector(obj.nameDropdown)
        this.dropdownChild = document.querySelector(obj.dropdownChild)
        this.dropdownBtn = document.querySelector(obj.dropdownBtn)


        this.nameDropdown.addEventListener('click', () => { this.click() })
    }
    click() {
        this.dropdownChild.style.display == 'block' ? this.dropdownChild.style.display = 'none' : this.dropdownChild.style.display = 'block';

        this.check()

        this.dropdownBtn.innerHTML = `${'&#9776;'}`
        this.dropdownBtn.style.color = `black`
    }
    check() {
        if (this.dropdownChild.style.display == 'block') {
            this.dropdownChild.style = `
            display:block;
            position: absolute;
            width: 150px;
            height:max-content;
            padding:10px;
            top: ${this.dropdownBtn.clientHeight + 5}px;
            right: 0;
            `
            this.dropdownBtn.innerHTML = `${'&#10006'}`;
            this.dropdownBtn.style.color = 'red'
        }
    }
}

let dropdown = new Dropdown({
    nameDropdown: ' .header__dropdown ',
    dropdownChild: '.dropdown-child',
    dropdownBtn: '.header__dropdown-btn'

})