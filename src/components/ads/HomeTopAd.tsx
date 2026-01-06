import { AdSlot } from './AdSlot'

export function HomeTopAd() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
      <div style={{ width: 728, maxWidth: '100%', minHeight: 90 }}>
        <AdSlot adUnitId="5215359075" minHeight={90} />
      </div>
    </div>
  )
}
