

function listServices(config, options={}) {
  return [];
}

function lookupService(id, config, options={}) {
    throw new Error('Cannot find entity because no destinations have been configured!');
}

export {
  lookupService,
  listServices
}
