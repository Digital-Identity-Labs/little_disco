import { onlySpecified } from '@/utils/origins/common.js'

async function listServices(config, options = {}) {

  const services = config.origins
  const origins = new Map(services.map(s => [s.id, convert(s)]))
  return onlySpecified(origins, config)

}

function convert(service) {
  return renameKeys(service, {
      id: 'id',
      name: 'name',
      logo_url: 'logo',
      ip_hints: 'ip',
      domain_hints: 'dom',
      geo_hints: 'geo',
      keywords: 'kw',
      hide: 'hide'
    }
  )
}

function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key
    return { [newKey]: obj[key] }
  })
  return Object.assign({}, ...keyValues)
}

export {
  listServices
}

