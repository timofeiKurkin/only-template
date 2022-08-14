import Component, { ComponentProps } from '@/base/component';

export default class Curtains extends Component {
    top: HTMLElement
    bottom: HTMLElement
    constructor(element: ComponentProps) {
        super(element);
        this.top = this.getElement('top')!
        this.bottom = this.getElement('bottom')!
    }

    leavePage = () => {
        requestAnimationFrame(() => {
            this.nRoot.style.visibility = 'visible'
            this.nRoot.style.transition = 'none'
            this.top.style.transition = 'none'
            this.bottom.style.transition = 'none'
        })

        setTimeout(() => {
            requestAnimationFrame(() => {
                this.top.style.height = '50%'
                this.bottom.style.height = '50%'
            })
        }, 1000)
    }

    enterPage = () => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                this.nRoot.style.transition = '.3s'
                this.top.style.transition = '1.5s'
                this.bottom.style.transition = '1.5s'
                this.top.style.height = '0'
                this.bottom.style.height = '0'
            })
        }, 500)

        setTimeout(() => {
            this.nRoot.style.visibility = 'hidden'
        }, 2000)
    }
}
