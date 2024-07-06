function hideFilter(service) {
  return !!(service.hide) === false;
}

function maybeHide(services, expertMode) {

  if (expertMode === true) {
    return services;
  } else {
    return services.filter(hideFilter)
  }
}

export { maybeHide,  hideFilter}
