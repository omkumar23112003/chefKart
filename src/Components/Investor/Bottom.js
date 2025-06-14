import React from 'react';

const AnnouncementBanner = () => {
  return (
    <div className="bg-orange-500 text-white text-center py-8">
      <div className="relative max-w-screen-lg h-auto mx-auto px-4 lg:px-8">
        {/* Decorative Arcs */}
        <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-white rounded-full"></div>
        <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 border-t-4 border-r-4 border-white rounded-full"></div>

        {/* Text Content */}
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold mt-5 md:mt-8">
          This is just the beginning with many <br className="hidden md:block" /> 
          more milestones & funding to come.
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
