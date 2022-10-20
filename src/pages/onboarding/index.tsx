import { ActionIcon, Box, Button, Group, Stack } from "@mantine/core";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import IntroducedScreen from "./IntroducedScreen";
import screen1 from "../../assets/screen1.svg";
import screen2 from "../../assets/screen2.svg";
import screen3 from "../../assets/screen3.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {};

const Index = (props: Props) => {
  const [NextPage, setNextPage] = useState(0);
  const navigate = useNavigate();

  return (
    <AnimatedComponents noHeader>
      <Stack
        justify={NextPage !== 2 ? "space-between" : "flex-start"}
        sx={{ height: "100%" }}
        pb={24}
      >
        <Group position="right">
          {NextPage !== 2 && (
            <Button
              variant="subtle"
              size="xs"
              color="gray.5"
              onClick={() => setNextPage(2)}
              fullWidth={false}
            >
              Skip
            </Button>
          )}
        </Group>

        {NextPage === 0 ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <IntroducedScreen
              img={screen1}
              title={"Easy way to manage your finance"}
              text={`Manage your every activities and transaction easily with this app`}
            />
          </motion.div>
        ) : NextPage === 1 ? (
          <IntroducedScreen
            img={screen2}
            title={"Simple way to help control your savings"}
            text={`Keep track of your expenses in details and create goals.`}
          />
        ) : (
          NextPage === 2 && (
            <IntroducedScreen
              img={screen3}
              title={"Easy transfers in a few steps"}
              text={`Transfer and receive money as easily as possible.`}
            />
          )
        )}
        {NextPage !== 2 ? (
          <Group position="apart" align="center" mt={24}>
            <Group align="center">
              {Array(3)
                .fill("")
                .map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundImage: "linear-gradient(#AD712F, #F1BF75)",
                      opacity: index === NextPage ? 1 : 0.3,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                    }}
                  />
                ))}
            </Group>
            <ActionIcon
              variant="filled"
              size="lg"
              radius={"xl"}
              sx={{
                backgroundColor: "#fff",
              }}
              onClick={() => setNextPage(NextPage + 1)}
            >
              <IoIosArrowForward color={"#1E1E1E"} size={24} />
            </ActionIcon>
          </Group>
        ) : (
          <Stack my={24} spacing={24}>
            <Button onClick={() => navigate("/register")}>Register</Button>
            <Button color="dark.2" onClick={() => navigate("/login")}>
              Sign in
            </Button>
          </Stack>
        )}
      </Stack>
    </AnimatedComponents>
  );
};

export default Index;
