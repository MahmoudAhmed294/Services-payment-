import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "../../pages/auth/Login";
import Home from "../../pages/home";
import Onboarding from "../../pages/onboarding";

type Props = {};

const AnimatedRoute = (props: Props) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
