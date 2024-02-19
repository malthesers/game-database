import { Card, CardBody, Skeleton } from '@chakra-ui/react'

export default function GameCardSkeleton() {
  return (
    <Card height='20rem'>
      <Skeleton height='12rem'>
        <CardBody></CardBody>
      </Skeleton>
    </Card>
  )
}
