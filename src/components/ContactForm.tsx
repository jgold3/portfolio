"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useCsrfToken } from "@/hooks";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type ContactFormProps = {
  csrfToken?: string;
};

export function ContactForm({}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const csrfToken = useCsrfToken();

  const isDisabled = !formData.name || !formData.email || !formData.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const response: { message: string } = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      },
      credentials: "include",
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    console.log(response);
    setIsLoading(false);
  };
  console.log(isLoading);

  return (
    <Card className="w-full sm:w-4xl">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>
          I&apos;m always looking for new opportunities and collaborations. If you have any questions or want to work
          together, please fill out the form below, and I&apos;ll get back to you as soon as possible (probably).
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full flex-col gap-4 sm:grid sm:max-w-4xl sm:grid-cols-2">
        <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <Textarea
          className="h-96 max-h-96 min-h-32 sm:col-span-2 sm:h-72 sm:max-h-72"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button className="col-start-2 justify-self-end" size="lg" onClick={handleSubmit} disabled={isDisabled}>
          Send
          <Send />
        </Button>
      </CardContent>
    </Card>
  );
}
