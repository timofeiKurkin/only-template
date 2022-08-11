import Component, { ComponentProps } from '@/base/component';
import Modal from "@/components/blocks/modal/modal";
import {getComponent} from "@/helpers/helpers";
import CounterBlock from "@/components/blocks/counter-block/counter-block";
import {type} from "os";

export default class CounterSection extends Component {
    modal: any
    counterBlock: any
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.modalVisibility)
        this.counterBlock = new CounterBlock(getComponent('counter-block', this.nRoot))

        this.modal = new Modal(getComponent('counter-block', this.nRoot), this.counterBlock)
        // console.log(this.modal)
    }

    openModal = () => {
        this.modal.open();
    }

    closeModal = () => {
        this.modal.close();
    }

    modalVisibility = (e:Event) => {
        const btnOpen = (<HTMLElement>e.target).closest('.btn__open')
        const btnClose = (<HTMLElement>e.target).closest('.btn__close')

        if (!btnClose && !btnOpen) return

        if(btnOpen) this.openModal()
        if(btnClose) this.closeModal()

    }
    //
    // openModal = () => {
    //     if(!this.modal.classList.contains('is-active')) {
    //         this.modal.classList.add('is-active')
    //     }
    // }
    //
    // closeModal = () => {
    //     if(this.modal.classList.contains('is-active')) {
    //         this.modal.classList.remove('is-active')
    //     }
    // }
}
