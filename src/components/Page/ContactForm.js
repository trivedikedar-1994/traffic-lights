import React, { useState, Component } from "react";

function ContactForm () {
  // history.push
  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    emailid: "",
    phone: "",
    city: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault(); 
    event.history.push({
      pathname: '/thank-you',
      formValue
    }); 
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <div className="container">
        <form
          action="/thank-you"
          method="post"
          onSubmit={handleSubmit}
          className="py-5 w-50 m-auto"
        >
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="First name"
              name="fname"
              value={formValue.fname}
              onChange={handleInputChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Last name"
              name="lname"
              value={formValue.lname} 
              onChange={handleInputChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Email"
              name="emailid"
              value={formValue.emailid} 
              onChange={handleInputChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formValue.phone} 
              onChange={handleInputChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formValue.city}
              onChange={handleInputChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />   
          </div>
          <div className="mb-3 pt-0">
            <input type="submit" name="submit" value="Send a message" className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" />
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
