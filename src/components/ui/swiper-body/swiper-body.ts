import Component, { ComponentProps } from '@/base/component';
import Swiper from "swiper";
import { Navigation } from "swiper";

export default class SwiperBody extends Component {
    swiper:any

    constructor(element: ComponentProps) {
        super(element);

        this.swiper = new Swiper('.swiper', {
            modules: [Navigation],
            direction: 'horizontal',
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
    }

    destroy = () => {
        // Destroy functions
    }
}

