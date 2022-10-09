import { Link } from 'react-router-dom';
import './updateModal.css';

const UpdateModal = () => {
    return (
        <div className='updateModalWrpter'>
            <Link className='createbtn' to='/signup'><button>Create</button></Link>
            <div className="singleUpdateData">

                <h1>Edit</h1>
                <div className='inputwrp'>
                    <input type="text" />
                    <label>User Name</label>

                </div>
                <div className='inputwrp'>

                    <input type="text" />
                    <label>Full Name</label>
                </div>
                <div className='inputwrp'>

                    <input type="email" />
                    <label>Email</label>
                </div>
                <div className='inputwrp'>

                    <input type="tel" />
                    <label>Phone</label>
                </div>
                <div className='inputwrp'>

                    <input type="text" />
                    <label>Address</label>
                </div>
                <div className='uplodeAndUpdate'>

                    <input className='file' type="file" />
                    <Link to='/user'><button className='updatebtn'>Update</button></Link>
                </div>
            </div>

        </div>
    );
};

export default UpdateModal;