type ConsentBarProps = {
  hasConsent: boolean
  onAccept: () => void
}

export function ConsentBar({ hasConsent, onAccept }: ConsentBarProps) {
  if (hasConsent) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '12px',
        background: '#111',
        color: '#fff',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <span>Diese Website verwendet AdSense. Stimmen Sie zu?</span>
      <button
        onClick={onAccept}
        style={{ marginLeft: 12, padding: '8px 14px', cursor: 'pointer' }}
      >
        Akzeptieren
      </button>
    </div>
  )
}
