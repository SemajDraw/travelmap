import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    my={24}
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading display="inline-block" fontSize="5vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Travel Photos Map',
}
