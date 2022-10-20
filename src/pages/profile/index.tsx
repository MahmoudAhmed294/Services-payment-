import {
  Box,
  Stack,
  TextInput,
  Group,
  Text,
  Divider,
  UnstyledButton,
} from "@mantine/core";
import { BiLogOut, BsChevronRight, BsSearch } from "react-icons/all";
import { Link, useNavigate } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import Footer from "../../components/ui/Footer";
import { profileItemsData } from "../../data";
import Header from "./components/Header";

type Props = {};

const Index = (props: Props) => {
  const navigate = useNavigate();
  return (
    <AnimatedComponents noHeader>
      <Header />
      <Box mt={16}>
        <TextInput
          placeholder="Search for service offer"
          icon={<BsSearch size={25} color="#F3F3F3" />}
        />
      </Box>

      <Stack mt={32} spacing={48}>
        {profileItemsData.map(({ title, icon, link }, index) => (
          <Group
            position="apart"
            align="center"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`${link}`)}
            key={index}
          >
            <Group
              align="center"
              sx={{
                svg: {
                  fontSize: 25,
                },
              }}
            >
              {icon}
              <Text>{title}</Text>
            </Group>
            <BsChevronRight />
          </Group>
        ))}
        <div>

        <Divider />
        <UnstyledButton mt={40}>
          <Group>
            <BiLogOut size={25} />
            <Text>logout</Text>
          </Group>
        </UnstyledButton>
        </div>
      </Stack>

      <Footer />
    </AnimatedComponents>
  );
};

export default Index;
