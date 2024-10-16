import { useDispatch, useSelector } from "react-redux";
import MultiStepUserDetails from "../components/MultiStepUserDetails";
import { useEffect } from "react";
import { myalldetails } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { isProfileComplete } from "../utils/profileValidation";
import Swal from "sweetalert2";

const CollectUserData = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const { mydetails } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(myalldetails());
        return () => {};
    }, []);
     
   

     let handleHomePage=()=>{
        navigate("/")
     }
     if(!mydetails){
        return <div>
            Loading......
            if facing some issue then click here to solver <button onClick={handleHomePage}>Click Here</button>
        </div>
     }
      
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md z-50">
            <div className="bg-[#cccccc] p-8 rounded-lg shadow-xl w-11/12 max-w-[95vw] md:max-w-[65vw] lg:max-w-[50vw]">
                <h2 className="text-2xl font-bold text-center mb-6 text-black ">Please Add Your Details</h2>
                <MultiStepUserDetails userDetails={mydetails?.userDetails} />
            </div>
        </div>
    );
}

export default CollectUserData;
