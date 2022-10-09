import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
const RequireUser = ({ children }) => {
    const auth = getAuth();
    const cuser = auth.currentUser;
    const currentuser = cuser;

    return currentuser ? children : <Navigate to="/login" />
}

export default RequireUser;