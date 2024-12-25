/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Grid from "@mui/material/Grid2";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from '@mui/material/Snackbar';


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const access_key = "2bcdab4e-0709-426e-ae09-2083d2e9895a"

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.id]: target.value });
  };

  const data = {
    access_key: access_key, 
    name: formData.fullName,
    email: formData.email,
    message: formData.message,
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
    
        if (result.success) {
          setStatus("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" }); // Reset the form
        } else {
          setStatus("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setStatus("Failed to send message. Please try again.");
      }
  };

  return (
    <div className="pt-20">
      <div className="flex flex-col items-center justify-center">
        <span
          className="text-white text-5xl md:text-7xl text-center "
          style={{ fontFamily: "Preahvihear Regular" }}
        >
          Let's Get In <span className="text-[#6c63ff]">Touch</span>
        </span>

        <span
          className=" text-xl md:text-2xl text-center pt-10 p-10 md:p-0 md:pt-10 md:pb-10 text-[#f8f8f8]"
          style={{ fontFamily: "Preahvihear Regular" }}
        >
          I'd <span className="text-[#6c63ff] p-5">love to hear</span> from you!
          Feel free to reach out.
        </span>
      </div>

      <Grid container spacing={2} className="pt-10 ">
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="flex flex-col justify-center h-full items-center">
            <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black lg:pl-44 ">
              <div className="flex flex-row gap-10">
                <motion.div
                  initial={{ scale: 1, boxShadow: "0px 0px 10px black" }}
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #6c63ff" }}
                  className="rounded-full"
                  onClick={() => window.open("mailto:akarsihar@gmail.com")}
                >
                  <EmailIcon
                    className="text-white bg-[#6c63ff] rounded-full p-3 cursor-pointer"
                    sx={{ fontSize: { xs: "50px", md: "100px" } }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span
                    className="text-[#6c63ff] text-base xl:text-xl"
                    style={{ fontFamily: "Preahvihear Regular" }}
                  >
                    Email
                  </span>
                  <span
                    className="text-white text-lg xl:text-2xl cursor-pointer"
                    style={{ fontFamily: "Preahvihear Regular" }}
                    onClick={() => window.open("mailto:akarsihar@gmail.com")}
                  >
                    akarsihar@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black lg:pl-44 ">
              <div className="flex flex-row gap-10">
                <motion.div
                  initial={{ scale: 1, boxShadow: "0px 0px 10px black" }}
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #6c63ff" }}
                  className="rounded-full"
                  onClick={() => window.open("tel:+94765525997")}
                >
                  <LocalPhoneOutlinedIcon
                    className="text-white bg-[#6c63ff] rounded-full p-3"
                    sx={{ fontSize: { xs: "50px", md: "100px" } }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span
                    className="text-[#6c63ff]  text-base xl:text-xl"
                    style={{ fontFamily: "Preahvihear Regular" }}
                  >
                    Phone Number
                  </span>
                  <span
                    className="text-white text-lg xl:text-2xl cursor-pointer"
                    style={{ fontFamily: "Preahvihear Regular" }}
                    onClick={() => window.open("tel:+94765525997")}
                  >
                    (+94){"\u00A0"}76{"\u00A0"}552{"\u00A0"}5997
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            padding: { xs: "20px", md: "0px" },
            paddingRight: { xl: "250px" },
          }}
        >
          {status === "Sending..." ? (
            <div className="max-w-md w-full mx-auto  rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
              <CircularProgress sx={{
                color: "#6c63ff",
                display: "block",
                margin: "auto",
              }} />
            </div>
          ) : (
            <div className="max-w-md w-full mx-auto  rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border-2 border-[#6c63ff]">
              <span
                className="text-white flex justify-center text-2xl"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Message me
              </span>

              <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 mb-4">
                  <LabelInputContainer>
                    <Label htmlFor="fullname">Your Name</Label>
                    <Input
                      id="fullName"
                      placeholder="YourName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      placeholder="example@gmail.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="fullname">Your Massage</Label>
                    <Input
                      id="message"
                      placeholder="Type your message here..."
                      type="textarea"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>
                </div>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <motion.button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                  style={{ fontFamily: "Preahvihear Regular" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  Send Message &rarr;
                  <BottomGradient />
                </motion.button>
              </form>
            </div>
          )}
        </Grid>
      </Grid>
      <Snackbar
        open={status !== ""}
        autoHideDuration={3000}
        onClose={() => setStatus("")}
        message={status}
        ContentProps={{
            sx: {
              fontFamily: "Preahvihear Regular",
              color: "#6c63ff",
              backgroundColor: "black",
              borderRadius: "10px",
            },
          }}
      />
    </div>
  );
};

export default Contact;
