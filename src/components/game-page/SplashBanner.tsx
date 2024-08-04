import { Box, Image, useColorMode } from '@chakra-ui/react'

interface SplashBannerProps {
  imageUrl: string
}

export default function SplashBanner({ imageUrl }: SplashBannerProps) {
  const { colorMode } = useColorMode()

  return (
    <Box
      zIndex='-10'
      position='fixed'
      top='0'
      width='100vw'
      height='70dvh'
      display='grid'
      gridTemplateColumns='1fr'
      gridTemplateRows='1fr'
    >
      <Image
        src={imageUrl}
        objectFit='cover'
        zIndex='-10'
        position='absolute'
        width='100%'
        height='100%'
        gridArea='1/1/1/1'
      />
      <Box
        bgGradient={
          colorMode === 'dark'
            ? 'linear(to-b, transparent, purple.800)'
            : 'linear(to-b, transparent, gray.200)'
        }
        position='absolute'
        width='100%'
        height='100%'
        gridArea='1/1/1/1'
      />
    </Box>
  )
}
