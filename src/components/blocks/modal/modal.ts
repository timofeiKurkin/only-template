import Component, { ComponentProps } from '@/base/component';
import Counter from "@/components/ui/counter/counter";
import {getComponent, getComponents} from "@/helpers/helpers";
import CounterBlock from "@/components/blocks/counter-block/counter-block";
import SwiperBody from "@/components/ui/swiper-body/swiper-body";

export default class Modal extends Component {
    // initialCounters: Counter[];
    counterBlock: any
    slider: any
    constructor(element: ComponentProps, counterBlock: CounterBlock) {
        super(element);

        this.counterBlock = counterBlock

        this.slider = new SwiperBody(getComponent('swiper-body', this.nRoot))
    }

    modalVisible = () => {
        this.nRoot.style.visibility = 'visible'
    }

    getCounter = () => {
        this.slider.getCurrentValue()
        this.counterBlock.setValue(this.slider.getActiveCounter());
    }

    modalHidden = () => {
        this.nRoot.style.visibility = 'hidden'
        this.getCounter()
    }
}
