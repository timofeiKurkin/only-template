import Component, { ComponentProps } from '@/base/component';

export default class Counter extends Component {
    inc:HTMLElement
    dec:HTMLElement
    num:number
    countText: HTMLElement
    mainCount: HTMLElement

    constructor(element: ComponentProps) {
        super(element);

        this.mainCount = document.querySelector('.counter-block__mainNum')!
        this.countText = this.getElement('num')!
        this.num = 0
        this.dec = this.getElement('dec')!
        this.inc = this.getElement('inc')!

        this.countText.textContent = `${this.num}`
        this.mainCount.textContent = `${this.num}`


        this.inc.addEventListener('click', this.incHandler)
        this.dec.addEventListener('click', this.decHandler)
    }

    incHandler = (e: MouseEvent) => {
        this.num+=1
        this.countText.textContent = `${this.num+1}`
        this.mainCount.textContent = `${this.num+1}`
    }

    decHandler = (e:MouseEvent) => {
        if(this.num <= 0) return 0
        this.countText.textContent = `${this.num-1}`
        this.mainCount.textContent = `${this.num-1}`

    }
}
