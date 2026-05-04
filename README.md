# 🐄 QurbaniHat – Livestock Booking Platform

🔗 **Live Site:** https://qurbani-hat-phi.vercel.app/
💻 **GitHub Repository:** https://github.com/misternaimur/QurabaniHat

---

## 📌 Project Overview

**QurbaniHat** is a modern livestock marketplace where users can explore animals (such as cows and goats) for Qurbani. Users can view detailed information and place bookings after authentication.

---

## 🎯 Project Purpose

The goal of this project is to build a fully responsive and user-friendly livestock booking platform with authentication, dynamic routing, and a clean UI/UX.

---

## ✨ Key Features

* 🔐 User Authentication (Email/Password + Google Login)
* 🐐 Browse Animals for Qurbani
* 📊 Sort Animals by Price
* 📄 Detailed Animal Information Page
* 📝 Booking Form (with validation & toast notification)
* 👤 User Profile & Update Information Feature
* 📱 Fully Responsive (Mobile, Tablet, Desktop)
* ⚡ Fast Performance with Next.js 16
* 🔔 Toast Notifications
* ⏳ Loading States
* ❌ Custom Not Found Page

---

## 🧱 Layout Structure

### 🔝 Navbar

* Logo
* Navigation Links: Home, All Animals
* Auth State:

  * Logged In → Avatar + Logout
  * Logged Out → Login & Register

### 🔻 Footer

* Contact Info
* Social Links
* About Section

---

## 🐄 Animal Data

Static JSON data with fields:

* id
* name
* type
* breed
* price
* weight
* age
* location
* description
* image
* category

---

## 🏠 Pages & Functionality

### Home Page

* Hero Section with CTA
* Featured Animals (4 items)
* Qurbani Tips Section
* Top Breeds Section

### All Animals Page

* Animal Cards
* Sort by Price
* Details Button

### Animal Details Page

* Full Animal Info
* Booking Form (Login Required)
* Success Toast (No DB Save)

---

## 🔐 Authentication System

### Login

* Email & Password
* Google Login
* Redirect to Home after success
* Error handling with toast

### Register

* Name, Email, Photo URL, Password
* Redirect to Login after success
* Google Signup option

---

## 👤 My Profile (Challenge Feature)

* View user info (Name, Email, Photo)
* Update Profile:

  * Name
  * Image
* Uses Better Auth update system

---

## 📦 NPM Packages Used

* next
* react
* react-dom
* better-auth
* mongodb
* react-hot-toast
* lottie-react / animate.css (used for UI animation)

---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=https://qurbani-hat-phi.vercel.app
```

---

## 🚀 Deployment

* Hosted on **Vercel**
* Supports dynamic routes without reload errors
* Optimized production build

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/misternaimur/QurabaniHat.git
cd QurabaniHat
npm install
npm run dev
```

---

## ⚠️ Important Notes

* Booking data is not stored in database (as per requirements)
* Authentication required for booking
* Environment variables must be set for production

---

## 🧠 Challenges Faced

* Better Auth setup with Next.js 16
* Environment variable configuration on Vercel
* Dynamic routing without reload errors
* Responsive UI design across all devices

---

## 📬 Contact

**LinkedIn:** https://www.linkedin.com/in/misternaimur/

---

## ⭐ Final Words

This project demonstrates full-stack development concepts including authentication, dynamic routing, state management, and responsive UI design using modern tools like Next.js and Better Auth.

---
