
import React, { useEffect, useState } from 'react';
import './style.css';
import './responsive.css';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { clearError, sendRequest, singleUserDetails } from '../../store/userSlice';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

const ViewNewProfile = () => {
    const { success, error } = useSelector(state => state.user);
    useEffect(() => {
        if (success) {
            Swal.fire({
                icon: 'success',
                title: ' Successful',
                text: success,
            });
            dispatch(clearError());
        }
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
            dispatch(clearError());
        }
    }, [success, error])

    const { id } = useParams();
    const dispatch = useDispatch();
    const { singleUser, loading } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(singleUserDetails(id))
    }, [id])

    const handleSendRequest = async () => {
        dispatch(sendRequest(id))
    };

    if (loading) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
        </Box>
    }

    return (
        <>
            <section className="flex flex-col md:flex-row w-full py-4 px-2 md:px-0 space-y-6 md:space-y-0">

                <div className="md:w-1/2 flex flex-col h-[50vh] md:h-[82vh] items-center md:items-start md:px-2">
                    <img
                        src={
                            typeof singleUser?.userDetails?.profilePhoto === "string"
                                ? singleUser?.userDetails?.profilePhoto
                                : singleUser?.userDetails?.profilePhoto?.path
                                    ? `${process.env.REACT_APP_IMASE_BASE_URL}/${singleUser.userDetails.profilePhoto.path}`
                                    : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'
                        }

                        alt="Profile"
                        className="rounded-lg w-full h-[90%] object-contain shadow-md"
                    />
                    <div className="flex w-full  flex-wrap justify-center md:justify-start">
                        <button onClick={handleSendRequest} className="bg-blue-500 text-white w-full rounded-lg mt-3 py-3 md:py-4 text-[24px] md:text-base hover:bg-blue-600">
                            Send Request
                        </button>
                        {/* <button className="bg-green-500 text-white w-1/2 py-3 md:py-4 text-[24px] md:text-base hover:bg-green-600">
                            Chat Now
                        </button> */}
                    </div>
                </div>


                <div className="md:w-2/3 h-auto md:h-[82vh] overflow-y-auto md:overflow-y-scroll space-y-6 text-gray-800 md:px-2">
                    {/* Basic Info */}
                    <div className="ml-7 mt-7">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-700">{singleUser?.user?.firstName} {singleUser?.user?.lastName}</h1>
                        <p className="text-1xl md:text-2xl font-bold text-blue-700">{singleUser?.userDetails ? singleUser?.userDetails?.familyLocation : "null"} ,  {singleUser?.userDetails ? singleUser?.userDetails?.country : "null"}</p>
                    </div>
                    <div className="space-y-4">
                        <ul className="space-y-2">
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Work:</b> {singleUser?.userDetails ? singleUser?.userDetails?.occupation : "null"}
                                </p>
                            </li>

                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Location:</b> {singleUser?.userDetails ? `${singleUser?.userDetails?.familyLocation} ${singleUser?.userDetails?.country}` : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Phone:</b> {singleUser?.user?.phone}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>E-mail:</b> {singleUser?.user?.email}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Place of birth:</b> {singleUser?.userDetails ? singleUser?.userDetails?.placeOfBirth : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Gender:</b> {singleUser?.userDetails ? singleUser?.userDetails?.gender : ""}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Religion:</b>{singleUser?.userDetails ? singleUser?.userDetails?.religion : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Education:</b>{singleUser?.userDetails ? singleUser?.userDetails?.highestEducation : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Caste:</b>{singleUser?.userDetails ? singleUser?.userDetails?.caste : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Anual Income:</b>{singleUser?.userDetails ? singleUser?.userDetails?.annualIncome : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Marital Status:</b>{singleUser?.userDetails ? singleUser?.userDetails?.maritalStatus : "null"}
                                </p>
                            </li>

                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Body Type:</b>{singleUser?.userDetails ? singleUser?.userDetails?.bodyType : "null"}
                                </p>
                            </li>

                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Eating Habbit:</b>{singleUser?.userDetails ? singleUser?.userDetails?.eatingHabits : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Star:</b>{singleUser?.userDetails ? singleUser?.userDetails?.star : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Family Status:</b>{singleUser?.userDetails ? singleUser?.userDetails?.familyStatus : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Physical Status:</b>{singleUser?.userDetails ? singleUser?.userDetails?.physicalStatus : "null"}
                                </p>
                            </li>

                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Drinkin Habbits:</b>{singleUser?.userDetails ? singleUser?.userDetails?.drinkingHabits : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Zodiac Sign:</b>{singleUser?.userDetails ? singleUser?.userDetails?.zodiacSign : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Mother Tongue:</b>{singleUser?.userDetails ? singleUser?.userDetails?.motherTongue : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Smoking Habbit:</b>{singleUser?.userDetails ? singleUser?.userDetails?.smokingHabits : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Gothra:</b>{singleUser?.userDetails ? singleUser?.userDetails?.gothra : "null"}
                                </p>
                            </li>
                            <li

                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Have Dosh:</b>{singleUser?.userDetails ? singleUser?.userDetails?.haveDosh : "no"}
                                </p>
                            </li>


                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-blue-600">Contact Info</h3>
                        <ul className="flex flex-col gap-2">
                            <li  className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"  >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Phone:</b> {singleUser?.user ? singleUser?.user?.phone : "no"}
                                </p>
                            </li>
                            <li
                                
                                className="p-4 shadow-lg rounded-lg bg-white flex items-center gap-4 text-sm md:text-base"
                            >
                                <img
                                    src="https://rn53themes.net/themes/matrimo/images/icon/pro-city.png"
                                    alt={`Icon`}
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-gray-700">
                                    <b>Email:</b> {singleUser?.user ? singleUser?.user?.email : "no"}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {
                singleUser?.userDetails?.gallery && <div className="md:px-2">
                    <h3 className="text-lg md:text-xl  text-blue-600 ml-3 text-center font-bold mt-2 ">Photo Gallery</h3>
                    <div className="flex flex-wrap gap-4 justify-center p-2">
                        {singleUser?.userDetails?.gallery?.map((img, index) => (
                            <img
                                key={index}
                                src={`${process.env.REACT_APP_IMASE_BASE_URL}/${img}`}
                                alt={`Gallery ${index}`}
                                className="w-[45%] sm:w-[30%] md:w-[23%] h-auto object-cover rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>

            }

        </>
    )

};

export default ViewNewProfile;
