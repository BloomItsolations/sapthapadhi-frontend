
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
    const [activeTab, setActiveTab] = useState('about'); // State for active tab


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
    console.log("Single User", singleUser);

    useEffect(() => {
        dispatch(singleUserDetails(id))
    }, [id])

    const handleSendRequest = async () => {
        dispatch(sendRequest(id))
    };



    const renderTabContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <>
                        <div className="contact_Info">
                            <ul>
                                <li className="flex  gap-2 items-center">
                                    <h1 className="font-semibold text-[15px] md:text-[20px]">Phone:</h1>
                                    <span className="font-medium">{singleUser?.user?.phone}</span>
                                </li>

                                <li className="flex  gap-2 items-center">
                                    <h1 className="font-semibold  text-[15px] md:text-[20px]">Address:</h1>
                                    <span className="font-medium">{singleUser?.userDetails ? `${singleUser?.userDetails?.familyLocation} ${singleUser?.userDetails?.country}` : "null"}
                                    </span>
                                </li>

                                <li className="flex  gap-2 items-center">
                                    <h1 className="font-semibold text-[12px] md:text-[20px]">E-mail:</h1>
                                    <span className="font-medium">{singleUser?.user?.email}</span>
                                </li>


                            </ul>
                        </div>

                        <div className="basic_info">
                            <h1 className="heading mt-2">Basic Information</h1>
                            <ul>
                                <li className="flex  gap-x-2 items-center">
                                    <h1 className="font-semibold  text-[20px]">Place of Birth:</h1>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.placeOfBirth : "null"}</span>
                                </li>

                                <li className="flex  gap-2 items-center">
                                    <h1 className="font-semibold  text-[20px]">Gender:</h1>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.gender : ""}</span>
                                </li>
                            </ul>
                        </div>
                    </>
                );
            case 'contact':
                return (
                    <div className="contact_Info">

                        <ul className="space-y-2">
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Occupation</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.occupation : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Height</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.height : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Weight</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.weight : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Age</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.age : "null"} Yrs</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Gender</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.gender : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Religion</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.religion : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Highest Education</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.highestEducation : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Caste</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.caste : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Annual Income</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.annualIncome : "null"}</span>
                            </li>
                            <li className="flex  gap-2 items-center">
                                <h2 className="font-semibold  text-[20px] ">Marital Status</h2>
                                <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.maritalStatus : "null"}</span>
                            </li>
                        </ul>

                    </div>
                );
            case 'other':
                return (
                    <>
                        <div className="contact_Info">

                            <ul className="space-y-2">
                                <li className="flex  gap-2 items-center">
                                    <h2 className=" font-semibold  text-[20px] ">Body Type: </h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.bodyType : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Eating Habits</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.eatingHabits : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Star</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.star : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Family Status</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.familyStatus : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Physical Status</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.physicalStatus : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Drinking Habits</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.drinkingHabits : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Zodiac Sign</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.zodiacSign : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Mother Tongue</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.motherTongue : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Smoking Habits</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.smokingHabits : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Gothra</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.gothra : "null"}</span>
                                </li>
                                <li className="flex  gap-2 items-center">
                                    <h2 className="font-semibold  text-[20px] ">Have Dosh</h2>
                                    <span className="font-medium">{singleUser?.userDetails ? singleUser?.userDetails?.haveDosh : "no"}</span>
                                </li>
                            </ul>

                        </div>
                    </>
                );
            default:
                return null;
        }
    };


    if (loading) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
        </Box>
    }
    return (
        <div className="container" style={{ width: '100%' }}>

            <section className="userProfile card">
                <div className="profile">
                    <figure>
                        <img

                            src={
                                typeof singleUser?.userDetails?.profilePhoto === "string"
                                    ? singleUser?.userDetails?.profilePhoto
                                    : singleUser?.userDetails?.profilePhoto?.path
                                        ? `${process.env.REACT_APP_IMASE_BASE_URL}/${singleUser.userDetails.profilePhoto.path}`
                                        : 'https://murrayglass.com/wp-content/uploads/2020/10/avatar-2048x2048.jpeg'
                            } alt="profile"
                            width="250"
                            height="250"
                        />
                    </figure>        </div>
            </section>


            {/* ===== User Details Sections ===== */}
            <section className="userDetails card">
                <div className="userName">
                    <h1 className="name">{singleUser?.user?.firstName} {singleUser?.user?.lastName}</h1>
                    <div className="map">
                        <i className="ri-map-pin-fill ri"></i>
                        <span> {singleUser?.userDetails ? singleUser?.userDetails?.familyLocation : "null"} ,  {singleUser?.userDetails ? singleUser?.userDetails?.country : "null"} </span>
                    </div>
                    <div className='flex gap-1 items-baseline'>
                        <h2 className='text-black font-sans font-bold'>Work : </h2>
                        <p>{singleUser?.userDetails ? singleUser?.userDetails?.occupation : "null"} </p>
                    </div>

                </div>

                <div className="rank">
                    <h1 className="heading">Rankings</h1>
                    <span>8.6</span>
                    <div className="rating">
                        <i className="ri-star-fill rate"></i>
                        <i className="ri-star-fill rate"></i>
                        <i className="ri-star-fill rate"></i>
                        <i className="ri-star-fill rate"></i>
                        <i className="ri-star-fill rate underrate"></i>
                    </div>
                </div>

                <div className="btns">
                    <ul>
                        <li className="sendMsg active">
                            <i className="ri-send-plane-fill ri"></i>
                            <button onClick={handleSendRequest}>Send Interest</button>
                        </li>
                    </ul>
                </div>
            </section>

            {/* ===== Timeline & About Sections ===== */}
            <section className="timeline_about card">
                <div className="tabs">
                    <ul>
                        <li className={activeTab === 'about' ? 'active' : ''} onClick={() => setActiveTab('about')}>
                            <i className="ri-user-3-fill ri"></i>
                            <span className='text-[10px] md:text-[15px] lg:text-[20px] '>Contact Info</span>
                        </li>
                        <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>
                            <i className="ri-eye-fill ri"></i>
                            <span className='text-[10px] md:text-[15px] lg:text-[20px] '>About Us</span>
                        </li>
                        <li className={activeTab === 'other' ? 'active' : ''} onClick={() => setActiveTab('other')}>
                            <i className="ri-user-3-fill ri"></i>
                            <span className='text-[10px] md:text-[15px] lg:text-[20px] '>Other Details</span>
                        </li>

                    </ul>
                </div>


                {
                    renderTabContent()

                }

            </section>
        </div>
    );
};

export default ViewNewProfile;
