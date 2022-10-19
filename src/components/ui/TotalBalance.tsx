import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Text,
  Stack,
  Group,
} from "@mantine/core";
import CardBackground from "../../assets/bgCard.svg";

type Props = {
  payOption?: boolean;
};

const TotalBalance = ({payOption}: Props) => {
  return (
    <Group position="center" mt={24}>
      <BackgroundImage
        src={CardBackground}
        radius={8}
        sx={{ height: 150, padding: 16, width: "85%" }}
      >
        <Center sx={{height:"100%"}}>
          <Box sx={{ width: "70%"  }}>
            <Stack justify="center" align="center" spacing={0} mb={!payOption ? 16 : 0}>
              <Text size={"xs"}>Total Balance</Text>
              <Text size={"xl"}>14,234.00 EGP</Text>
            </Stack>
            {!payOption && (
              <Button color="dark.0" sx={{ color: "#1E1E1E" }}>
                Pay All
              </Button>
            )}
          </Box>
        </Center>
      </BackgroundImage>
    </Group>
  );
};

export default TotalBalance;
