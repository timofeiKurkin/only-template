import Component, {ComponentProps} from '@/base/component';
import Swiper from "swiper";
import {Navigation} from "swiper";
import {getComponents} from "@/helpers/helpers";
import Counter from "@/components/ui/counter/counter";

export default class SwiperBody extends Component {
    swiper: any
    counters: any

    constructor(element: ComponentProps) {
        super(element);
        this.counters = getComponents('counter', this.nRoot).map((counter) => new Counter(counter));
        this.swiper = new Swiper('.swiper', {
            modules: [Navigation],
            direction: 'horizontal',
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
        this.swiper.on('slideChange', this.onSlideChange);
    }

    onSlideChange = () => {
        this.setActiveCounter(this.counters[this.swiper.activeIndex])
    }

    destroy = () => {
        // Destroy functions
    }

    private setActiveCounter(counter: any) {
        console.log(counter)
    }
    getActiveCounter = () => {
        return 0
    }

}

