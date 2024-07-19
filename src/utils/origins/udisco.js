import * as backend from '@/utils/backend'
import { onlySpecified } from './common.js'

async function listServices(config, options = {}) {
  const services = await backend.fetchData(config.origin_provider_url)
  const origins = new Map(services.map(s => [s.id, s]))
  return onlySpecified(origins, config)
}

export {
  listServices
}
