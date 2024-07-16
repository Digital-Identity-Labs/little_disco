

function listServices(config) {
  return [];
}

function lookupService(id, config) {
    throw new Error('Cannot find entity because no menu items have been configured!');
}

export {
  lookupService,
  listServices
}
