// Ad configuration for Google AdSense - OPTIMIZED
// Configuration includes 6 optimized placements with lazy loading, A/B testing, and custom channels
const ADS = {
  publisherId: 'ca-pub-3490607792366389',
  
  // Ad slots configuration with custom channels and formats
  slots: {
    // Legacy/unused fallbacks
    footer: '3849133055',
    menu_top: '7948160161',
    menu_rect: '3767396093',
    gallery_inarticle: '8939831729',

    // Current placements (replace placeholders with real slot IDs from AdSense UI)
    hero_auto: '5513568514',
    menu_infeed_1: '3767396093',
    menu_infeed_2: '7948160161',
    contact_infeed: '8939831729',
    footer_auto: '3849133055',
    anchor_mobile: '8994821989',
    home_top: '5215359075',
    inline_banner_index_html: '3902277401'
  },

  // Custom channels for granular tracking and performance monitoring
  channels: {
    hero_auto: 'mokebab-hero',
    menu_infeed_1: 'mokebab-menu',
    menu_infeed_2: 'mokebab-menu-2',
    contact_infeed: 'mokebab-mid',
    footer_auto: 'mokebab-footer',
    anchor_mobile: 'mokebab-mid',
    home_top: 'mokebab-mid',
    inline_banner_index_html: 'mokebab-hero',
    menu_rect: 'mokebab-menu'
  },

  // Ad formats - responsive formats for different placements
  formats: {
    hero_auto: 'auto',           // Responsive auto format (high RPM)
    menu_infeed: 'fluid',        // In-feed format between content
    gallery_inarticle: 'fluid',  // Article format between images
    contact_infeed: 'fluid',     // In-feed format before contact
    footer_auto: 'auto',         // Responsive auto at footer
    anchor_mobile: 'auto'        // Sticky anchor for mobile
  },

  // Lazy loading configuration
  lazyLoading: {
    enabled: true,
    rootMargin: '400px 0px',  // Preload ads 400px before visibility
    minHeightDesktop: 280,     // Placeholder height on desktop
    minHeightMobile: 200       // Placeholder height on mobile
  },

  // A/B Test Configuration - Layout Key Testing
  abTest: {
    enabled: true,
    control: '-gu-18+5g-2f-83',   // Control variant key
    variant: '-gu-3+5g-2f-90',    // Variant key for testing
    splitTraffic: 50              // 50/50 split
  },

  // Layout protection settings
  layoutProtection: {
    maxHeight: 'auto',
    overflow: 'hidden',
    containerClass: 'adsense-container'
  },

  // Test mode - set to true during development/testing
  testMode: false,
  
  // Responsive ads enabled by default
  useResponsive: true,
  
  // Minimum dimensions for ad display
  minWidth: 320,
  minHeight: 100
}

export default ADS
