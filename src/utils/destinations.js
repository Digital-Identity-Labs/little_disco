
import  * as entityIDUtils from './entity_id_utils';
import  * as backend from './backend';

function listServices(config) {

  return config.destinations;
}

export {
    listServices
};
