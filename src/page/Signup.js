import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./signup.css";
const Signup = () => {
    const [fristname, setFristname] = useState();
    const [lastname, setlastname] = useState();
    const [email, setemail] = useState();
    const [phone, setphone] = useState();
    const [password, setpassword] = useState();
    const [address, setaddress] = useState();
    const [file, setfile] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName: fristname,
                photoURL: file
            });
            console.log("signup successfully");
            navigate('/');
        } catch (err) {
            console.log(err);
            setError(true);
        }

    }
    return (
        <div>
            <div className='updateModalWrpter'>
                <form onSubmit={(e) => handleSubmit(e)} className="singleUpdateData">
                    <div className='inputwrp'>
                        <input onChange={(e) => setFristname(e.target.value)} type="text" />
                        <label>Frist Name</label>

                    </div>
                    <div className='inputwrp'>

                        <input onChange={(e) => setlastname(e.target.value)} type="text" />
                        <label>Last Name</label>
                    </div>
                    <div className='inputwrp'>

                        <input required onChange={(e) => setemail(e.target.value)} type="email" />
                        <label>Email</label>
                    </div>
                    <div className='inputwrp'>

                        <input onChange={(e) => setphone(e.target.value)} type="tel" />
                        <label>Phone</label>
                    </div>
                    <div className='inputwrp'>

                        <input required onChange={(e) => setpassword(e.target.value)} type="password" />
                        <label>password</label>
                    </div>
                    <div className='inputwrp'>

                        <input onChange={(e) => setaddress(e.target.value)} type="text" />
                        <label>Address</label>
                    </div>
                    <div className='uplodeAndUpdate'>

                        <input className='file' onChange={(e) => setfile(e.target.value)} type="file" />
                        <br />
                        <button type="submit" className='updatebtn'>Sign Up</button>
                    </div>
                    {error && <p>SignUp Failed</p>}
                </form>

            </div>
            <Link to='/login'>Login Page</Link>
        </div>
    );
};

export default Signup;