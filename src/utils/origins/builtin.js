
import  * as entityIDUtils from '@/utils/entity_id_utils';
import  * as backend from '@/utils/backend';

function listServices(config) {

  return config.origins;
}

export {
    listServices
};
