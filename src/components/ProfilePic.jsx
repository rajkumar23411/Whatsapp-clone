import { useContext } from "react";
import { AppContext } from "../context/ActionProvider";

const ProfilePic = ({ size }) => {
    const { setShowUserAccount } = useContext(AppContext);
    return (
        <div
            className={`h-10 w-10 rounded-full overflow-hidden cursor-pointer`}
            onClick={() => setShowUserAccount(true)}
        >
            <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="model"
                className="h-full w-full object-cover"
            />
        </div>
    );
};

export default ProfilePic;
