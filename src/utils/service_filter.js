import { inRange, isIP } from 'range_check'
import { insideCircle, createLocation } from 'geolocation-utils'


function maybeFilterByHidden(services, expertMode) {
  if (expertMode === true) {
    return services
  } else {
    return services.filter(isServiceHidden())
  }
}

function filterByNetwork(services, userIP) {
  return services.filter((service) => {
    if (!isIP(userIP)) {
      return false
    } else if (!Array.isArray(service.ip) || !service.ip.length) {
      return false
    } else {
      return inRange(userIP, service.ip)
    }
  })

}

function filterByLocation(services, userGeo, distance = 50000) {
  return services.filter((service) => {
    if (!userGeo) {
      return false
    } else if (!Array.isArray(service.geo) || !service.geo.length) {
      return false
    } else {
      return service.geo.some((coords) => insideCircle(formatSAMLTextToGeo(coords), createLocation(userGeo.lat, userGeo.lon, 'LatLon'), distance))
    }
  })

}

function isServiceHidden(service) {
  return !!(service.hide) === false
}

function formatSAMLTextToGeo(coords) {
  const [lat, lon] = coords.split(',')
  return createLocation(parseFloat(lat), parseFloat(lon), 'LatLon')
}

export { maybeFilterByHidden, filterByNetwork, filterByLocation }
