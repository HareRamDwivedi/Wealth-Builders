import React from 'react';

export default function MeetOurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Untitled design (9) 1.png"
    },
    {
      id: 2,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Rectangle.png"
    },
    {
      id: 3,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Rectangle-1.png"
    },
    {
      id: 4,
      name: "ARUNIM MEHROTRA",
      position: "Post",
      image: "/images/Rectangle-2.png"
    }
  ];

  return (
    <div className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-primary text-[20px] sm:text-[23px] Montserrat mb-2">Meet Our Team</p>
          <h2 className="text-[33px]  sm:text-[45px] font-inter font-normal text-white leading-tight">
            We Are Dedicated To Your<br className="hidden sm:block" />
            Financial Well-being
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}
