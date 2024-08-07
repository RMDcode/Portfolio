"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa';

import { motion } from "framer-motion";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  phone: yup.string().required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await sendContactForm(data);
      alert('Email sent successfully!');
      reset();
    } catch (error) {
      alert('Failed to send email. Please try again later.');
    }
    setIsLoading(false);
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
              onSubmit={handleSubmit(onSubmit)}
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
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                <Input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                />
                {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                <Input
                  type="email"
                  placeholder="Email ID"
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  {...register("phone")}
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              </div>

              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                {...register("message")}
              />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
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
