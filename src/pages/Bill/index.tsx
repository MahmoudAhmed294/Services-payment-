import { Button } from "@mantine/core";
import React from "react";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import Bill from "./Components/Bill";

type Props = {};

const Index = (props: Props) => {
  return (
    <AnimatedComponents>
      <Bill />
      <Bill />
      <Button mt={24}>Done</Button>
    </AnimatedComponents>
  );
};

export default Index;
