import Component, {ComponentProps} from '@/base/component';
import Swiper from "swiper";
import {Navigation} from "swiper";
import {getComponents} from "@/helpers/helpers";
import Counter from "@/components/ui/counter/counter";

export default class SwiperBody extends Component {
    activeCount: any
    swiper: any
    counters: any

    constructor(element: ComponentProps) {
        super(element);

        this.counters = getComponents('counter', this.nRoot).map((counter) => new Counter(counter));

        this.activeCount = 0

        this.swiper = new Swiper('.swiper', {
            modules: [Navigation],
            direction: 'horizontal',
            loop: true,
            allowTouchMove: false,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })

        this.swiper.on('slideChange', this.onSlideChange);
    }

    setCurrentValue = () => {
        this.setActiveCounter(this.counters[this.swiper.realIndex])
    }

    onSlideChange = () => {
        this.setCurrentValue()
    }

    private setActiveCounter = (value: any) => {
        this.activeCount = value.value
    }

    getActiveCounter = () => {
        // (!this.activeCount || this.activeCount) && this.setActiveCounter(this.counters[this.swiper.realIndex])
        return this.activeCount
    }

}

