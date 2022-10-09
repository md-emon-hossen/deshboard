import AttachMoney from "@material-ui/icons/AttachMoney";
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import CleaningServices from "@material-ui/icons/Clear";
import Logout from '@material-ui/icons/ExitToApp';
import Feedback from "@material-ui/icons/Feedback";
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from "@material-ui/icons/Mail";
import MessageSharp from "@material-ui/icons/MessageSharp";
import PersonIcon from '@material-ui/icons/Person';
import Report from "@material-ui/icons/Report";
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { signOut } from "firebase/auth";
import React from 'react';
import { useNavigate } from "react-router-dom";
import auth from '../../firebase';
import "./aside.css";
const Aside = () => {
    const navigate = useNavigate();
    async function handleLogout() {
        await signOut(auth);
        navigate("/login")
    }
    return (
        <div className='aside'>
            <div className='asideWrper'>
                <div className='asideItem'>
                    <h3>DashBoard</h3>

                    <ul>
                        <li onClick={() => navigate("/")} className='active'><HomeIcon />Home</li>
                        <li> <ShowChartIcon />Analytics</li>
                        <li> <TrendingUpIcon />Sales</li>
                    </ul>

                    <h3>Quick Manus</h3>
                    <ul>
                        <li onClick={() => navigate("/user")}><PersonIcon />User</li>
                        <li onClick={() => navigate("/product")}> <CleaningServices />Products</li>
                        <li> <AttachMoney />Transition</li>
                        <li> <Report />Reports</li>
                    </ul>
                    <h3>Notifications</h3>
                    <ul>
                        <li><MailIcon />Mail</li>
                        <li> <Feedback />Feedbace</li>
                        <li> <MessageSharp />Message</li>
                    </ul>

                    <h3>Staff</h3>
                    <ul>
                        <li><BusinessCenter />Manage</li>
                        <li onClick={handleLogout}><Logout />LogOut</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Aside;