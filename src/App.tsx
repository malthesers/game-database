import { Grid, GridItem, Show } from '@chakra-ui/react'
import Header from './components/header/Header'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
  return (
    <>
      <Header />
      <Grid
        p='4'
        gap='4'
        mx='auto'
        maxW='90rem'
        templateAreas={{
          base: "'main'",
          md: "'aside main'"
        }}
      >
        <Show above='md'>
          <GridItem as='aside' gridArea={'aside'} minW='14rem' h='fit-content' bg='rgba(0, 0, 0, 0.2)' p='4' rounded='8'>
            <GenreList />
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
