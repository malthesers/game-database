import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      <Box padding={4}>
        <Heading>Oops...</Heading>
        <Text>{isRouteErrorResponse(error) ? 'Page not found' : 'An unexpected error occurred.'}</Text>
      </Box>
    </>
  )
}
