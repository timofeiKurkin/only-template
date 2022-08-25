import Component, { ComponentProps } from '@/base/component';

export default class Counter extends Component {
    inc:HTMLElement
    dec:HTMLElement
    value:number
    countText: HTMLElement

    constructor(element: ComponentProps) {
        super(element);

        this.countText = this.getElement('num')!
        this.value = 0
        this.countText.textContent = `${this.value}`
        this.dec = this.getElement('dec')!
        this.inc = this.getElement('inc')!

        this.inc.addEventListener('click', this.incHandler)
        this.dec.addEventListener('click', this.decHandler)
    }

    incHandler = (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        this.value += 1
        this.countText.textContent = `${this.value}`
    }

    decHandler = (e:MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()

        if(this.value <= 0) return 0
        this.value -= 1
        this.countText.textContent = `${this.value}`
    }
}
