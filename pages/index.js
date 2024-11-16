import { AppLayout } from "@/layouts/AppLayout"
import { Button, Heading, VStack } from "@chakra-ui/react"
import { useWallet, useWalletAuth } from "@xw3/maki"
import { QuestorPoints } from "@xw3/maki-quest"

export default function Home() {

  const wallet = useWallet()

  return (
    <AppLayout>
      <Heading>Home</Heading>
      <VStack>
        <Heading size="4xl"><QuestorPoints /></Heading>
        <Button onClick={wallet.connect}>Button</Button>
        <Heading size="sm">Total Points</Heading>
      </VStack>
    </AppLayout>
  )
}