
function buildReturnURL(service, request, destination,  config) {

  const baseURL = request.return || destination.return_url;
  const returnParam = request.returnIDParam || 'entityID';
  const url = baseURL + '&' + returnParam + '=' + encodeURIComponent(service.id);

  return url;
}

export {
  buildReturnURL
};
