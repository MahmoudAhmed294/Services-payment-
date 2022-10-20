import { Stack ,Text } from '@mantine/core'
import React from 'react'
import AnimatedComponents from '../../components/RouteAnimated/AnimatedComponents'
import ChatInput from './components/ChatInput'
import Message from './components/Message'

type Props = {}

const Index = (props: Props) => {
  return (
    <AnimatedComponents headerTitle={'TMD Customer service'}>
        <Text size="xs" color="dark.1" align='center'>online</Text>
        <Stack spacing={8} mt={24}>
        <Message fromCustomerService text='Hello! Welcome to TMD' />
        <Message fromCustomerService  text='How can I help you?'/>
        <Message text='Problem with service'/>
        <Message text="Have your own question" />
        </Stack>
        <ChatInput />
    </AnimatedComponents>
  )
}

export default Index