import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/header/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return (
    <>
      <NavBar />
      <Grid
        p='4'
        gap='4'
        mx='auto'
        maxW='80rem'
        templateAreas={{
          base: "'main'",
          lg: "'aside main'"
        }}
      >
        <Show above='lg'>
          <GridItem as='aside' gridArea={'aside'} minW='14rem' bg='rgba(0, 0, 0, 0.2)' p='4' rounded='8'>
            Sidebar
          </GridItem>
        </Show>
        <GridItem as='section' gridArea={'main'}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
