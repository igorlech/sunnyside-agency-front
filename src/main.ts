import { Navbar } from '@components/navbar/navbar';
import { Footer } from '@components/footer/footer';
import { Banner } from '@components/banner/banner';
import { Gallery } from '@components/gallery/gallery';
import { Testimonials } from '@components/testimonials/testimonials';
import { BrandGrid } from '@components/side-by-side/side-by-side';
import { AboutGrid } from '@components/text-image/text-image';
import './styles.scss';

// bootstrap main App when DOMContentLOADED
document.addEventListener('DOMContentLoaded', () => {
    console.log('HELLO WORLD');

    new Navbar();
    new Banner();
    new BrandGrid();
    new AboutGrid();
    new Testimonials();
    new Gallery();
    new Footer();
});

