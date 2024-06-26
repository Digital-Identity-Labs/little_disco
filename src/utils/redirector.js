
function buildReturnURL(service, request, destination,  config) {

  const returnURL = request.return || destination.return_url;
  const returnParam = request.returnIDParam || 'entityID';
  const url = new URL(returnURL);

  url.searchParams.append(returnParam, service.id);
  return url.toString();

}

export {
  buildReturnURL
};
