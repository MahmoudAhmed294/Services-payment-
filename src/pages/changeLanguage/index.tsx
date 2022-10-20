import React from "react";
import { Radio, Stack } from "@mantine/core";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";

type Props = {};

const Index = (props: Props) => {
  return (
    <AnimatedComponents>
      <Stack mt={32}>
        <Radio.Group
          orientation="vertical"
          spacing="xl"
          sx={{
            ".mantine-Radio-body": {
              justifyContent: "space-between",
            },
          }}
          value="English"
        >
          <Radio value="English" label="English" labelPosition="left" />
          <Radio value="Arabic" label="Arabic" labelPosition="left" />
        </Radio.Group>
      </Stack>
    </AnimatedComponents>
  );
};

export default Index;
