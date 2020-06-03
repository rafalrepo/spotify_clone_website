class Toogle{
    constructor(){

        this.UISelectors = {
            btnToggle: '[data-toggle]',
            itemFirst: '[data-toogle-item-first]',
            itemSecond: '[data-toogle-item-second]',
            itemThird: '[data-toogle-item-third]',
            itemFour: '[data-toogle-item-four]',
            itemFive: '[data-toogle-item-five]',
            arrow: '[data-toggle-arrow]'
        }

    }

    init(){
        const btn = document.querySelectorAll(`${this.UISelectors.btnToggle}`);
        const itemFirst = document.querySelectorAll(`${this.UISelectors.itemFirst}`)
        const itemSecond = document.querySelectorAll(`${this.UISelectors.itemSecond}`)
        const itemThird = document.querySelectorAll(`${this.UISelectors.itemThird}`)
        const itemFour = document.querySelectorAll(`${this.UISelectors.itemFour}`)
        const itemFive = document.querySelectorAll(`${this.UISelectors.itemFive}`)
        const arrow = document.querySelectorAll(`${this.UISelectors.arrow}`)

        console.log(btn);
        btn.forEach((e, index) => {
            e.addEventListener('click', ()=>{
                if(index == 0){
                    itemFirst.forEach(el => el.classList.toggle('toggle'))
                    arrow[index].classList.toggle('arrow--rotate')
                }
                if(index == 1){
                    itemSecond.forEach(el => el.classList.toggle('toggle'))
                    arrow[index].classList.toggle('arrow--rotate')
                }
                if(index == 2){
                    itemThird.forEach(el => el.classList.toggle('toggle'))
                    arrow[index].classList.toggle('arrow--rotate')
                }
                if(index == 3){
                    itemFour.forEach(el => el.classList.toggle('toggle'))
                    arrow[index].classList.toggle('arrow--rotate')
                }
                if(index == 4){
                    itemFive.forEach(el => el.classList.toggle('toggle'))
                    arrow[index].classList.toggle('arrow--rotate')
                }
            })
        })
    }
}