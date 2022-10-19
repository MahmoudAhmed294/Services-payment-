import {
  Box,
  Group,
  Stack,
  Title,
  UnstyledButton,
  Image,
  Text,
} from "@mantine/core";
import payM1 from "../../../assets/payM1.png";
import payM2 from "../../../assets/payM2.png";
import payM3 from "../../../assets/payM3.png";

type Props = {
  cardNumber: string;
  cardType: "Visa" | "MasterCard" | "Paypal";
};

const CreditCard = ({ cardType, cardNumber }: Props) => {
  return (
    <Group
      position="apart"
      align="center"
      sx={{
        width: "100%",
        backgroundColor: "#282828",
        padding: "16px 24px",
        borderRadius: 12,
      }}
    >
      <UnstyledButton>
        <Group>
          <Image
            src={
              cardType === "Visa"
                ? payM1
                : cardType === "MasterCard"
                ? payM2
                : payM3
            }
            width={50}
          />
          <Text>**** **** **** 1234</Text>
        </Group>
      </UnstyledButton>
      <UnstyledButton>
        <Text color="dark.1" sx={{ textDecoration: "underline" }}>
          Delete
        </Text>
      </UnstyledButton>
    </Group>
  );
};

export default CreditCard;
