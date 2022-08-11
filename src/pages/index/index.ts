import {getComponent, getComponents} from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';
import SwiperBody from "@/components/ui/swiper-body/swiper-body";
import Modal from "@/components/blocks/modal/modal";
import CounterBlock from "@/components/blocks/counter-block/counter-block";
import CounterSection from "@/components/sections/counter-section/counter-section";
import Spoiler from "@/components/ui/spoiler/spoiler";
import Header from "@/components/common/header/header";

export default {
    namespace: 'index',
    async beforeEnter({ next }: ITransitionData) {
        try {
            new SwiperBody(getComponent('swiper-body'))
            new Modal(getComponent('modal'))
            new CounterSection(getComponent('counter-section'))
            new CounterBlock(getComponent('counter-block'))
            new Header(getComponent('header'))
            if(getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).map(item => new Spoiler(item))
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
