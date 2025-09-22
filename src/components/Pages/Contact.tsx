import { motion } from "framer-motion";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import ContactImg from "../assets/image/contact.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch(
        "https://contact-api-xxey.onrender.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="p-5 sm:px-10 relative ">
      <div className=" sm:mt-[-3rem] flex flex-col mb-8 ">
        <h1 className="text-3xl font-bold">Contact</h1>
        <div className="bg-[#495057] h-2 w-12 mb-1 rounded-full" />
      </div>

      <img
        src={ContactImg}
        alt="Contact Img"
        className="h-[100%] opacity-30 absolute top-0 left-0"
      />

      <div className="flex justify-end">
        <div className=" w-[100%] md:w-[50%] z-10">
          <form onSubmit={handleForm}>
            <input
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-[100%] h-10 font-semibold border-2 border-[#495057] rounded p-2"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-[100%] h-10 font-semibold border-2 border-[#495057] my-3 rounded p-2"
            />
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please drop a message"
              className="w-[100%] h-80 font-semibold border-2 border-[#495057] rounded p-2 resize-none"
            />

            <button
              type="submit"
              className="flex items-center justify-center rounded w-[100%] h-10 border-2 border-[#495057] text-lg font-bold mt-3 hover:bg-gray-50/10 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
              <motion.span
                animate={{ x: [4, 0, 4] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <BiSend className="ml-1" />
              </motion.span>
            </button>
          </form>
        </div>
      </div>
      {success && (
        <p className="text-green-500 mt-3">Message sent successfully!</p>
      )}
      {error && (
        <p className="text-red-500 mt-3">
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

