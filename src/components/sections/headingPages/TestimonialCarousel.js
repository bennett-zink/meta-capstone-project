import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Micheal Caldwell" description="Best Greek salad in Chicago!"/>
            <TestimonialCard name="Janine Chen" description="Great atmosphere"/>
            <TestimonialCard name="Casey Lau" description="Love the lemon dessert!"/>
            <TestimonialCard name="John Rosenblum" description="Must see restaurant"/>
             </Carousel>
    )
}