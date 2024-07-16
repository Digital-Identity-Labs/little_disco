

function listServices(config, options={}) {
  return config.destinations;
}

function lookupService(id, config, options={}) {
  const services = listServices(config)
  const found = services.find((item) => item.id === id)

  if (found) {
    return found
  } else {
    throw new Error('Cannot find entity')
  }

}

export {
  lookupService,
  listServices
}

