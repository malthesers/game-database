import { Card, CardBody, Skeleton, SkeletonText, useColorMode } from '@chakra-ui/react'

export default function GameCardSkeleton() {
  const { colorMode } = useColorMode()

  return (
    <Card height='20rem' bg={colorMode === 'dark' ? 'purple.900' : 'white'} overflow='hidden' rounded='8' boxShadow='lg'>
      <Skeleton startColor={colorMode === 'dark' ? 'purple.800' : 'gray.400'} endColor={colorMode === 'dark' ? 'purple.600' : 'gray.200'} height='12rem' />
      <CardBody>
        <SkeletonText startColor={colorMode === 'dark' ? 'purple.800' : 'gray.400'} endColor={colorMode === 'dark' ? 'purple.600' : 'gray.200'} />
      </CardBody>
    </Card>
  )
}
