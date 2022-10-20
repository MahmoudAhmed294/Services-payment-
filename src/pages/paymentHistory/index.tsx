import {
  Box,
  TextInput,
  Stack,
  Group,
  Title,
  ActionIcon,
  Badge,
} from "@mantine/core";
import { BsSearch, GoSettings, MdKeyboardArrowLeft } from "react-icons/all";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { OurServices } from "../../data";
import PaymentHistoryItem from "./components/PaymentHistoryItem";
import Footer from "../../components/ui/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./components/Filter";
import { Button } from "@mantine/core";

type Props = {};

const Index = (props: Props) => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    document.title = "Payment history";
  }, []);

  return (
    <AnimatedComponents noHeader>
      <Group position="apart" align={"center"}>
        <ActionIcon
          variant="filled"
          color="dark.4"
          onClick={() => navigate(-1)}
        >
          <MdKeyboardArrowLeft size={24} />
        </ActionIcon>

        <Title order={5}>Payment history </Title>
        <ActionIcon onClick={() => setOpenFilter(true)}>
          <GoSettings />
        </ActionIcon>
      </Group>
      <Box mt={24}>
        <TextInput
          placeholder="Search for service offer"
          icon={<BsSearch size={25} color="#F3F3F3" />}
        />
      </Box>
      <Stack mt={24}>
        <Group position="apart" align="center">
          <Title order={4}>Active filter</Title>
          <Button
            variant="subtle"
            size="sm"
            fullWidth={false}
            color="dark.0"
            p={0}
          >
            Clear all
          </Button>
        </Group>
        <Group>
          <Badge
            variant="filled"
            size="xl"
            radius={8}
            sx={{
              paddingLeft: 3,
              paddingRight: 0,
              fontSize: 12,
              alignItems: "center",
            }}
            rightSection={<ActionIcon>x</ActionIcon>}
          >
            All
          </Badge>
          <Badge
            variant="filled"
            size="xl"
            radius={8}
            sx={{ paddingLeft: 3, paddingRight: 0, fontSize: 12 }}
            rightSection={<ActionIcon>x</ActionIcon>}
          >
            5.11.2021 - 8.1.2022
          </Badge>
          <Badge
            variant="filled"
            size="xl"
            radius={8}
            sx={{ paddingLeft: 3, paddingRight: 0, fontSize: 12 }}
            rightSection={<ActionIcon>x</ActionIcon>}
          >
            100EGP - 1000EGP
          </Badge>
        </Group>
      </Stack>
      <Stack mt={24} mb={58}>
        {OurServices.map((value, index) => (
          <PaymentHistoryItem
            icon={value.icon}
            nameBill={value.text}
            status={value.status}
          />
        ))}
      </Stack>
      <Footer />
      <Filter openFilter={openFilter} setOpenFilter={setOpenFilter} />
    </AnimatedComponents>
  );
};

export default Index;
