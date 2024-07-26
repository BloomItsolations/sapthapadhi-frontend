import React from 'react';

const UserDetails = ({user, userDetails }) => {
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
    'No. of Children': userDetails.noOfChildren,
    'Body Type': userDetails.bodyType,
    'Body Complexion': userDetails.bodyComplexion,
    'Physical Status': userDetails.physicalStatus,
    'Mother Tongue': userDetails.motherTongue,
    'Eating Habits': userDetails.eatingHabits,
    'Drinking Habits': userDetails.drinkingHabits,
    'Smoking Habits': userDetails.smokingHabits,
    Religion: userDetails.religion,
    Caste: userDetails.caste,
    'Sub Caste': userDetails.subCaste,
    Gothra: userDetails.gothra,
    Star: userDetails.star,
    'Zodiac Sign': userDetails.zodiacSign,
    'Have Dosh': userDetails.haveDosh ? 'Yes' : 'No',
    'Time of Birth': userDetails.timeOfBirth,
    'Place of Birth': userDetails.placeOfBirth,
    Country: userDetails.country,
    Citizenship: userDetails.citizenship,
    'Residing City': userDetails.residingCity,
    'Highest Education': userDetails.highestEducation,
    Occupation: userDetails.occupation,
    'Annual Income': userDetails.annualIncome,
    'Family Value': userDetails.familyValue,
    'Family Status': userDetails.familyStatus,
    'No. of Siblings': userDetails.noofSiblings,
    'Family Location': userDetails.familyLocation,
    Bio: userDetails.bio,
  };

  const contactInfo = {
    Phone: user.phone || 'N/A', 
    Email: user.email || 'N/A',
  };

  const hobbies = {
    Hobbies: userDetails.hobbies.length > 0 ? userDetails.hobbies.join(', ') : 'N/A',
  };

  return (
    <div className="flex flex-col items-center w-full bg-white lg:w-[95%] mx-auto">
      <div className="w-full rounded-lg shadow-md mb-6">
        <h2 className="font-yeseva text-xl lg:text-2xl font-normal text-center py-2">PERSONAL INFORMATION</h2>
        <hr />
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(personalInfo).map(([label, value]) => (
              <div key={label} className="flex gap-2 border border-gray-300 p-2 bg-white rounded-[6px]">
                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}:</span>
                <span className="font-inter text-sm lg:text-lg text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg shadow-md mb-6">
        <h2 className="font-yeseva text-xl lg:text-2xl font-normal text-center py-2">CONTACT INFORMATION</h2>
        <hr />
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(contactInfo).map(([label, value]) => (
              <div key={label} className="flex gap-2 border border-gray-300 p-2 bg-white rounded-[6px]">
                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}:</span>
                <span className="font-inter text-lg text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg shadow-md mb-6">
        <h2 className="font-yeseva text-xl lg:text-2xl font-normal text-center py-2">HOBBIES</h2>
        <hr />
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(hobbies).map(([label, value]) => (
              <div key={label} className="flex gap-2 border border-gray-300 p-2 bg-white rounded-[6px]">
                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}:</span>
                <span className="font-inter text-lg text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
