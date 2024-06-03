"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import{
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt} from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 955 224 8843",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "dhurir163@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Priyadarshani Nagar, Old Sangvi, Pune - 411027.",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";

const initValues = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};

const initState = { values: initValues, isLoading: false };

const Contact = () => {
  const [state, setState] = useState(initState);

  const { values, isLoading } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

    const onSubmit = async (e) => {
      e.preventDefault();
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        alert('Email sent successfully!');
      } catch (error) {
        alert('Failed to send email. Please try again later.');
      }
      setState((prev) => ({
        ...prev,
        isLoading: false,
        values: initValues, // Reset form after submission
      }));
    };
    
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={onSubmit}
            >
              <h3 className="text-4xl text-accent"> Let&apos;s work together </h3>
              <p className="text-white/60">
                Reach out for collaborations, inquiries, or to connect and discuss potential opportunities!
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email ID"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                value={values.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button
                size="md"
                className="max-w-40"
                isLoading={isLoading}
                type="submit"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
