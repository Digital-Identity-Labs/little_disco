function onlySpecified(services, appConfig) {

  const filteredServices = new Map()

  if (Array.isArray(appConfig.origins_only) && appConfig.origins_only.length > 0 ) {

    appConfig.origins_only.forEach((id) => {
        const obj = services.get(id)
        if (obj) {
          filteredServices.set(id, obj)
        }
      }
    )

    return filteredServices;

  } else {
    return services;
  }
}

export {
  onlySpecified
}
