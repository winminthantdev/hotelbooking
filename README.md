<p align="center">
  <img src="https://via.placeholder.com/900x200?text=Hotel+Booking+Frontend" alt="Hotel Booking Banner"/>
</p>

<h1 align="center"> Hotel Booking Frontend</h1>
<p align="center">
  A modern <b>Hotel Booking web application frontend</b> built with <b>React.js</b>, 
  following a <b>feature-based folder structure</b> for scalability and maintainability.
</p>

---

##  Table of Contents
- [ Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#️-tech-stack)
- [Installation](#️-installation)
- [ Usage](#-usage)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [License](#-license)

---

##  Features
-  **Authentication** – Login, Register, Logout  
-  **Rooms Management** – Browse rooms, view details  
-  **Booking System** – Reserve rooms with date selection  
-  **Payments** – Handle secure payments  
-  **Dashboard** – Admin & User dashboards with stats and bookings  
-  **Profile Management** – User info, booking history  
-  **Responsive UI** – Built with Tailwind CSS  

---

## 📂 Project Structure
```
src/
 ┣ features/
 ┃ ┣ auth/                # login, register, forgot password
 ┃ ┃ ┣ components/        # LoginForm, RegisterForm
 ┃ ┃ ┣ services/          # authAPI.js
 ┃ ┃ ┣ AuthPage.jsx
 ┃ ┃ ┗ authSlice.js
 ┃ ┣ dashboard/           # dashboard for admin/user
 ┃ ┃ ┣ components/        # StatsCard, RevenueChart, ReservationTable
 ┃ ┃ ┣ services/          # dashboardAPI.js
 ┃ ┃ ┗ DashboardPage.jsx
 ┃ ┣ rooms/               # room listing & details
 ┃ ┃ ┣ components/        # RoomCard, RoomFilter, RoomDetails
 ┃ ┃ ┣ services/          # roomsAPI.js
 ┃ ┃ ┗ RoomsPage.jsx
 ┃ ┣ booking/             # reservation flow
 ┃ ┃ ┣ components/        # BookingForm, BookingSummary
 ┃ ┃ ┣ services/          # bookingAPI.js
 ┃ ┃ ┗ BookingPage.jsx
 ┃ ┣ payments/            # payment system
 ┃ ┃ ┣ components/        # PaymentForm, Invoice
 ┃ ┃ ┣ services/          # paymentAPI.js
 ┃ ┃ ┗ PaymentPage.jsx
 ┃ ┗ profile/             # user profile & bookings history
 ┃ ┃ ┣ components/        # ProfileInfo, BookingHistory
 ┃ ┃ ┣ services/          # profileAPI.js
 ┃ ┃ ┗ ProfilePage.jsx
 ┣ components/             # shared UI components (Navbar, Footer, Button, Modal)
 ┣ hooks/                  # reusable custom hooks
 ┣ services/               # global API config (axios instance, interceptors)
 ┣ utils/                  # helper functions (formatDate, currency, etc.)
 ┣ store/                  # Redux store or Zustand
 ┣ App.jsx
 ┗ main.jsx

```
---

## 🛠️ Tech Stack
- **Frontend**: React.js (Vite), React Router  
- **Styling**: Tailwind CSS  
- **State Management**: Redux Toolkit / Zustand  
- **API Calls**: Axios  
- **Deployment**: Vercel / Netlify  

---

## ⚙️ Installation
Clone the repo and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/hotel-booking-frontend.git

# Navigate into project
cd hotel-booking-frontend

# Install dependencies
npm install   # or yarn install

# Run development server
npm run dev
