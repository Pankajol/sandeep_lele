"use client";
import { useState } from "react";

type MeetingFormState = {
  name: string;
  mobile: string;
  reason: string;
  date: string;
};

export default function MeetingForm() {
  const [form, setForm] = useState<MeetingFormState>({
    name: "",
    mobile: "",
    reason: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Meeting Request Submitted:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full mb-2 border p-2"
        required
      />
      <input
        type="text"
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        className="w-full mb-2 border p-2"
        required
      />
      <input
        type="text"
        name="reason"
        value={form.reason}
        onChange={handleChange}
        placeholder="Reason"
        className="w-full mb-2 border p-2"
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full mb-2 border p-2"
        required
      />
      <button className="bg-orange-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
