import { useCookies } from '@vueuse/integrations/useCookies'



function getOriginIDs(appConfig) {

  if (!appConfig.domain || !appConfig.cdc_read) { return [];}

  const cdc = useCookies.get('_saml_idp')
  console.log(cdc)

  return [];

}

function setOriginIDs(ids, appConfig) {

  if (!appConfig.domain || !appConfig.cdc_write) { return false;}
  useCookies.setCookies.get('_saml_idp', [], {domain: appConfig.cdc_domain, path: '/', sameSite: 'lax'})
  return true;

}

export {
  getOriginIDs,
  setOriginIDs
}