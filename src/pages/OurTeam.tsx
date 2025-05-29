// import React from 'react'

import Team from '@components/TeamData';

const OurTeam = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-gray-100  px-2 lg:px-12 pt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Meet Our Team</h1>
      <Team />
    </div>
  );
};

export default OurTeam;
