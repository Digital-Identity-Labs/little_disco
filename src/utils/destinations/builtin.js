import { unknownDestination, verifyDestination } from './common.js'

function lookupService(id, config, options = {}) {
  const services = config.destinations
  const found = services.find((item) => item.id === id)

  if (found) {
    if (verifyDestination(found)) {
      return found
    } else {
      if (config.verification_policy === 'none') {
        return unknownDestination(id)
      } else {
        throw new Error('Invalid information for this destination')
      }
    }
  } else {
    throw new Error('Cannot find required information for this destination')
  }

}

export {
  lookupService
}

