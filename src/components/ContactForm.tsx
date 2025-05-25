"use client";
import { useState } from "react";

type ContactState = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactState>({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validateEmail = (email: string) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setError("");
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section className="p-8 bg-white text-black">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-700">Get in Touch</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg"
        noValidate
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-semibold">
            Phone (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {error && <p className="text-red-600 font-medium">{error}</p>}
        {success && <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 rounded bg-orange-600 text-white font-semibold transition ${
            submitting ? "opacity-60 cursor-not-allowed" : "hover:bg-orange-700"
          }`}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
