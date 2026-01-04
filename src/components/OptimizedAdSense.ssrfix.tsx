import dynamic from 'next/dynamic'

const OptimizedAdSenseNoSSR = dynamic(() => import('./OptimizedAdSense'), {
  ssr: false
})

export default OptimizedAdSenseNoSSR
