import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, sendRequest } from '../../store/userSlice';
import Swal from 'sweetalert2';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const UserCard = ({ id, profilePhoto, name, age, height, status }) => {
  const dispatch = useDispatch();
  const { success, error } = useSelector(state => state.user);
  const [newStatus, setNewStatus] = useState(status);

  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
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
  }, [success, error, dispatch]);

  const handleSendRequest = () => {
    dispatch(sendRequest(id));
    setNewStatus(true);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200">
      <div className="relative p-6 bg-gray-200 rounded-lg shadow-lg flex flex-col items-center">
        <Link to={!newStatus ? `/app/userdetails/${id}` : `/app/requested-profile-view/${id}`} style={{ textDecoration: 'none' }}>
          <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center bg-gray-300 shadow-inner">
            <img
              src={profilePhoto}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">Age: {age} Yrs, Height: {height}</p>
          </div>
        </Link>
        {/* <div className="flex mt-4 space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram /></a>
        </div> */}
        <div className="flex w-full mt-4">
          <Link className="w-1/2 bg-white flex justify-center items-center text-gray-800 py-1 text-[12px] rounded-lg shadow-md hover:bg-gray-100 text-center" to={!newStatus ? `/app/userdetails/${id}` : `/app/requested-profile-view/${id}`} style={{ textDecoration: 'none' }}>
            View Profile
          </Link>
          <button
            className="w-1/2 ml-2 bg-blue-600 text-white text-[10px] py-1 rounded-lg shadow-md hover:bg-blue-700"
            onClick={handleSendRequest}
            disabled={newStatus}
          >
            {newStatus ? 'Requested' : 'Send Request'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
