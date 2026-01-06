import { AdSlot } from './AdSlot'

export function HomeTopAd() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 728,
        margin: '16px auto',
        display: 'block'
      }}
    >
      <AdSlot adUnitId="5215359075" minHeight={90} width={728} height={90} responsive={false} />
    </div>
  )
}
