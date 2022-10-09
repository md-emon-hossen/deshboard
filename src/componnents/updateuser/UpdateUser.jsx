import UpdateAndDelectProfile from "../updatateAndDelectProfile/UpdateAndDelectProfile";
import UpdateModal from "../updateModal/UpdateModal";
import "./updateuser.css";
const UpdateUser = () => {
    return (
        <div className="updateuserwrper">
            <UpdateAndDelectProfile heading="Update User" />
            <UpdateModal />
        </div>
    );
};

export default UpdateUser;