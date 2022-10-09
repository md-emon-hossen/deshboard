import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import './login.css';
const Login = () => {
    const [error, setError] = useState(false);
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError(false);
            navigate("/");
            console.log('login successfull');
        } catch (err) {
            setError(true);
            console.log(err);
        }


    }



    return (<>
        <Link to='/signup'>signup page</Link>
        <form onSubmit={(event) => handleSubmit(event)} className='loginbosy'>
            <input type="email" onChange={(e) => setemail(e.target.value)} placeholder='Enter your Email' />
            <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder='Enter your password' />

            <button className='btn' type='submit'>Login</button>
            {error && <p>invalid email or password</p>}
        </form>
    </>
    );
};

export default Login;