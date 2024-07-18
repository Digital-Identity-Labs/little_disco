
function unknownDestination(id) {
  return {
    id: id,
    name: 'Unknown service',
    description: 'Warning: we have no information about this service',
    org_name: 'Unknown',
    return_urls: [],
    login_urls: [],
    info_url: null,
    privacy_url: null,
    org_url: null
  }
}

function verifyDestination(destination) {
  const keys =  Object.keys(destination)
  return keys.includes('id') && keys.includes('return_urls')
}

export {
  unknownDestination,
  verifyDestination
}