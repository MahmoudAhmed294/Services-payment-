import { Group, Stack, Title, Text, ActionIcon } from "@mantine/core";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import TotalBalance from "../../components/ui/TotalBalance";
import { creditCardData } from "../../data";
import CreditCard from "../../components/ui/CreditCard";
import Footer from "../../components/ui/Footer";

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
        <ActionIcon
          variant="filled"
          color="dark.3"
          onClick={() => navigate("/addNewCard")}
        >
          <FiPlus />
        </ActionIcon>
        <Text> Add new card</Text>
      </Group>
      <Footer />
    </AnimatedComponents>
  );
};

export default Index;
