"use client";

import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const isDisabled = !formData.name || !formData.email || !formData.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const response: { message: string } = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    console.log(response);
    setIsLoading(false);
  };
  console.log(isLoading);

  return (
    <div className="flex w-full flex-col gap-4 sm:grid sm:max-w-4xl sm:grid-cols-2">
      <input
        className="w-full rounded-md border border-primary px-4 py-2 font-primary text-primary shadow-md placeholder:text-primary focus:ring-1 focus:ring-primary focus:outline-none sm:max-w-sm dark:shadow-accent"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="w-full rounded-md border border-primary px-4 py-2 font-primary text-primary shadow-md placeholder:text-primary focus:ring-1 focus:ring-primary focus:outline-none sm:max-w-sm sm:justify-self-end dark:shadow-accent"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        className="h-96 max-h-96 min-h-32 w-full rounded-md border border-primary px-4 py-2 font-primary text-primary shadow-md placeholder:text-primary focus:ring-1 focus:ring-primary focus:outline-none sm:col-span-2 sm:h-72 sm:max-h-72 dark:shadow-accent"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className="ml-auto w-24 rounded-md border border-primary px-4 py-2 font-primary text-primary shadow-md transition-colors active:bg-secondary sm:col-start-2 sm:justify-self-end sm:hover:bg-secondary dark:shadow-accent"
      >
        Send
      </button>
    </div>
  );
}

export default ContactForm;
