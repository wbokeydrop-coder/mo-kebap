// Ad configuration for Google AdSense
// WAŻNE: Zastąp slot ID poniżej rzeczywistymi ID z Twojego konta AdSense
// Po utworzeniu jednostek reklamowych w panelu AdSense
const ADS = {
  publisherId: 'ca-pub-3490607792366389',
  slots: {
    // Top banner on Home - Format: Display/Banner (728x90 lub responsive)
    home_top: '1234567890', // ZASTĄP tym z AdSense
    // Footer banner (shown only on home/menu) - Format: Display/Banner  
    footer: '2345678901', // ZASTĄP tym z AdSense
    // Menu inline banner - Format: In-article/Display
    menu_top: '3456789012', // ZASTĄP tym z AdSense
    // Menu rectangle/side - Format: Square/Rectangle (300x250)
    menu_rect: '4567890123' // ZASTĄP tym z AdSense
  },
  
  // Test mode - ustaw na true podczas testowania
  testMode: false,
  
  // Czy używać responsive ads
  useResponsive: true,
  
  // Minimalne rozmiary dla pokazywania reklam
  minWidth: 320,
  minHeight: 100
}

export default ADS
