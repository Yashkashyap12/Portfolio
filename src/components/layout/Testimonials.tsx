"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Rohit Sharma",
        role: "CEO, TechNova",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        message:
            "Their work is truly exceptional! The team was responsive, creative, and delivered exactly what we needed.",
    },
    {
        name: "Ananya Verma",
        role: "Founder, Designly",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        message:
            "I'm beyond impressed with their service. Communication was smooth and the final product exceeded expectations.",
    },
    {
        name: "Amit Joshi",
        role: "CTO, Buildify",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
        message:
            "Professional, quick and reliable. We’re definitely coming back for more projects!",
    },
    {
        name: "Priya Singh",
        role: "Marketing Head, BrandNest",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        message:
            "Top-notch delivery and seamless interaction throughout. Highly recommend them to any business.",
    },
    {
        name: "Kunal Patel",
        role: "Product Manager, Appify",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        message:
            "Fantastic experience from start to finish. Timely updates, excellent support, and great final output.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 px-4 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl text-center font-bold mb-12 text-[#8b29dc] bruno-ace-sc-regular">
                    What Our Clients Say
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    loop
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#403e9787] rounded-xl shadow-xl text-center min-h-[350px] flex flex-col items-center p-6 backdrop-blur-sm transition-all duration-500 overflow-hidden group hover:backdrop-blur-lg hover:bg-[#703f6ebb] hover:scale-[1.03]">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mb-4 object-cover shadow-lg"
                                />
                                <p className="text-base sm:text-lg italic mb-4 line-clamp-4">
                                    "{testimonial.message}"
                                </p>
                                <div className="mt-auto">
                                    <h3 className="text-xl font-semibold bruno-ace-sc-regular">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
