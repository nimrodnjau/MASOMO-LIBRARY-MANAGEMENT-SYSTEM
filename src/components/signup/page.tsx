"use client"
import React, { useState } from 'react'
import Image from "next/image"; 
import mlms from "../../../public/images/mlms.jpg";
const Signup: React.FC = () => {
  

  return (
    <div className="flex h-screen items-center justify-center w-full">
    {/* Left Section: Image */}
    <div className="bg-red-900 w-2/3 h-full">
      <Image
        src={mlms}
        alt="Description"
        className="h-full w-full object-cover"
      />
    </div>
  
    {/* Right Section: Form */}
    <div className="bg-white w-1/3 h-full flex items-center">
      <form className="form mx-auto max-w-lg bg-white p-6 rounded-lg ">
        <p className="title text-2xl font-bold text-center text-blue-800 mb-4">
          MASOMO SIGNUP
        </p>
        <p className="message text-center text-gray-600 mb-6">
          Signup now and get full access to our app.
        </p>
        <div className="flex flex-wrap gap-4 mb-4">
          <label className="flex-1">
            <input
              className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              type="text"
              placeholder="First Name"
            />
          </label>
          <label className="flex-1">
            <input
              className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              type="text"
              placeholder="Last Name"
            />
          </label>
        </div>
        <label className="block mb-4">
          <input
            className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="block mb-4">
          <input
            className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            type="password"
            placeholder="Password"
          />
        </label>
        <label className="block mb-4">
          <input
            className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            type="password"
            placeholder="Confirm Password"
          />
        </label>
        <button
          className="submit w-full p-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 mb-4"
          type="submit"
        >
          Submit
        </button>
        <p className="signin text-center text-gray-600">
          Already have an account?{" "}
          <a className="text-blue-800 hover:underline" href="/">
            Login
          </a>
        </p>
      </form>
    </div>
  </div>
  
    
  )
}





export default Signup







// import { useHistory } from 'react-router-dom'; // Import for routing, if needed

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
  
//   const [error, setError] = useState('');
  
//   const history = useHistory(); // Used for navigating to login page

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     setError('');
//     // Handle form submission logic here, like sending data to the server
//     console.log('Form submitted:', formData);
//     // blueirect to login page after successful sign-up
//     history.push('/login');
//   };

//   return (
//     <div className="sign-up-container">
//       <h2>Create an Account</h2>
//       <form onSubmit={handleSubmit} className="sign-up-form">
//         <div className="form-group">
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             requiblue
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             requiblue
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             requiblue
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             requiblue
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {error && <p className="error">{error}</p>}

//         <button type="submit" className="submit-btn">Sign Up</button>
//       </form>

//       <div className="login-link">
//         <p>
//           Already have an account?{' '}
//           <a href="/login" className="login-link">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

