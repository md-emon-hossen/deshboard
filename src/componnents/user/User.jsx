import Delete from "@material-ui/icons/Delete";
import Edit from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import "./user.css";

function User() {
    return (
        <div className='userwrper'>
            <table style={{ width: "100%" }}>
                <tr>
                    <td className="htd" style={{ width: "8%", textAlign: "center" }}>Id</td>
                    <td className="htd" style={{ width: "30%", textAlign: "center" }}>User</td>
                    <td className="htd" style={{ width: "25%", textAlign: "center" }}>Email</td>
                    <td className="htd" style={{ width: "17%", textAlign: "center" }}>Status</td>
                    <td className="htd" style={{ width: "20%", textAlign: "center" }}>Transaction</td>
                    <td className="htd" style={{ width: "20%", textAlign: "center" }}>
                        Action
                    </td>
                </tr>



                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Link to='/updateuser'>    <Edit className="EditBtn" /></Link>
                        <Link to='/delectuser'><Delete className="DeleteBtn" /></Link>
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>
                <tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr><tr>
                    <td className="td" style={{ width: "8%", textAlign: "center" }}>1</td>
                    <td className="td" style={{ width: "30%", textAlign: "center" }}>

                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=" className="userProfile" alt="profile" />
                        <h3 className="usertitle">Md Emon Hossen</h3>
                    </td>
                    <td className="td" style={{ width: "25%", textAlign: "center" }}>mdemong87@gamil.com</td>
                    <td className="td" style={{ width: "17%", textAlign: "center" }}>Active</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>$122.00</td>
                    <td className="td" style={{ width: "20%", textAlign: "center" }}>
                        <Edit className="EditBtn" />
                        <Delete className="DeleteBtn" />
                    </td>
                </tr>


            </table>
        </div>
    );
};

export default User;