import Content from '@/components/Content'
import Contents from '@/components/Contents'
import Contentss from '@/components/Contentss'
import Contentsss from '@/components/Contentsss'
import Contentssss from '@/components/Contentssss'
import Icon from '@/components/Icon'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Content />
      <Icon />
      <Contents />
      <Contentss />
      <Contentsss />
      <Contentssss />
      <Component {...pageProps} />
    </>
  )
}
