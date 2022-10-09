import Chart from "../chart/Chart";
import Featured from "../featured/Featured";
import Newmember from "../new member/Newmember";
import Transition from "../transition/Transition";
import "./Home.css";

const Home = () => {
    return (
        <div className="homewrper">
            <div className="mainContaier">
                <Featured title="Revenue" vlu="$2,436" parsent='-1.02' type='false' description='Compare to last month' />
                <Featured title="Sales" vlu="$4,201" parsent='-5.02' type='false' description='Compare to last month' />
                <Featured title="Cost" vlu="$2,173" parsent='0.02' type='true' description='Compare to last month' />
            </div>

            <Chart />

            <div className="member">
                <Newmember />
                <Transition />
            </div>

        </div>
    );
};

export default Home;