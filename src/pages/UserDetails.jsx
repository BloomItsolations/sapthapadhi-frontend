import React from 'react';

const UserDetails = ({ userDetails }) => {
    if (!userDetails) {
        return <div>Error: User details not found</div>; // Handle case where userDetails is empty
    }

    const personalInfo = {
        Name: `${userDetails.firstName} ${userDetails.lastName}`,
        Age: userDetails.age,
        'Family Names': userDetails.familyNames,
        Height: userDetails.height,
        'Date Of Birth': userDetails.dateOfBirth,
        Degree: userDetails.highestEducation,
        Weight: userDetails.weight,
        Profession: userDetails.occupation,
        Religion: userDetails.religion,
        Position: userDetails.occupationInDetail,
        Cast: userDetails.caste || 'N/A',
        'Sub Cast': userDetails.subCaste || 'N/A',
    };

    const contactInfo = {
        Phone: userDetails.phone,
        WhatsApp: userDetails.phone, // Assuming WhatsApp uses the same phone number as regular phone
        Email: userDetails.email,
        City: userDetails.residingCityDistrict,
    };

    const hobbies = {
        Hobbies: userDetails.hobbies || 'N/A',
    };

    return (
        <div className="flex flex-col items-center w-full mt-2">
            <div className="w-full  rounded-lg shadow-md mb-6">
                <h2 className="font-yeseva text-xl  lg:text-2xl font-normal text-center py-2">PERSONAL INFORMATION</h2>
                <hr />
                <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {Object.entries(personalInfo).map(([label, value]) => (
                            <div key={label} className="flex  gap-2 border-[1px] border-gray-300 p-2 bg-white rounded-[10px]">
                                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}:</span>
                                <span className="font-inter text-sm  lg:text-lg text-gray-600">{value}</span>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full rounded-lg shadow-md mb-6">
                <h2 className="font-yeseva text-xl  lg:text-2xl font-normal text-center py-2">CONTACT INFORMATION</h2>
                <hr />
                <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {Object.entries(contactInfo).map(([label, value]) => (
                            <div key={label} className="flex  gap-2 border-[1px] border-gray-300 p-2 bg-white rounded-[10px]">
                                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}:</span>
                                <span className="font-inter text-lg text-gray-600">{value}</span>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full rounded-lg shadow-md mb-6">
                <h2 className="font-yeseva text-xl  lg:text-2xl font-normal text-center py-2">HOBBIES</h2>
                <hr />
                <div className="p-6">
                    <div className="grid grid-cols-1 gap-6">
                        {Object.entries(hobbies).map(([label, value]) => (
                            <div key={label} className="flex  gap-2 border-[1px] border-gray-300 p-2 bg-white rounded-[10px]">
                                <span className="font-inter text-sm lg:text-lg font-medium text-gray-800">{label}:</span>
                                <span className="font-inter text-lg text-gray-600">{value}</span>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
