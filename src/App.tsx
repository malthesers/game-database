import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={'nav'}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={'aside'}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={'main'}>
          Main
        </GridItem>
      </Grid>
    </>
  )
}

export default App
