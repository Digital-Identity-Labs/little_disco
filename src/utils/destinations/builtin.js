

function lookupService(id, config) {
  const services = config.destinations;
  const found = services.find((item) => item.id === id)

  if (found) {
    return found
  } else {
    throw new Error('Cannot find entity')
  }

}

export {
  lookupService
}

