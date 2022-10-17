import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";

type Props = {};

const Index = (props: Props) => {
  return (
    <AnimatedComponents>
      <Link to="/login">Go To Login</Link>
    </AnimatedComponents>
  );
};

export default Index;
