import React from 'react';

const PressReleases = () => {
  const releases = [
    {
      date: 'January 26, 2023',
      title: 'ChefKart raises $2 million in funding led by Blume Ventures, Pravega Ventures',
    },
    {
      date: 'January 24, 2023',
      title: 'ChefKart launches Chefit: one time cooking',
    },
  ];

  return (
    <section className="px-2 sm:px-12 lg:px-24 py-12 bg-white">
      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Press Release</h2>
        <div className="space-y-8">
          {releases.map((release, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <p className="text-gray-600 text-sm">{release.date}</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-2">
                {release.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressReleases;
