import {getComponent, getComponents} from '@/helpers/helpers';
import { ITransitionData } from '@barba/core/dist/core/src/defs';
import CounterSection from "@/components/sections/counter-section/counter-section";
import Spoiler from "@/components/ui/spoiler/spoiler";

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            if(getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).map(item => new Spoiler(item))
            }
            if(getComponent('counter-section').component) {
                new CounterSection(getComponent('counter-section'))
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
