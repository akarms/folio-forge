import React from "react";
import Grid from "@mui/material/Grid2";
import Chip from "@mui/material/Chip";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "next/image";
import { LinkPreview } from "../components/ui/link-preview";

const Projects = () => {
  return (
    <div className="">
    <div className="grid p-10 sm:h-auto pt-28  md:pt-8 md:p-28 xl:p-20" >
      <div className="flex flex-col items-center justify-center">
        <h1
          className="md:text-7xl text-5xl text-center text-white"
          style={{ fontFamily: "Preahvihear Regular" }}
        >
          My Featured
          <span className="text-[#6c63ff]"> Projects</span>
        </h1>
      </div>

      <Grid
        container
        sx={{
          paddingTop: { xs: 10, md: 20 },
        }}
      >
        <Grid size={{ xs: 12 }}
        sx={{
            borderColor: "#02f7a6",
            borderWidth: { xs: 1, md: 0 },
            padding: { xs: 3, sm:4,  md: 0 },
            borderRadius: 10,
            marginBottom: 10,
        }}
        >
          <Grid container spacing={7}>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="flex items-center justify-center pl-3 h-full rounded-2xl">
                <div className="bg-gradient-to-t from-[#6c63ff] to-black w-full p-[1px] rounded-2xl">
                  <div className="bg-black rounded-2xl justify-center p-4 flex flex-col ">
                    <h1
                      className="text-white text-xl text-center p-4"
                      style={{ fontFamily: "Preahvihear Regular" }}
                    >
                      <LinkPreview
                        url="https://ems.vpa.ac.lk/session/signin"
                        imageSrc="/projectimages/loonslab.png"
                        isStatic
                        className="font-bold"
                      >
                        <span className="text-[#6c63ff]">
                          Welfare Management{" "}
                        </span>{" "}
                      </LinkPreview>
                      System
                    </h1>
                    <span
                      className="text-white ali"
                      style={{
                        fontFamily: "Preahvihear Regular",
                        textAlign: "justify",
                      }}
                    >
                      Contributed to building a scalable system for managing
                      hostels and scholarships with secure authentication
                      (Keycloak, JWT) and a user-friendly interface as part of a
                      team as Year Project in UOM.
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                      <Chip
                        label="React"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff", // Custom outline color
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold "
                      />
                      <Chip
                        label="Material-UI"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="Node.js"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="PostgreSQL"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="Keycloak"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="JWT"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}
            onClick={() => window.open("https://ems.vpa.ac.lk/session/signin")}
            sx={{ pl: { xs: 3, } }}
            >
              <CardContainer className="inter-var w-full rounded-2xl ">
                <CardBody className="bg-black min-w-fit p-2 group/card h-auto rounded-xl border-2 border-[#6c63ff]">
                  <CardItem as="p" translateZ="100" className="bg-transparent">
                    <Image
                      src="/projectimages/loonslab.png"
                      alt="Welfare Management System"
                      width={500}
                      height={500}
                      className="rounded-xl transform translate-y-[-50px] translate-x-[-50px] shadow-lg shadow-[#6c63ff]"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}
        sx={{
            borderColor: "#02f7a6",
            borderWidth: { xs: 1, md: 0 },
            padding: { xs: 3, sm:4,  md: 0 },
            borderRadius: 10,
            marginBottom: {lg:10 , md:0 , xs:0 , sm:0},
        }}
        >
          <Grid container spacing={7}>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="flex items-center justify-center pl-3 h-full rounded-2xl">
                <div className="bg-gradient-to-t from-[#6c63ff] to-black w-full p-[1px] rounded-2xl">
                  <div className="bg-black rounded-2xl justify-center p-4 flex flex-col ">
                    <h1
                      className="text-white text-xl text-center p-4"
                      style={{ fontFamily: "Preahvihear Regular" }}
                    >
                      <LinkPreview
                        url="https://github.com/akarms/MovieCatch"
                        imageSrc="/projectimages/moviecatch.png"
                        isStatic
                        className="font-bold"
                      >
                        <span className="text-[#6c63ff]">
                        MovieCatch{" "}
                        </span>{" "}
                      </LinkPreview>
                      App
                    </h1>
                    <span
                      className="text-white ali"
                      style={{
                        fontFamily: "Preahvihear Regular",
                        textAlign: "justify",
                      }}
                    >
                      Developed a cross-platform React Native app for movie enthusiasts to explore,
                    search, and manage their favorite films with secure authentication (Firebase) and a modern, user-friendly interface.
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                      <Chip
                        label="React Native"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff", // Custom outline color
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold "
                      />
                      <Chip
                        label="Firebase"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="Tailwind CSS"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                   
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}
            onClick={() => window.open("https://github.com/akarms/MovieCatch")}
            sx={{ pl: { xs: 3, } }}
            >
              <CardContainer className="inter-var w-full rounded-2xl ">
                <CardBody className="bg-black min-w-fit p-2 group/card h-auto rounded-xl border-2 border-[#6c63ff]">
                  <CardItem as="p" translateZ="100" className="bg-transparent">
                    <Image
                      src="/projectimages/moviecatch.png"
                      alt="Welfare Management System"
                      width={200}
                      height={200}
                      className="rounded-xl transform translate-y-[-50px] translate-x-[-50px] shadow-lg shadow-[#6c63ff]"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Grid>
          </Grid>
        </Grid>

        <div className="hidden lg:block">
        <Grid size={{ xs: 12 }}
        sx={{
            borderColor: "#02f7a6",
            borderWidth: { xs: 1, md: 0 },
            padding: { xs: 3, sm:4,  md: 0 },
            borderRadius: 10,
            marginBottom: 10,
        }}
        >
          <Grid container spacing={7}>
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="flex items-center justify-center pl-3 h-full rounded-2xl">
                <div className="bg-gradient-to-t from-[#6c63ff] to-black w-full p-[1px] rounded-2xl">
                  <div className="bg-black rounded-2xl justify-center p-4 flex flex-col ">
                    <h1
                      className="text-white text-xl text-center p-4"
                      style={{ fontFamily: "Preahvihear Regular" }}
                    >
                      <LinkPreview
                        url="https://github.com/akarms/PharmaConnect-WebApp"
                        imageSrc="/projectimages/pharmaconnect.png"
                        isStatic
                        className="font-bold"
                      >
                        <span className="text-[#6c63ff]">
                        PharmaConnect{" "}
                        </span>{" "}
                      </LinkPreview>
                        System
                    </h1>
                    <span
                      className="text-white ali"
                      style={{
                        fontFamily: "Preahvihear Regular",
                        textAlign: "justify",
                      }}
                    >
                    Currently developing an integrated digital platform to improve operational efficiency for medium-sized pharmacies and dispensaries in Sri Lanka.
                     The platform focuses on e-prescriptions,
                     patient record tracking, automated prescription reminders, and doctor appointment booking, with secure authentication and intuitive workflows.
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                      <Chip
                        label="React"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff", // Custom outline color
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold "
                      />
                      <Chip
                        label="Material-UI"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="Node.js"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="MySQL"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      <Chip
                        label="Google Identity Services"
                        variant="outlined"
                        sx={{
                          borderColor: "#6c63ff",
                          color: "#6c63ff",
                          borderWidth: 2,
                          cursor: "none",
                        }}
                        className="hover:bg-white hover:text-black font-bold"

                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}
            onClick={() => window.open("https://github.com/akarms/PharmaConnect-WebApp")}
            sx={{ pl: { xs: 3, } }}
            >
              <CardContainer className="inter-var w-full rounded-2xl ">
                <CardBody className="bg-black min-w-fit p-2 group/card h-auto rounded-xl border-2 border-[#6c63ff]">
                  <CardItem as="p" translateZ="100" className="bg-transparent">
                    <Image
                      src="/projectimages/pharmaconnect.png"
                      alt="Welfare Management System"
                      width={500}
                      height={500}
                      className="rounded-xl transform translate-y-[-50px] translate-x-[-50px] shadow-lg shadow-[#6c63ff]"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Grid>
          </Grid>
        </Grid>
        </div>

      
      </Grid>

         

    </div>
    </div>
  );
};

export default Projects;
