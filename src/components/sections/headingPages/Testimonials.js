import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Micheal Caldwell" description="Best Greek salad in Chicago!"/>
                <TestimonialCard name="Alan Chen" description="Great atmosphere"/>
                <TestimonialCard name="Gregory Lau" description="Love the lemon dessert!"/>
                <TestimonialCard name="Ava Rosenblum" description="Must see restaurant"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}