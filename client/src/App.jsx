// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar user={user} />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/booking/:roomId" element={<BookingPage />} />
            <Route path="/payment/:bookingId" element={<PaymentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<p>Page Not Found</p>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
