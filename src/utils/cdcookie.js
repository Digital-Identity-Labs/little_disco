import Cookies from 'universal-cookie';
import * as utf8 from 'utf8';
import * as base64 from 'base-64';

function getOriginIDs(appConfig) {

  if (!appConfig.cdc_domain || !appConfig.cdc_read) {
    return []
  }

  //For now just read locally
  const cookies = new Cookies(null, { path: '/', domain: appConfig.cdc_domain })
  const cdc = cookies.get('_saml_idp')

  if (cdc === undefined) {
    return []
  } else {
    const b64IDs = cdc.split(' ')
    return b64IDs.map((b64id) => base64.decode(b64id))
  }

}

function setOriginIDs(ids, appConfig) {

  if (!appConfig.cdc_domain || !appConfig.cdc_write || ids === [] || ids === null) {
    return false;
  }

  const base64IDs = ids.map((id) => base64.encode(id))
  const processedIDs = base64IDs.join(' ')
  const cookies = new Cookies(null, { path: '/', domain: appConfig.cdc_domain })
  cookies.set('_saml_idp', processedIDs)
  return true

}

export {
  getOriginIDs,
  setOriginIDs
}