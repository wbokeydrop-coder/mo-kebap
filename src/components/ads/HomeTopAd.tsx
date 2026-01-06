import { AdSlot } from './AdSlot'

export function HomeTopAd() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '16px 0', padding: '0 8px' }}>
      <div style={{ width: '100%', maxWidth: 728 }}>
        <AdSlot adUnitId="5215359075" minHeight={90} />
      </div>
    </div>
  )
}
