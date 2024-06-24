
function parseRequest(queryParams, agentContext) {

  return Object.freeze(new DiscoRequest(queryParams, agentContext));

}

function DiscoRequest(queryParams, agentContext) {

  this.entityID = queryParams.entityID;
  this.return = queryParams.return;
  this.policy = queryParams.policy || 'urn:oasis:names:tc:SAML:profiles:SSO:idp-discovery-protocol:single';
  this.returnIDParam = queryParams.returnIDParam;
  this.isPassive = queryParams.isPassive;
  this.homeMode = queryParams.entityID ? 'origin' : 'destination';
}

export {
  parseRequest
};

