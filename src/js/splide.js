import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function splide() {

    Splide.defaults = {
        type: "loop",
        drag: true,
        autoWidth: true,
        gap: 30,
        pagination: false,
        arrows: false,
        autoScroll: {
            pauseOnHover: true
        }
    }

    new Splide('#slider1', {
        autoScroll: {
            speed: 1.5,
        }
    }).mount({ AutoScroll });

    new Splide('#slider2', {
        autoScroll: {
            speed: 5,
        }
    }).mount({ AutoScroll });

    new Splide('#slider3', {
        autoScroll: {
            speed: 1.5,
        }
    }).mount({ AutoScroll });
}


