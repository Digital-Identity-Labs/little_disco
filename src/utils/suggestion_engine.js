

import * as serviceFilters from '@/utils/service_filter.js'
import { filterByLocation } from '@/utils/service_filter.js'

function initialSuggestionList(services, data, appConfig) {


  const netSelection = serviceFilters.filterByNetwork(services, data.ip);
  const geoSelection = serviceFilters.filterByLocation(services, data.geo, appConfig.geo_distance);

  console.log(geoSelection);

  const all = new Set([
    ...netSelection,
    ...geoSelection
  ]);

  return all;
}







export { initialSuggestionList }
