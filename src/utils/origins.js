
import  * as entityIDUtils from './entity_id_utils';
import  * as backend from './backend';

function listServices(config) {

  console.log(config);
  return config.origins;
}

export {
    listServices
};
