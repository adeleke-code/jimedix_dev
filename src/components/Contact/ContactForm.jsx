import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, such as sending the data to a server
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="max-w-xl md:mx-auto my-10 md:my-20 mx-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            cols={10}
            rows={5}
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full px-4 py-2 rounded hover:bg-secondary transition duration-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
