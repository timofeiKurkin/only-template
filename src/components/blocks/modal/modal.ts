import Component, { ComponentProps } from '@/base/component';
import {Swiper} from "swiper";
import Counter from "@/components/ui/counter/counter";
import {getComponents} from "@/helpers/helpers";

export default class Modal extends Component {
    initialCounters: Counter[];
    constructor(element: ComponentProps) {
        super(element);
        this.initialCounters = [];

        getComponents("counter", this.nRoot).forEach((component) =>
            this.initialCounters.push(new Counter(component))
        );
    }

    destroy = () => {

    }
}
console.log('work')
