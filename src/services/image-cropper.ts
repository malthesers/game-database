export default function cropImage(url: string) {
  return url.replace('/media/', '/media/crop/600/400/')
}
