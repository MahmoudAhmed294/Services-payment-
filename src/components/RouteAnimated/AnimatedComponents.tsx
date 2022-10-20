import { Container } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";
import Header from "../ui/Header";

type Props = {
  children: React.ReactNode;
  noHeader?: boolean;
  noContainer?: boolean;
  headerTitle?: string;
};

const AnimatedComponents = ({ children, noHeader, noContainer ,headerTitle }: Props) => {

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <>
        {!noHeader && (
          <Container  sx={{ height: "100%" }}>
            <Header headerTitle={headerTitle} />
          </Container>
        )}

        {!noContainer ? (
          <Container size="lg" sx={{ height: "100%" }}>
            {children}
          </Container>
        ) : (
           children 
        )}
      </>
    </motion.div>
  );
};

export default AnimatedComponents;
