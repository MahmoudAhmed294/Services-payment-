import { Container } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AnimatedComponents = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 , height: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Container size="lg" sx={{height:"100%"}}>{children}</Container>
    </motion.div>
  );
};

export default AnimatedComponents;
