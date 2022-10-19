import {
  FaBuilding,
  IoIosWater,
  GiElectric,
  FaWrench,
  RiParkingBoxLine,
  MdSportsTennis,
  BsCreditCard2FrontFill,
} from "react-icons/all";

export const myFlats = [
  {
    text: "Rehab",
    icon: <FaBuilding />,
    link: "Rehab",
  },
  {
    text: "Madinaty",
    icon: <FaBuilding />,
    link: "Madinaty",
  },
  {
    text: "Noor",
    icon: <FaBuilding />,
    link: "Noor",
  },
];

export const OurServices = [
  {
    text: "Water",
    icon: <IoIosWater />,
    link: "/billService",
  },
  {
    text: "Electricity",
    icon: <GiElectric />,
    link: "/billService",
  },
  {
    text: "Maintenance",
    icon: <FaWrench />,
    link: "/billService",
  },
  {
    text: "Parking",
    icon: <RiParkingBoxLine />,
    link: "/billService",
  },
  {
    text: "Club Renewal",
    icon: <MdSportsTennis />,
    link: "/billService",
  },
  {
    text: "Others",
    icon: <BsCreditCard2FrontFill />,
    link: "/billService",
  },
];


export const BillDetailsData =[
  {
    title:"Customer name:",
    value:"Loaa hany"
  },
  {
    title:"Service address:",
    value:"Talaat Mostafa Rd, Madinty"
  },
  {
    title:"Flat number:",
    value:"3"
  },
  {
    title:"Bill date:",
    value:"January 16, 2022"
  },
  {
    title:"Water access code:",
    value:"000123742"
  },
  {
    title:"Bill number:",
    value:"B83423478"
  },
  {
    title:"Payment due:",
    value:"January 27, 2022"
  },
]

interface CreditCardDataType{
  id:number;
  cardNumber: string;
  cardType:"Visa" | "MasterCard" | "Paypal" 
}
export const  creditCardData:CreditCardDataType[] = [
  {
    id:Math.random(),
    cardNumber: "1234 1234 1234 1234",
    cardType:"Visa"
  },
  {
    id:Math.random(),
    cardNumber: "1234 1234 1234 1234",
    cardType:"MasterCard"
  },
  {
    id:Math.random(),
    cardNumber: "1234 1234 1234 1234",
    cardType:"Paypal"
  }
]