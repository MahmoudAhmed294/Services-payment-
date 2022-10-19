import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "../../pages/auth/Login";
import Home from "../../pages/home";
import Onboarding from "../../pages/onboarding";
import Register from "../../pages/auth/Register";
import PhoneVerification from "../../pages/auth/PhoneVerification";
import ServiceBill from "../../pages/billService";
import AmountToPayBill from "../../pages/billService/AmountToPayBill";
import BillDetails from "../../pages/billService/BillDetails";
import Payment from "../../pages/payment";
import AddNewCard from "../../pages/addNewCard";
import Bill from "../../pages/Bill";
import PayAll from "../../pages/payAll";

type Props = {};

const AnimatedRoute = (props: Props) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/phoneVer" element={<PhoneVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/billService" element={<ServiceBill />}>
          <Route index element={<BillDetails />} />
          <Route path="billType" element={<AmountToPayBill />} />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/addNewCard" element={<AddNewCard />} />
        <Route path="/confirmPayment" element={<Bill />} />
        <Route path="/payAll" element={<PayAll />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
