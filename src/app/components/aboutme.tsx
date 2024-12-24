'use client';
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.div
        initial={{ x: -50 , opacity: 0 }}
        animate={{ x: 0 , opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
    <div className="bg-[#00000] color-[#ffffff] pt-40  justify-center items-center flex">
      <Grid container spacing={0}>
        <Grid
          size={{ sm: 12, md: 6 }}
          sx={{
            pl: { xs: 0, sm: 20, md: 30 },
          }}
        >
          <div className="relative mb-24 p-10 items-center">
            <div className="flex flex-row items-center p-2 w-[fit-content] pl-36">
              <Image
                src="/arrow.png"
                alt="Akar's Avatar"
                width={91}
                height={80}
              />
              <p
                className="mt-0 text-2xl text-[#888888]"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Hello! I am{" "}
                <span
                  style={{
                    color: "#6c63ff",
                    fontWeight: "bold",
                    fontFamily: "Preahvihear Regular",
                  }}
                >
                  Akar
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center bg-[url('/background.png')] bg-[length:280px_280px] bg-center w-[250px] h-[250px]">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/avatar.png"
                  alt="Akar's Avatar"
                  width={150}
                  height={150}
                />
              </motion.div>
            </div>
          </div>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            pl: { xs: 10, sm: 20 },
          }}
        >
          <div >
            <h2
              className="text-4xl font-bold mb-10 text-[#ffffff]"
              style={{ fontFamily: "Preahvihear Regular" }}
            >
              A Developer who{" "}
              <span className="text-[#6c63ff]">Builds Apps That Matter</span>
            </h2>
            <p
              style={{
                fontStyle: "italic",
                marginBottom: "30px",
                color: "#aaaaaa",
                fontSize: "1rem",
                fontFamily: "Preahvihear Regular",
              }}
            >
              Because if the code doesn’t speak, what else will?
            </p>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                fontFamily: "Preahvihear Regular",
                color: "#ffffff",
              }}
            >
              I&apos;m a Full-Stack Developer.
            </h1>

            <p
              className="text-[#aaaaaa] max-w-[500px] mt-10"
              style={{ fontFamily: "Preahvihear Regular" }}
            >
              A passionate developer creating impactful digital solutions that
              connect user needs with business goals, driving innovation and
              success.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
    </motion.div>
  );
};

export default Aboutme;
