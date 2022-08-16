import Component, { ComponentProps } from '@/base/component';
import Counter from "@/components/ui/counter/counter";
import {getComponent, getComponents} from "@/helpers/helpers";
import CounterBlock from "@/components/blocks/counter-block/counter-block";
import SwiperBody from "@/components/ui/swiper-body/swiper-body";

export default class Modal extends Component {
    initialCounters: Counter[];
    counterBlock: any
    slider: any
    constructor(element: ComponentProps, counterBlock: CounterBlock) {
        super(element);

        this.counterBlock = counterBlock
        this.slider = new SwiperBody(getComponent('swiper-body', this.nRoot))

        this.initialCounters = getComponents("counter", this.nRoot).map((component) => new Counter(component))
    }

    modalVisible = () => {
        console.log('open')
        this.nRoot.style.visibility = 'visible'
    }

    modalHidden = () => {
        this.nRoot.style.visibility = 'hidden'

        const activeValue = this.slider.getActiveCounter()
        console.log(activeValue)
        this.counterBlock.setValue(activeValue);
    }
}
