import { Image } from '@chakra-ui/react'
import cropImage from '../../services/image-cropper'

interface GameScreenshotProps {
  url: string
}

export default function GameScreenshot({ url }: GameScreenshotProps) {
  return <Image h='48' src={cropImage(url)} objectFit='cover'></Image>
}
