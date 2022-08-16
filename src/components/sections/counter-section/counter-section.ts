import Component, { ComponentProps } from '@/base/component';
import Modal from "@/components/blocks/modal/modal";
import {getComponent} from "@/helpers/helpers";
import CounterBlock from "@/components/blocks/counter-block/counter-block";
import Button from "@/components/ui/button/button";

export default class CounterSection extends Component {
    btnOpen: HTMLElement
    btnClose: HTMLElement
    modal: any
    counterBlock: any
    constructor(element: ComponentProps) {
        super(element);
        this.counterBlock = new CounterBlock(getComponent('counter-block', this.nRoot))
        this.modal = new Modal(getComponent('counter-block', this.nRoot), this.counterBlock)

        this.btnOpen = this.getElement('open')!
        this.btnClose = this.getElement('close')!

        this.btnOpen.addEventListener('click', this.openModal)
        this.btnClose.addEventListener('click', this.closeModal)
    }

    openModal = () => {
        this.modal.modalVisible()
    }

    closeModal = () => {
        this.modal.modalHidden()
    }

    destroy = () => {

    }

}
