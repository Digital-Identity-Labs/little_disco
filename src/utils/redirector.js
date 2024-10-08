import { laxReturnURL } from '@/utils/misc.js'

function buildReturnURL(service, request, destination, config) {

  const returnURL = request.return || selectReturnURL(destination)
  const returnParam = request.returnIDParam || 'entityID'
  const url = new URL(returnURL)

  if (!checkReturnURLOK(returnURL, destination)) {
    throw new Error('Unknown return URL')
  }

  url.searchParams.append(returnParam, service.id)
  return url.toString()

}

function buildPassiveReturnURL(service, request, destination, config) {

  const returnURL = request.return || destination.return_urls[0]
  const returnParam = request.returnIDParam || 'entityID'
  const url = new URL(returnURL)

  if (!checkReturnURLOK(returnURL, destination, config)) {
    throw new Error('Unknown return URL')
  }

  if (service) {
    url.searchParams.append(returnParam, service.id)
    return url.toString()
  } else {
    return url.toString()
  }
}

function buildInitiatorURL(service, features = {}) {

  const initiatorURL = selectInitiatorURL(service)

  const url = new URL(initiatorURL)

  for (const [key, value] of Object.entries(features)) {
    url.searchParams.append(key, value)
  }

  //url.searchParams.append(features);
  return url.toString()

}

function buildDefaultInitiatorURLs(service) {

  return {
    'Passive': buildInitiatorURL(service, { isPassive: true }),
    'Forced': buildInitiatorURL(service, { forceAuthn: true }),
    'Password': buildInitiatorURL(service, { authnContextClassRef: 'urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport' }),
    'REFEDS MFA': buildInitiatorURL(service, { authnContextClassRef: 'https://refeds.org/profile/mfa' }),
    'REFEDS SFA': buildInitiatorURL(service, { authnContextClassRef: 'https://refeds.org/profile/sfa' })
  }

}

function checkReturnURLOK(returnURL, destination, config= {}) {

  if (config.verification_policy === 'risky') {
    return true
  }

  if (returnURL === null || returnURL === '') {
    return false
  }

  if (config.verification_policy === 'lax' && destination.return_urls.length === 0) {
    const laxURL = laxReturnURL(destination.id);
    return returnURL.startsWith(laxURL)
  } else {
    return destination.return_urls.some((allowedURL) => returnURL.startsWith(allowedURL))
  }
}

function selectInitiatorURL(service) {
  return service.login_urls[0]
}

function selectReturnURL(service) {
  return service.return_urls[0]
}

export {
  buildReturnURL, buildInitiatorURL, buildDefaultInitiatorURLs, checkReturnURLOK, buildPassiveReturnURL
}
