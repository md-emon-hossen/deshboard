import DelectMOdal from "../delectModal/DelectMOdal";
import UpdateAndDelectProfile from '../updatateAndDelectProfile/UpdateAndDelectProfile';
import "./delectuser.css";
const DelectUser = () => {
    return (
        <div className="delectuserwrper">
            <UpdateAndDelectProfile heading="Delect User" />
            <DelectMOdal />
        </div>
    );
};

export default DelectUser;

