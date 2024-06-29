function hideFilter(service) {
  return !!(service.hide) === false;
}

function maybeHide(services, expertMode) {

  console.log('1')

  if (expertMode === true) {
    console.log('a')
    return services;
  } else {
    console.log('b')
    return services.filter(hideFilter)
  }
}

export { maybeHide,  hideFilter}
