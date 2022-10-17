import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";

type Props = {};

const Login = (props: Props) => {
  return (
    <div>
      <AnimatedComponents>
        <div>
        <Link to="/">Go To Home</Link>
        </div>
      </AnimatedComponents>
    </div>
  );
};

export default Login;
