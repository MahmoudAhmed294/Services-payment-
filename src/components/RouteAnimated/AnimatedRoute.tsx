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
import MyCreditCard from "../../pages/myCreditCard";
import MessageCenter from "../../pages/MessageCenter";
import Chat from "../../pages/chat";
import PaymentHistory from "../../pages/paymentHistory";
import Profile from "../../pages/profile";
import EditPersonalInfo from "../../pages/editPersonalInfo";
import ChangeLanguage from "../../pages/changeLanguage";

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
        <Route path="/myCreditCard" element={<MyCreditCard />} />
        <Route path="/billService" element={<ServiceBill />}>
          <Route index element={<BillDetails />} />
          <Route path="billType" element={<AmountToPayBill />} />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/addNewCard" element={<AddNewCard />} />
        <Route path="/confirmPayment" element={<Bill />} />
        <Route path="/payAll" element={<PayAll />} />
        <Route path="/messageCenter" element={<MessageCenter />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/paymentHistory" element={<PaymentHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editPersonalInfo" element={<EditPersonalInfo />} />
        <Route path="/language" element={<ChangeLanguage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
