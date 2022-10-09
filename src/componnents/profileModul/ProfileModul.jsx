import DateRange from '@material-ui/icons/DateRange';
import Email from "@material-ui/icons/Email";
import LocalPhone from "@material-ui/icons/LocalPhone";
import LocationOn from "@material-ui/icons/LocationOn";
import Person from '@material-ui/icons/Person';
import "./profilemodul.css";

const ProfileModul = () => {
    return (
        <div className="profilemodulerper">
            <div className={`container`}>
                <div className="singleProfile">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnR3bK3yKj75Z-B3yuBXyhP5pDmwz3_THQpTVOl3G3Q&s' alt='profilePic' />
                    <h3 className='profilename'>Md Emon Hossen</h3>
                    <p className='profileTilte'>Web Developer</p>
                    <div className="aboutProfile">
                        <div className="accountDetail">
                            <h3 className='profileHead'>Account Details</h3>
                            <div> <Person /> mdemong87</div>
                            <div> <DateRange /> 20/11/2001</div>

                        </div>
                        <div className="contactDetail">
                            <h3 className='profileHead'>Contact Details</h3>
                            <div> <LocalPhone />01986404986</div>
                            <div><Email />mdemong87@gmail.com</div>
                            <div> <LocationOn />Dhaka,Bangladesh</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileModul;