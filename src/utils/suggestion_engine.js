import * as serviceFilters from '@/utils/service_filter.js'

function initialSuggestionList(services, data, appConfig) {

  const serviceRecords = Array.from(services.values());

  const cdcSelection = serviceFilters.filterByIDs(serviceRecords, data.cdc)
  const netSelection = serviceFilters.filterByNetwork(serviceRecords, data.ip)
  const geoSelection = serviceFilters.filterByLocation(serviceRecords, data.geo, appConfig.geo_distance)

  const all = new Set([
    ...netSelection,
    ...geoSelection,
    ...cdcSelection
  ])

  return all
}

export { initialSuggestionList }
