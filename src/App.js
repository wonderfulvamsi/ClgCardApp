import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPg from './screens/LandingPg'
import HomePg from './screens/HomePg'
import BusPg from './screens/BusPg'
import EventsPg from './screens/EventsPg'
import CanteenPg from './screens/CanteenPg'
import LibPg from './screens/LibPg'
import ProfilePg from './screens/ProfilePg'
import PayPg from './screens/PayPage'
import OtpPg from './screens/OtpPg'
import RegPg from './screens/RegPg'
import DonePg from './screens/DonePg'
import DirectPayPg from './screens/DirectPayPg';
import { useState } from 'react';
import ClgCardContext from './ClgCardContext';
function App() {

  const [rollno, setRollno] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [mobileno, setMobileno] = useState('')
  return (
    <>
      <ClgCardContext.Provider value={{ rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPg />} />
            <Route path="/reg" element={<RegPg />} />
            <Route path="/home" element=
              {
                <HomePg />
              } />
            <Route path="/profile" element={<ProfilePg />} />
            <Route path="/pay" element={<PayPg />} />
            <Route path="/bus" element={<BusPg />} />
            <Route path="/events" element={<EventsPg />} />
            <Route path="/canteen" element={<CanteenPg />} />
            <Route path="/lib" element={<LibPg />} />
            <Route path="/otp/:from/:to/:amount" element={<OtpPg />} />
            <Route path="/directpay/:eventname/:cost" element={<DirectPayPg />} />
            <Route path="/done/:status/:on/:to/:amount" element={<DonePg />} />
          </Routes>
        </Router>
      </ClgCardContext.Provider>
    </>
  );
}

export default App;
