import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import RequireUser from './componnents/validRouter/RequireUser';
import Login from "./page/Login";
import MainDelectUser from "./page/MainDelectUser";
import MainProduct from "./page/MainProduct";
import MainUpdateUser from "./page/MainUpdateUser";
import MailUser from './page/MainUser';
import MianHome from "./page/MianHome";
import Signup from "./page/Signup";



function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireUser><MianHome /></RequireUser>} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<RequireUser><MailUser /></RequireUser>} />
        <Route path="/product" element={<RequireUser><MainProduct /></RequireUser>} />
        <Route path="/updateuser" element={<RequireUser><MainUpdateUser /></RequireUser>} />
        <Route path="/delectuser" element={<RequireUser><MainDelectUser /></RequireUser>} />
      </Routes>
    </BrowserRouter>,
  </>
}

export default App;
