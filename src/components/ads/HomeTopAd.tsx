import { AdSlot } from './AdSlot'

export function HomeTopAd() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
      <div style={{ width: '100%', maxWidth: 970, minHeight: 90, padding: '8px 0' }}>
        <AdSlot adUnitId="5215359075" minHeight={90} width={728} height={90} responsive={false} />
      </div>
    </div>
  )
}
