"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleNumberlChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNumber(event.target.value);
  };

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { email, name, address, number });
    // Reset the form after submission (if needed)
    setEmail("");
    setName("");
    setAddress("");
    setNumber("");
  };

  return (
    <>
      <div className="px-4 lg:px-8 py-10 lg:py-14 text-center lg:text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-300 ">
          Genuine Parts
        </h1>
        <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-600 ">
          The Best Spare Parts
        </h2>
      </div>
      <div className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row mb-48 mt-11">
        <div className="w-full lg:w-1/2 relative">
          <div className="w-full h-full lg:absolute lg:inset-0 lg:p-8">
            <div className="w-full h-full sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-full lg:h-full">
              <img
                src="/part.png"
                alt="hero"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          {/* Rest of your content */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Number
              </label>
              <input
                type="number"
                id="number"
                value={number}
                onChange={handleNumberlChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your Number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@suzuki.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your Address"
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
