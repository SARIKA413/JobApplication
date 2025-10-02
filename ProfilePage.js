import React, { useState } from "react";

const ProfilePage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile submitted: " + JSON.stringify(form, null, 2));
  };

  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Complete Your Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-600 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="React, Node, MongoDB"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Experience</label>
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Tell us about your experience"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
