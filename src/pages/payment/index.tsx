import {
  Box,
  Group,
  Stack,
  Title,
  UnstyledButton,
  Image,
  Text,
  ActionIcon,
  Button,
} from "@mantine/core";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import TotalBalance from "../../components/ui/TotalBalance";
import { creditCardData } from "../../data";
import CreditCard from "./components/CreditCard";

type Props = {};

const Index = (props: Props) => {
    const navigate = useNavigate();
  return (
    <AnimatedComponents>
      <TotalBalance payOption />
      <Title order={4} mt={16}>
        Choose your payment method
      </Title>
      <Stack mt={16}>
        {creditCardData.map(({ cardNumber, id, cardType }) => (
          <CreditCard cardType={cardType} key={id} cardNumber={cardNumber} />
        ))}
      </Stack>
      <Group mt={24}>
        <ActionIcon variant="filled" color="dark.3" onClick={()=>navigate('/addNewCard')}>
          <FiPlus />
        </ActionIcon>
        <Text> Add new card</Text>
      </Group>

      <Button onClick={()=>navigate('/confirmPayment')} mt={48}>Confirm</Button>
    </AnimatedComponents>
  );
};

export default Index;
