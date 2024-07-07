

import * as serviceFilters from '@/utils/service_filter.js'

function initialSuggestionList(services, data, appConfig) {


  const netSelection = serviceFilters.filterByNetwork(services, data.ip);

  console.log(netSelection)

  return netSelection;
}







export { initialSuggestionList }
