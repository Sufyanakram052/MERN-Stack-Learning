import React, { createContext, useReducer } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home/Home";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Farmer from "./components/Usertype/Farmer";
import Crops from './components/Crops/Crops'
import Mycontact from "./components/Usertype/Pages/myContacts/Mycontact";
import MyProfile from "./components/Usertype/Pages/Profile/Profile"
import Logout from "./components/login/Logout";
import InsPes from "./components/Services/Insecticides-Pesticides/InsPes";
import Seedrate from "./components/Services/Seed-Rates/Seedrate";
import Fertilizerrates from "./components/Services/Fertilizer-Rates/Fertilizerrates";
import Cropsrates from "./components/Services/Crops-rates/Cropsrates";
import ErrorPage from "./components/Error/errorPage";
import Barely from "./components/Crops/Crops/Barely";
import Comment from "./components/Advices/Comment";
import CreatePost from "./components/Advices/CreatePost";
import { initialState, reducer  } from "../src/reducer/UseReducer";


export const UserContext = createContext();

  const Routing = () => {
    return (
 
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="signup" element={<Signup />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="/contactus" element={<ContactUs />} />

        <Route path = '/crops'  element = {<Crops />} />

        <Route path = '/barely'  element = {<Barely />} />

        <Route path="/farmer-broker" element={<Farmer />} />

        <Route path="/my-contacts" element={<Mycontact />} />

        <Route path="/my-profile" element={<MyProfile />} />

        <Route path="/inspesrates" element={<InsPes />} />

        <Route path="/seedsrates" element={<Seedrate />} />

        <Route path="/cropsrates" element={<Cropsrates />} />

        <Route path="/createpost" element={<CreatePost />} />
        
        <Route path="/allpost" element={<Comment />} />

        <Route path="/fertilizerrates" element={<Fertilizerrates />} />
      
        
        <Route path="*" element={<ErrorPage />} />

      </Routes>

    );
  };

const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>

      <UserContext.Provider value = {{state, dispatch} }>
        <Navbar />
        <Routing />
        <Footer />
      </UserContext.Provider>
      
    </>
  );
}

export default App;
