import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";

const UserProfilePage = () => {
    return (
        <>
           <section className="flex flex-col md:flex-row w-full py-4 px-4 md:px-0 space-y-6 md:space-y-0">
  
  <div className="md:w-1/2 flex flex-col h-[50vh] md:h-[82vh] items-center md:items-start md:px-2">
    <img
      src="https://rn53themes.net/themes/matrimo/images/profiles/profile-large.jpg"
      alt="Profile"
      className="rounded-lg w-full h-[90%] object-cover shadow-md"
    />
    <div className="flex w-full bg-red-500 flex-wrap justify-center md:justify-start">
      <button className="bg-blue-500 text-white w-1/2 py-3 md:py-4 text-sm md:text-base hover:bg-blue-600">
        Send Request
      </button>
      <button className="bg-green-500 text-white w-1/2 py-3 md:py-4 text-sm md:text-base hover:bg-green-600">
        Chat Now
      </button>
    </div>
  </div>

  
  <div className="md:w-2/3 h-auto md:h-[82vh] overflow-y-auto md:overflow-y-scroll space-y-6 text-gray-800 md:px-2">
    {/* Basic Info */}
    <div className="ml-7 mt-7">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-700">Shivani</h1>
    </div>
    <div className="space-y-4">
      <ul className="space-y-2">
        {[
          { label: "Place of Birth", value: "Bangalore, India" },
          { label: "Gender", value: "Female" },
          { label: "Occupation", value: "Software Engineer" },
          { label: "Height", value: "150 cm" },
          { label: "Weight", value: "50 kg" },
          { label: "Age", value: "24 Yrs" },
          { label: "Religion", value: "Hinduism" },
          { label: "Highest Education", value: "Undergraduate" },
          { label: "Caste", value: "Brahmin" },
          { label: "Annual Income", value: "< 20,000" },
          { label: "Marital Status", value: "Single" },
          { label: "Body Type", value: "Slim" },
          { label: "Eating Habits", value: "Non-Vegetarian" },
          { label: "Star", value: "Ashwini" },
          { label: "Family Status", value: "Healthy" },
          { label: "Drinking Habits", value: "Non-Drinker" },
          { label: "Zodiac Sign", value: "Leo" },
          { label: "Mother Tongue", value: "Hindi" },
          { label: "Smoking Habits", value: "Non-Smoker" },
          { label: "Gothra", value: "Brahma" },
          { label: "Have Dosh", value: "No" },
        ].map((item, index) => (
          <li
            key={index}
            className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
          >
            <img
              src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
              alt={`Icon`}
              className="w-10 h-10 object-cover rounded-full"
            />
            <p className="text-gray-700">
              <b>{item.label}:</b> {item.value}
            </p>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg md:text-xl font-semibold text-blue-600">Contact Info</h3>
      <ul className="flex flex-col gap-2">
        {[
          { label: "Phone", value: "7631673231" },
          { label: "Address", value: "Bangalore, India" },
          { label: "Email", value: "shivani@gmail.com" },
        ].map((item, index) => (
          <li
            key={index}
            className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
          >
            <img
              src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
              alt={`Icon`}
              className="w-10 h-10 object-cover rounded-full"
            />
            <p className="text-gray-700">
              <b>{item.label}:</b> {item.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


<div className="md:px-2">
  <h3 className="text-lg md:text-xl font-semibold text-blue-600 ml-3">Photo Gallery</h3>
  <div className="flex flex-wrap gap-4 justify-center p-2">
    {["1.jpg", "6.jpg", "14.jpg", "14.jpg"].map((img, index) => (
      <img
        key={index}
        src={`https://rn53themes.net/themes/matrimo/images/profiles/profile-large.jpg`}
        alt={`Gallery ${index}`}
        className="w-[45%] sm:w-[30%] md:w-[23%] h-auto object-cover rounded-lg shadow-md"
      />
    ))}
  </div>
</div>



        </>
    );
};

export default UserProfilePage;
