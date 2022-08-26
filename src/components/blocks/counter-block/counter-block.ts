import Component, { ComponentProps } from '@/base/component';

export default class CounterBlock extends Component {
    mainNum: HTMLElement
    constructor(element: ComponentProps) {
        super(element);

        this.mainNum = this.getElement('mainNum')!
        // this.mainNum.textContent = `0`
    }

    setValue = (value: any) => {
        this.mainNum.textContent = `${value}`
    }
}
