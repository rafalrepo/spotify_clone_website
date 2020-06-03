class Menu {
    constructor(){


        this.UiSelectors = {
            btn: '[data-btn-menu]',
            line: '[data-btn-line]',
            navbar: '[data-navbar]',
            header: '[data-header-bg]',
            body: 'body'
        }
    }

    init(){
        
        const btn = document.querySelector(`${this.UiSelectors.btn}`);
        const line = document.querySelectorAll(`${this.UiSelectors.line}`);
        const navbar = document.querySelector(`${this.UiSelectors.navbar}`);
        const header = document.querySelector(`${this.UiSelectors.header}`);
        const body = document.querySelector(`${this.UiSelectors.body}`);

        btn.addEventListener('click', ()=> {
            line.forEach((el, index) => {
                if(index == 0){
                    el.classList.toggle('btnMenu__toggle--first');
                }
                if(index == 1){
                    el.classList.toggle('btnMenu__toggle--second');
                }
                if(index == 2){
                    el.classList.toggle('btnMenu__toggle--third');
                }
            })
            header.classList.toggle('header--mobile');
            navbar.classList.toggle('navbar--mobile');
            body.classList.toggle('scroll');
        })
    }
}