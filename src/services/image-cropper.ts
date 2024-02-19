export default function cropImage(url: string) {
  return typeof url === 'string' ? url.replace('/media/', '/media/crop/600/400/') : ''
}
