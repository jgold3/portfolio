"use client";

import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isDisabled = !formData.name || !formData.email || !formData.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
      <input
        className="w-full rounded-md border border-primary px-4 py-2 font-primary text-primary placeholder:text-primary focus:ring-1 focus:ring-primary focus:outline-none sm:max-w-sm"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="w-full rounded-md border border-primary px-4 py-2 font-primary text-primary placeholder:text-primary focus:ring-1 focus:ring-primary focus:outline-none sm:max-w-sm sm:justify-self-end"
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        className="col-span-2 h-72 max-h-72 w-full rounded-md border border-primary px-4 py-2 font-primary text-primary placeholder:text-primary focus:ring-1 focus:ring-primary focus:outline-none"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className="col-start-2 w-24 justify-self-end rounded-md border border-primary px-4 py-2 font-primary text-primary transition-colors active:bg-secondary sm:hover:bg-secondary"
      >
        Send
      </button>
    </div>
  );
}

export default ContactForm;
