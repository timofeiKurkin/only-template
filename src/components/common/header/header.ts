import Component, {ComponentProps} from '@/base/component';

export default class Header extends Component {
    private readonly _pathMain: string
    private readonly _pathSwiper: string
    links: HTMLElement[]
    logo: HTMLElement
    link: HTMLElement

    constructor(element: ComponentProps) {
        super(element);
        this._pathMain = '/'
        this._pathSwiper = '/swiper.html'

        this.links = this.getElements('nav-link')!

        this.logo = this.getElement('logo')!
        this.link = this.getElement('nav')!

        this.links.forEach((item) => {
            window.location.pathname === this._pathMain ? this.links[0].classList.add('is-active') : this.links[1].classList.add('is-active')
            item.addEventListener('click', this.clickHandler)
        })
    }

    clickHandler = (e:Event) => {
        this.links.forEach((link, i) => {
            for (let j = 0; j < this.links.length; j++) {
                i !== j ? link.classList.remove('is-active') : (<HTMLElement>e.target).classList.add('is-active')
            }
        })
    }

    logoFill = () => {
        this.logo.style.fill = '#000'
    }

    linkVisibility = (param: string) => {
        this.link.style.visibility = `${param}`
    }
}
