import { Box, Image, Title, Text, Stack } from "@mantine/core";
import { motion } from "framer-motion";

type Props = {
  img: any;
  title: string;
  text: string;
};

const IntroducedScreen = ({ img, title, text }: Props) => {
  return (
    <div>
      <Box mt={32}>
        <Image src={img} fit="contain" height={200} />
      </Box>
      <Stack spacing={10}>
        <Title mt={40} order={1}>
          {title}
        </Title>
        <Text size="sm">{text}</Text>
      </Stack>
    </div>
  );
};

export default IntroducedScreen;
