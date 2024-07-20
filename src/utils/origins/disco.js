import * as backend from '@/utils/backend'
import { onlySpecified } from './common.js'

async function listServices(config, options = {}) {
  const services = await backend.fetchData(config.origin_provider_url)
  const origins = new Map(services.map(s => [s.entityID, convert(s)]))
  return onlySpecified(origins, config)
}


function convert(service, lang = 'en') {
  return {
    id: service.entityID,
    name: (selectText(service.DisplayNames, lang) || service.entityID),
    desc: (selectText(service.Descriptions, lang) || '-'),
    logo: (selectLogo(service.Logos, lang) || null),
    kw: (selectText(service.Keywords, lang) || ''),
    hide: (isHidden(service.EntityAttributes))
  }

}

function selectText(discoOriginValues, lang) {
  const attrs = (discoOriginValues || [])
  const pick = attrs.find((a) => a.lang === lang) || attrs.find((a) => a.lang === 'en') || attrs[0]
  return pick ? pick.value : null
}

function selectLogo(discoOriginValues, lang) {
  const attrs = (discoOriginValues || [])
  attrs.sort((a, b) => a.width - b.width)
  const pick = attrs.find((a) => a.lang === lang) || attrs.find((a) => a.lang === 'en') || attrs[0]
  return pick ? pick.value : null
}

function isHidden(discoOriginValues) {
  const attrs = (discoOriginValues || [])
  const values = attrs['http://macedir.org/entity-category'] || []
  return values.some((value) => value === 'http://refeds.org/category/hide-from-discovery')
}

export {
  listServices
}
