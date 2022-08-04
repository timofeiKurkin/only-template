import Component, { ComponentProps } from '@/base/component';

export default class CounterSection extends Component {
    modal: HTMLElement
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.modalVisibility)
        this.modal = document.querySelector('.modal-body')!
    }

    modalVisibility = (e:Event) => {
        const btnOpen = (<HTMLElement>e.target).closest('.btn__open')
        const btnClose = (<HTMLElement>e.target).closest('.btn__close')

        if (!btnClose && !btnOpen) return

        if(btnOpen) this.openModal()
        if(btnClose) this.closeModal()

    }

    openModal = () => {
        if(!this.modal.classList.contains('is-active')) {
            this.modal.classList.add('is-active')
        }
    }

    closeModal = () => {
        if(this.modal.classList.contains('is-active')) {
            this.modal.classList.remove('is-active')
        }
    }
}
