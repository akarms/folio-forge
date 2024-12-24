import React from "react";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { BackgroundGradient } from "./ui/background-gradient";

const Skills = () => {
  return (
    <div className="grid p-10 h-[3040px] sm:h-auto pt-28  md:pt-8 md:p-28 xl:p-32 ">
      <span
        className="text-white text-7xl text-center"
        style={{ fontFamily: "Preahvihear Regular" }}
      >
        My Skills
      </span>

      <span
        className="text-[#6c63ff] text-2xl text-center pt-10"
        style={{ fontFamily: "Preahvihear Regular" }}
      >
        Technologies{" "}
        <span
          className="text-[#acadad] text-2xl text-center pt-10"
          style={{ fontFamily: "Preahvihear Regular" }}
        >
          I’ve been working with recently
        </span>
      </span>

      <Grid
        container
        spacing={2}
        sx={{
          padding: { lg: 10 },
          justifyContent: "center",
          paddingBottom: { lg: 20 },
        }}
      >
        <Grid size={{ sm: 12, lg: 6 }}>
          <BackgroundGradient className="rounded-[22px] p-2 bg-black lg:h-80  w-full">
            <div className="flex flex-row justify-center p-2 w-full pb-10">
              <span
                className="text-[#f8f8f8] text-lg"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Languages
              </span>
            </div>

            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center", 
                paddingBottom: { lg: 1 },
              }}
            >
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/js.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/ts.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/java.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
            </Grid>
          </BackgroundGradient>
        </Grid>

        <Grid size={{ sm: 12, lg: 6 }}>
          <BackgroundGradient className="rounded-[22px]  p-2 bg-black lg:h-80 ">
            <div className="flex flex-row justify-center p-2 w-full xl:pb-10 lg:pb-30">
              <span
                className="text-[#f8f8f8] text-lg"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Frontend
              </span>
            </div>

            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                paddingBottom: { lg: 1 },
              }}
            >
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/html.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>{" "}
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/css.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/react.svg"}
                    alt="react"
                    width={100}
                    height={100}
                    className="rounded-2xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/tailwind.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/mui.svg"}
                    alt="react"
                    width={100}
                    height={100}
                    className="rounded-2xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/nextjs.svg"}
                    alt="nextjs"
                    width={100}
                    height={100}
                    className="rounded-full bg-[#f8f8f8] p-[1px]"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/bootstrap.svg"}
                    alt="react"
                    width={100}
                    height={100}
                    className="rounded-2xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/figma.svg"}
                    alt="react"
                    width={100}
                    height={100}
                    className="rounded-2xl"
                  />
                </WobbleCard>
              </Grid>
            </Grid>
          </BackgroundGradient>
        </Grid>

        <Grid size={{ sm: 12, lg: 6 }}>
          <BackgroundGradient className="rounded-[22px]  p-2 bg-black lg:h-80">
            <div className="flex flex-row justify-center p-2 w-full pb-10">
              <span
                className="text-[#f8f8f8] text-lg"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Databases
              </span>
            </div>

            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                paddingBottom: { lg: 1 },
              }}
            >
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/mysql.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/postgresql.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-2xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/firebase.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/mongodb.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
            </Grid>
          </BackgroundGradient>
        </Grid>

        <Grid size={{ sm: 12, lg: 6 }}
        sx={{
            width: "100%",
        }}
        >
          <BackgroundGradient className="rounded-[22px] p-2 bg-black lg:h-80 ">
            <div className="flex flex-row justify-center p-2 w-full pb-10">
              <span
                className="text-[#f8f8f8] text-lg"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Backend
              </span>
            </div>

            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center", 
                paddingBottom: { lg: 1 },
              }}
            >
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/nodejs.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/express.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl bg-white p-2"
                  />
                </WobbleCard>
              </Grid>
           
            </Grid>
          </BackgroundGradient>
        </Grid>


        <Grid size={{ sm: 12, lg: 6 }}>
          <BackgroundGradient className="rounded-[22px] p-2 bg-black lg:h-80">
            <div className="flex flex-row justify-center p-2 w-full pb-10">
              <span
                className="text-[#f8f8f8] text-lg"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Others
              </span>
            </div>

            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center", 
                paddingBottom: { lg: 1 },
              }}
            >
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/git.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/jira.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/redux.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
              <Grid size={{ sm: 3, md: 3, lg: 2 }}>
                <WobbleCard>
                  <Image
                    src={"/techIcons/postman.svg"}
                    alt="react"
                    width={100}
                    height={200}
                    className="rounded-3xl"
                  />
                </WobbleCard>
              </Grid>
            </Grid>
          </BackgroundGradient>
        </Grid>

      </Grid>
    </div>
  );
};

export default Skills;
