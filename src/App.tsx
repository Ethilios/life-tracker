import { Box, Container, Heading, Text } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <Container
      className='main-container'
      centerContent
    >
      <Box padding='4'>
        <Heading>Life Tracker</Heading>
      </Box>
      <Box padding='4'>
        <Text fontSize='xl'>Tracked Data goes here!</Text>
      </Box>
    </Container>
  )
}

export default App
