import { Stack, Title ,Text, TextInput, Button, Container } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const AmountToPayBill = (props: Props) => {
    const navigate = useNavigate();
  return (
    <div>
        <Stack
        sx={{ backgroundColor: "#323232", padding: 16, width: "100%" }}
        spacing={14}
        mt={16}
      >
        <Title order={5}>How much would you like to pay?</Title>
        <Text size="xs">Amount of money</Text>
        <TextInput  />
      </Stack>
      <Container size="lg">

      <Button mt={"50%"} onClick={()=>navigate('/Payment')}>
      Pay now
      </Button>
      </Container>
    </div>
  )
}

export default AmountToPayBill