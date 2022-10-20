import { ActionIcon, Group, Stack, Title, Text } from "@mantine/core";
import React from "react";
import { FiPlus } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { creditCardData } from "../../data";
import CreditCard from "./CreditCard";
import TotalBalance from "./TotalBalance";

type Props = {};

const CreditCardList = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div>
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
        <ActionIcon
          variant="filled"
          color="dark.3"
          onClick={() => navigate("/addNewCard")}
        >
          <FiPlus />
        </ActionIcon>
        <Text> Add new card</Text>
      </Group>
    </div>
  );
};

export default CreditCardList;
