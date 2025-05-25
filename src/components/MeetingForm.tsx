// components/MeetingForm.tsx
"use client";
import { useState } from "react";

type MeetingFormState = {
  name: string;
  mobile: string;
  reason: string;
  date: string;
};

export default function MeetingForm() {
  const [form, setForm] = useState<MeetingFormState>({ name: "", mobile: "", reason: "", date: "" });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Meeting Request Submitted");
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto">
      <input type="text" placeholder="Name" className="w-full mb-2 border p-2" required />
      <input type="text" placeholder="Mobile" className="w-full mb-2 border p-2" required />
      <input type="text" placeholder="Reason" className="w-full mb-2 border p-2" required />
      <input type="date" className="w-full mb-2 border p-2" required />
      <button className="bg-orange-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}