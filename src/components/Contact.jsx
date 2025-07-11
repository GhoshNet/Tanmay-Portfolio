import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      alert("Email service is not configured. Please contact me directly at tanmay.actin@gmail.com or through LinkedIn: https://www.linkedin.com/in/tanmay-g");
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
      alert("Request timed out. Please try again or contact me directly at tanmay.actin@gmail.com or through LinkedIn: https://www.linkedin.com/in/tanmay-g");
    }, 10000); // 10 seconds timeout

    try {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            to_name: "Tanmay G",
            from_email: form.email, 
            to_email: "tanmay.actin@gmail.com",
            message: form.message,
          },
          publicKey
        )
        .then(
        () => {
          clearTimeout(timeoutId);
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible. Alternatively, you can reach me at through my LinkedIn profile: https://www.linkedin.com/in/tanmay-g");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          clearTimeout(timeoutId);
          setLoading(false);
          console.error(error);

          if (error.text === "The public key is required") {
            alert("Email service is not configured. Please contact me directly at tanmay.actin@gmail.com or through LinkedIn: https://www.linkedin.com/in/tanmay-g");
          } else if (error.text === "The template is not found") {
            alert("Email template not found. Please contact me directly at tanmay.actin@gmail.com or through LinkedIn: https://www.linkedin.com/in/tanmay-g");
          } else if (error.text === "The service is not found") {
            alert("Email service not found. Please contact me directly at tanmay.actin@gmail.com or through LinkedIn: https://www.linkedin.com/in/tanmay-g");
          } else {
            alert("Something went wrong with the email service. Please contact me directly at tanmay.actin@gmail.com or through LinkedIn: https://www.linkedin.com/in/tanmay-g");
          }
        }
      );
    } catch (error) {
      clearTimeout(timeoutId);
      setLoading(false);
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please contact me directly at tanmay.actin@gmail.com or through LinkedIn: https://www.linkedin.com/in/tanmay-g");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
