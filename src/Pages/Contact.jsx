import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required 🤕";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required 🤕";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required 🤕";
    if (!formData.message.trim()) newErrors.message = "Message is required 🤕";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Message sent (not really yet 😅 — backend coming soon)");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="min-h-screen p-8 sm:p-16   bg-gray-300">
      <h2 className="text-3xl sm:text-4xl text-black font-bold text-center mb-10">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-transparent  p-6 rounded-lg shadow-md space-y-6 border border-gray-600 hover:border-gray-800 transition duration-300"
      >
        <div>
          <label className="block text-black font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full text-black p-2 bg-transparent border-gray-600 border rounded "
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-black text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-black font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2  bg-transparent border-gray-600 border text-black rounded "
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-black text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-black font-semibold mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full p-2  bg-transparent border-gray-600 border text-black rounded "
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="text-black text-sm mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label className="block text-black font-semibold mb-1">Message</label>
          <textarea
            name="message"
            className="w-full p-2  bg-transparent border-gray-600 border text-black rounded min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-black text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-black hover:scale-105 transition-transform duration-300 text-white px-6 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
