

function listServices(config) {
  return [];
}

function lookupService(id, config) {
    throw new Error('Cannot find entity because no destinations have been configured!');
}

export {
  lookupService,
  listServices
}
