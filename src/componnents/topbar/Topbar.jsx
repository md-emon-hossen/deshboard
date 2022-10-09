import LanguageIcon from '@material-ui/icons/Language';
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from '@material-ui/icons/Settings';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import ProfileModul from '../profileModul/ProfileModul';
import './topbar.css';


const Topbar = () => {
    const auth = getAuth();
    const [profilShow, setprofileshow] = useState(false);
    const [setting, setsetting] = useState(false);

    return (
        <div className='topber'>
            <div className='topbarwrpper'>
                <div className='topberleft'>
                    <h1 className='logo'>lammanda</h1>
                </div>
                <div className='topberRight'>
                    <div className='iconwrper'>
                        <NotificationsIcon className='topbericons' />
                        <span className='tooltip'>2</span>
                    </div>
                    <div className='iconwrper'>
                        <LanguageIcon className='topbericons' />
                        <span className='tooltip'>2</span>
                    </div>
                    <div onClick={() => setsetting(!setting)} className='iconwrper'>
                        <SettingsIcon className={`topbericons ${setting && 'settingIcons'}`} />
                        <span className='tooltip'>2</span>
                    </div>



                    <div onClick={() => setprofileshow(!profilShow)} className='currentuser'>
                        <img src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png" alt="Avatar" />
                        {auth.currentUser.displayName && <p>{auth.currentUser.displayName}</p>}
                    </div>

                </div>
            </div>
            {profilShow && <ProfileModul />}
        </div>
    );
};

export default Topbar;