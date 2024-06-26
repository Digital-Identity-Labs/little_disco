function buildReturnURL(service, request, destination, config) {

  const returnURL = request.return || destination.return_url
  const returnParam = request.returnIDParam || 'entityID'
  const url = new URL(returnURL)

  url.searchParams.append(returnParam, service.id)
  return url.toString()

}

function buildInitiatorURL(service, features = {}) {

  const initiatorURL = service.login_url;

  const url = new URL(initiatorURL);

  for (const [key, value] of Object.entries(features)) {
    url.searchParams.append(key, value);
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

export {
  buildReturnURL,
  buildInitiatorURL,
  buildDefaultInitiatorURLs
}
