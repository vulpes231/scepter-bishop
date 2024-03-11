import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { reset, sendMessage } from "../../features/contactSlice";

const initialState = {
  name: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation each time element comes into view
    threshold: 0.5, // Adjust threshold as needed
  });
  const [form, setForm] = useState(initialState);

  const { success, loading, error } = useSelector((state) => state.contact);

  console.log(success);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMessage = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(sendMessage());
  };

  const resetInput = () => {
    setForm(initialState);
  };

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => {
        dispatch(reset());
        resetInput();
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [success, dispatch]);

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 4 }}
      className="flex flex-col gap-4 uppercase text-xs"
    >
      <label htmlFor="name">
        Name
        <input
          type={"text"}
          name={"name"}
          placeholder={"enter name"}
          value={form.name}
          onChange={handleInputChange}
          className={
            "bg-transparent w-full border-2  outline-none p-2 uppercase placeholder:text-xs"
          }
        />
      </label>
      <label htmlFor="phone">
        Phone
        <input
          type={"number"}
          name={"phone"}
          placeholder={"enter name"}
          value={form.phone}
          onChange={handleInputChange}
          className={
            "bg-transparent w-full border-2  outline-none p-2 uppercase placeholder:text-xs"
          }
        />
      </label>
      <label htmlFor="message">
        Message
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={form.message}
          onChange={handleInputChange}
          className="w-full bg-transparent border-2 rounded-sm outline-none uppercase text-xs p-2"
          placeholder="Enter Message..."
        ></textarea>
      </label>
      {success && (
        <p className="text-green-500 bg-green-500 bg-opacity-10 p-2">
          Your message has been sent.
        </p>
      )}
      <button
        onClick={handleMessage}
        className="w-full p-4 bg-white text-black cursor-pointer rounded-lg uppercase hover:bg-transparent hover:border-2 hover:text-white"
      >
        {loading ? "Sending message..." : "Send message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
