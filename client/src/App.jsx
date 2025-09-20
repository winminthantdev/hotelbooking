// src/App.jsx
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router';
import { useState } from "react";

import HomePage from "./pages/HomePage";
import AuthPage from "./features/auth/AuthPage";
import DashboardPage from "./features/dashboard/DashboardPage";
import RoomsPage from "./features/rooms/RoomsPage";
import RoomDetails from "./features/rooms/components/RoomDetails";
import BookingPage from "./features/booking/BookingPage";
import PaymentPage from "./features/payments/PaymentPage";
import ProfilePage from "./features/profile/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  const [user, setUser] = useState(null); // for login state

  return (
    <div className="App">

      <Navbar user={user} />

      <Routes>
        <Route path='/' element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/booking/:roomId" element={<BookingPage />} />
            <Route path="/payment/:bookingId" element={<PaymentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
