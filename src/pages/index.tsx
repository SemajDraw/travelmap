import { Text } from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { MapContainer } from '../components/MapContainer'

const Index = () => {

  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <MapContainer />
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>James ❤️ Aila</Text>
      </Footer>
    </Container>
  )
}

export default Index
