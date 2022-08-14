import Component, { ComponentProps } from '@/base/component';
import {getComponent} from "@/helpers/helpers";
import Header from "@/components/common/header/header";

export default class PageTransition extends Component {
    block: HTMLElement
    header: any

    constructor(element: ComponentProps) {
        super(element);
        this.block = this.getElement('block')!

        this.header = new Header(getComponent('header'))
    }

    leavePage = () => {
        requestAnimationFrame(() => {
            this.header.linkVisibility('hidden')

            this.nRoot.style.visibility = 'visible'
            this.nRoot.style.transition = 'none'
            this.block.style.height = '100%'
        })

        setTimeout(() => {
            requestAnimationFrame(() => {
                this.block.style.height = '0'
            })
        }, 1000)
    }

    enterPage = () => {
        setTimeout(() => {
            requestAnimationFrame(() => {
                this.nRoot.style.transition = '.3s'
            })
        }, 500)

        setTimeout(() => {
            this.nRoot.style.visibility = 'hidden'
        }, 2000)

        setTimeout(() => {
            this.header.linkVisibility('visible')
        }, 1300)
    };

    once = () => {
        this.nRoot.style.visibility = 'visible';
        this.header.linkVisibility('hidden')

        setTimeout(() => {
            this.block.style.height = '0'
        }, 1000);

        setTimeout(() => {
            this.nRoot.style.visibility = 'hidden'
            this.header.linkVisibility('visible')
            this.header.logoFill()
        }, 1800)
    }
}
