import React from 'react';

const UserDetails = ({ user, userDetails }) => {
  if (!userDetails) {
    return <div></div>; // Handle case where userDetails is empty
  }

  const personalInfo = {
    Name: userDetails.name,
    Gender: userDetails.gender,
    Age: userDetails.age,
    Height: userDetails.height,
    Weight: userDetails.weight,
    'Marital Status': userDetails.maritalStatus,
    'Body Type': userDetails.bodyType,
    'Physical Status': userDetails.physicalStatus,
    'Mother Tongue': userDetails.motherTongue,
    'Eating Habits': userDetails.eatingHabits,
    'Drinking Habits': userDetails.drinkingHabits,
    'Smoking Habits': userDetails.smokingHabits,
    Religion: userDetails.religion,
    Caste: userDetails.caste,
    Gothra: userDetails.gothra,
    Star: userDetails.star,
    'Zodiac Sign': userDetails.zodiacSign,
    'Have Dosh': userDetails.haveDosh ? 'Yes' : 'No',
    'Time of Birth': userDetails.timeOfBirth,
    'Place of Birth': userDetails.placeOfBirth,
    Country: userDetails.country,
    'Highest Education': userDetails.highestEducation,
    Occupation: userDetails.occupation,
    'Annual Income': userDetails.annualIncome,
    'Family Status': userDetails.familyStatus,
    'Family Location': userDetails.familyLocation,
    Bio: userDetails.bio,
  };

  const contactInfo = {
    Phone: user.phone || 'N/A',
    Email: user.email || 'N/A',
  };

  const hobbies = {
    Hobbies: userDetails?.hobbies?.length > 0 ? userDetails?.hobbies?.join(', ') : 'N/A',
  };

  return (
    <div className="flex flex-col items-center w-full bg-white lg:w-[95%] mx-auto">
      <div className="w-full rounded-lg shadow-md mb-6">
        <h2 className="font-yeseva text-xl lg:text-2xl font-normal text-center py-2">PERSONAL INFORMATION</h2>
        <hr />
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-300">
            {Object.entries(personalInfo).map(([label, value]) => (
              <div key={label} className="p-2 bg-white border-b border-r border-gray-300 gap-x-1 last:border-b-0 sm:last:border-b md:last:border-b-0 sm:last:border-r-0 md:last:border-r-0">
                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}:  </span>
                <span className="font-inter text-sm lg:text-lg text-gray-600 capitalize">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg shadow-md mb-6">
        <h2 className="font-yeseva text-xl lg:text-2xl font-normal text-center py-2">CONTACT INFORMATION</h2>
        <hr />
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-gray-300">
            {Object.entries(contactInfo).map(([label, value]) => (
              <div key={label} className="p-2 bg-white border-b border-r gap-x-1 border-gray-300 last:border-b-0 sm:last:border-b-0 sm:last:border-r-0">
                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}: </span>
                <span className="font-inter text-sm lg:text-lg text-gray-600 capitalize">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg shadow-md mb-6">
        <h2 className="font-yeseva text-xl lg:text-2xl font-normal text-center py-2">HOBBIES</h2>
        <hr />
        <div className="p-6">
          <div className="grid grid-cols-1 border border-gray-300">
            {Object.entries(hobbies).map(([label, value]) => (
              <div key={label} className="p-2 bg-white border-b border-r gap-x-1 border-gray-300 last:border-b-0 last:border-r-0">
                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}: </span>
                <span className="font-inter text-sm lg:text-lg text-gray-600 capitalize">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
