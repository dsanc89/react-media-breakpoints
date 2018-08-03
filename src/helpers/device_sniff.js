import MobileDetect from 'mobile-detect'

const deviceSniff = (userAgent, {onPhone, onTablet}) => {
  const mobileDetection = new MobileDetect(userAgent.toLowerCase())

  if (mobileDetection.phone() !== null) {
    onPhone()
    return
  }

  if (mobileDetection.tablet() !== null) {
    onTablet()
    return
  }
}

export default deviceSniff