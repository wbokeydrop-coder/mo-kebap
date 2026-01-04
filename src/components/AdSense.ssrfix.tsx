import dynamic from 'next/dynamic'

const AdSenseNoSSR = dynamic(() => import('./AdSense'), {
  ssr: false
})

export default AdSenseNoSSR
