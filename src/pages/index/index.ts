
import {getComponent, getComponents} from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';
import SwiperBody from "@/components/ui/swiper-body/swiper-body";
import Counter from "@/components/ui/counter/counter";
import Modal from "@/components/blocks/modal/modal";
import CounterBlock from "@/components/blocks/counter-block/counter-block";
import CounterSection from "@/components/sections/counter-section/counter-section";

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            new SwiperBody(getComponent('swiper-body'))
            new Modal(getComponent('modal'))
            new CounterSection(getComponent('counter-section'))
            new CounterBlock(getComponent('counter-block'))
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
