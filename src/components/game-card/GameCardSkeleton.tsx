import { Card, CardBody, Skeleton, useColorMode } from '@chakra-ui/react'

export default function GameCardSkeleton() {
  const { colorMode } = useColorMode()

  return (
    <Card height='20rem' w='100%' maxW='22rem' bg={colorMode === 'dark' ? 'purple.900' : 'white'} overflow='hidden' boxShadow='lg' transitionDuration='200ms'>
      <Skeleton height='12rem'>
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  )
}
