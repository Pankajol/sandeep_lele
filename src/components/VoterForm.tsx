"use client";
import { useState } from "react";

type VoterFormState = {
  name: string;
  voterId: string;
  mobile: string;
  area: string;
};

export default function VoterForm() {
  const [form, setForm] = useState<VoterFormState>({
    name: "",
    voterId: "",
    mobile: "",
    area: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Voter Form Submitted:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-md rounded p-6"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-orange-700">
          Voter Registration Form
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 border border-gray-300 p-3 rounded"
          required
        />
        <input
          type="text"
          name="voterId"
          placeholder="Voter ID"
          value={form.voterId}
          onChange={handleChange}
          className="w-full mb-4 border border-gray-300 p-3 rounded"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full mb-4 border border-gray-300 p-3 rounded"
          required
        />
        <input
          type="text"
          name="area"
          placeholder="Constituency/Area"
          value={form.area}
          onChange={handleChange}
          className="w-full mb-6 border border-gray-300 p-3 rounded"
          required
        />
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded transition">
          Submit
        </button>
      </form>
    </div>
  );
}
