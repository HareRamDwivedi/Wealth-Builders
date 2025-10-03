import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MeetOurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Prachi",
      position: "Client Success",
      image: "/images/Prachi.jpeg"
    },
    {
      id: 2,
      name: "Dhruv Kesharwani",
      position: "Sales Representative",
      image: "/images/Dhruv.jpeg"
    },
    {
      id: 3,
      name: "Aswani Verma",
      position: "Senior Sales Manager",
      image: "/images/Aswani Verma.JPG"
    }
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // Ensures refs are set before Swiper initializes
  }, []);

  const TeamCard = ({ member }) => (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2">
      {/* Profile Image */}
      <div className="w-full h-56 sm:h-48 bg-gray-200 rounded-xl overflow-hidden mb-5">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Member Info */}
      <div className="text-center">
        <h3 className="text-[18px] Myanmar Khyay text-secondary mb-1">
          {member.name}
        </h3>
        <p className="text-gray-600 text-[15px] Montserrat">
          {member.position}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-primary text-[20px] sm:text-[23px] Montserrat mb-2">Meet Our Team</p>
          <h2 className="text-[33px] sm:text-[45px] font-inter font-normal text-white leading-tight">
            We Are Dedicated To Your<br className="hidden sm:block" />
            Financial Well-being
          </h2>
        </div>

        {/* Mobile Carousel with Navigation */}
        <div className="block sm:hidden relative">
          {swiperReady && (
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <TeamCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Left Arrow */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
