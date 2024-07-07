import { inRange, isIP } from 'range_check'



function maybeFilterByHidden(services, expertMode) {
  if (expertMode === true) {
    return services;
  } else {
    return services.filter(isServiceHidden)
  }
}

function filterByNetwork(services, userIP) {
  return services.filter((service) => {
    if (!isIP(userIP)) {
      return false;
    } else if (!Array.isArray(service.ip) || !service.ip.length) {
      return false;
    } else {
      return inRange(userIP, service.ip);
    }
  });

}

function isServiceHidden(service) {
  return !!(service.hide) === false;
}


export { maybeFilterByHidden, filterByNetwork}
