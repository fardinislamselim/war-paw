# 🐾 WarmPaws – Pet Care in Winter

## 🌍 Live Demo

🔗 **Visit Website:** [https://warm-paws-ph.netlify.app/](https://warm-paws-ph.netlify.app/)   

---

## 🌨️ About the Project

**WarmPaws** is a cozy and modern single-page application (SPA) designed to help pet owners care for their furry friends during the cold season.  
It provides an all-in-one hub for exploring **local winter pet care services**, **pet clothing**, **grooming options**, and **expert winter care tips**.  

The design emphasizes **minimalism**, **warm visuals**, and **approachability**, making it a delightful experience across all devices.


---

## ✨ Key Features

✅ **Home Page**
- Winter-themed hero slider using **Swiper.js**.
- Popular Winter Care Services — loaded dynamically from a local JSON file.
- Service cards showing image, name, rating, price, and “View Details”.
- Extra informative sections:
  - “Winter Care Tips for Pets”
  - “Meet Our Expert Vets”
  - “Winter Clothing Collection”

✅ **Service Details (Protected Route)**
- Accessible only when logged in.
- Shows all service info from JSON.
- Includes a “Book Service” form:
  - Fields: Name, Email  
  - “Book Now” button → shows success toast and clears form.

✅ **Authentication (Firebase)**
- **Login Page:**  
  - Email, Password, Forget Password, Google Sign-in  
  - Redirects to intended route on login success  
  - Password toggle eye button  
- **Signup Page:**  
  - Fields: Name, Email, Photo URL, Password  
  - Password validation:  
    - 1 Uppercase  
    - 1 Lowercase  
    - Minimum 6 characters  
  - Google sign-up option  
- **Forgot Password Page:**  
  - Email field pre-filled if coming from login  
  - Redirects user to Gmail after reset request  

✅ **My Profile Page**
- Displays logged-in user info (Name, Email, Photo)
- “Update Profile” button → allows changing name or photo using `updateProfile()`
- Fully functional logout option

✅ **Other Highlights**
- Toast notifications via **react-hot-toast**
- Smooth animations using **AOS** and **Animate.css**
- SPA with persistent Navbar & Footer (no reload errors)
- Firebase configuration secured via environment variables
- Deployed on **Netlify** (authorized domain added in Firebase)

---


## 🛠️ Technologies Used

| Category | Tools / Technologies |
|-----------|----------------------|
| **Frontend Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS, DaisyUI |
| **Routing** | React Router DOM |
| **Authentication** | Firebase Authentication (Email/Password, Google OAuth) |
| **State Management** | React Context API |
| **Animations** | AOS, Animate.css |
| **Slider / Carousel** | Swiper.js |
| **Notifications** | React Hot Toast |
| **Deployment** | Netlify |
| **Version Control** | Git & GitHub |

---

## 🗂️ Screens & Routes

| Route | Page | Access |
|-------|------|--------|
| `/` | Home | Public |
| `/services/:id` | Service Details | 🔒 Protected |
| `/login` | Login | Public |
| `/register` | Signup | Public |
| `/profile` | My Profile | 🔒 Protected |
| `/forgot-password` | Forgot Password | Public |
