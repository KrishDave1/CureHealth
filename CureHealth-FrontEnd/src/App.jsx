/** @format */
import React from "react";
import Footer from "./components/Footer";
import CureHealthSection from "./components/CureHealthSection";
import { Navbar } from "./components/Navbar";
import { useGlobalContext } from "./context";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import VideoCalling from "./components/VideoCalling.jsx";
import VideoCallingForm from "./components/VideoCallingForm";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Primary from "./pages/Primary";
import Mental from "./pages/Mental";
import Contact from "./pages/Contact";
import Chatroom from "./pages/Chatroom";
import Dermatology from "./pages/Dermatology";
import Urgent from "./pages/Urgent";
import RegisterPage from "./pages/RegisterPage";
import RegisterDoc from "./pages/RegisterDoc";
import Sidebar from "./components/sidebar";
import FileUpload from "./pages/FileUpload";
import Account from "./pages/Account";
import Appointments from "./pages/Appointments";
import Messages from "./pages/Messages";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/primarycare'
          element={
            <>
              <Navbar />
              <Primary />
              <Footer />
            </>
          }
        />
        <Route
          path='/urgentcare'
          element={
            <>
              <Navbar />
              <Urgent />
              <Footer />
            </>
          }
        />
        <Route
          path='/mentalhealth'
          element={
            <>
              <Navbar />
              <Mental />
              <Footer />
            </>
          }
        />
        <Route path='/registerdoc' element={<RegisterDoc />} />
        <Route
          path='/dermatology'
          element={
            <>
              <Navbar />
              <Dermatology />
              <Footer />
            </>
          }
        />

        <Route
          path='/contact-us'
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path='*'
          element={
            <>
              <PrivateRoute>
                {/* <Sidebar /> */ }
                <Route
                  path='/dashboard'
                  element={
                    <div className=''>
                      <Dashboard />
                      <Sidebar />
                    </div>
                  }
                >
                  <Route path='myaccount' element={<Account />} />
                  <Route path='messages' element={<Messages />} />
                  <Route path='appointments' element={<Appointments />} />
                  <Route path='fileupload' element={<FileUpload />} />
                </Route>

                {/* <Route path="/video" element={<VideoCalling />} />
              <Route path="/videoform" element={<VideoCallingForm />} />
              <Route path="/chatroom" element={<Chatroom />} /> */}
              </PrivateRoute>
            </>
          }
        />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      {/* <CureHealthSection /> */}
    </>
  );
};

export default App;
