import Component, {ComponentProps} from '@/base/component';
import barba from "@barba/core";
import gsap from 'gsap';
import {getComponent} from "@/helpers/helpers";

export default class Header extends Component {
    btnLink: any
    constructor(element: ComponentProps) {
        super(element);
        this.btnLink = getComponent('nav-link')
        console.log(this.btnLink)
        this.btnLink.addEventListener('click', this.destroy)
        //
        // barba.init({
        //     transitions: [{
        //         name: 'opacity-transition',
        //         leave(data) {
        //             console.log(data)
        //             return gsap.to(data.current.container, {
        //                 opacity: 0
        //             })
        //         },
        //         enter(data) {
        //             return gsap.from(data.next.container, {
        //                 opacity: 0,
        //             });
        //         }
        //     }]
        // })
    }

    destroy = () => {
        console.log(this.btnLink)
    }
}
