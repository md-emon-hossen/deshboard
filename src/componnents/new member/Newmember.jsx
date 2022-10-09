import Visibility from "@material-ui/icons/Visibility";
import "./newmember.css";

const Newmember = () => {
    return (
        <div className="newmemberwrp">
            <h1 className="">New Join Members</h1>
            <div className='newmemberitem'>
                <ul>
                    <li>
                        <div className="newmemberprofile">
                            <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000" alt="Avatar" />
                        </div>
                        <div className="newmemberprofileTitle">
                            <h3>Md Emon Hossen</h3>
                            <p>Software Engineer</p>
                        </div>
                        <div className="visible">
                            <Visibility /> Visible
                        </div>
                    </li>
                    <li>
                        <div className="newmemberprofile">
                            <img src="https://i2-prod.walesonline.co.uk/news/uk-news/article23927263.ece/ALTERNATES/s1200c/0_F038F02A-D11F-11EC-A042-0A2111BCB09D.jpg" alt="Avatar" />
                        </div>
                        <div className="newmemberprofileTitle">
                            <h3>Md Emon Hossen</h3>
                            <p>Software Engineer</p>
                        </div>
                        <div className="visible">
                            <Visibility /> Visible
                        </div>
                    </li>
                    <li>
                        <div className="newmemberprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkq96a4bkVzlgF-FiQdyx7KOPb-kk71ONjXteyLZWHUUVrwrkT8xxuXAR2uHYUt5YZ33o&usqp=CAU" alt="Avatar" />
                        </div>
                        <div className="newmemberprofileTitle">
                            <h3>Md Emon Hossen</h3>
                            <p>Software Engineer</p>
                        </div>
                        <div className="visible">
                            <Visibility /> Visible
                        </div>
                    </li>
                    <li>
                        <div className="newmemberprofile">
                            <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="Avatar" />
                        </div>
                        <div className="newmemberprofileTitle">
                            <h3>Md Emon Hossen</h3>
                            <p>Software Engineer</p>
                        </div>
                        <div className="visible">
                            <Visibility /> Visible
                        </div>
                    </li>
                    <li>
                        <div className="newmemberprofile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EWJXakOBhOQvhl8k0GCRsakU9RxV2m-qiQ&usqp=CAU" alt="Avatar" />
                        </div>
                        <div className="newmemberprofileTitle">
                            <h3>Md Emon Hossen</h3>
                            <p>Software Engineer</p>
                        </div>
                        <div className="visible">
                            <Visibility /> Visible
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Newmember;