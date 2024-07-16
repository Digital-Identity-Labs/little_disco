
import  * as entityIDUtils from '@/utils/entity_id_utils';
import  * as backend from '@/utils/backend';

 async function listServices(config) {
  const services = await backend.fetchData(config.origin_provider_url);
  const origins = new Map(services.map(s => [s.id, s]));
  return origins;
 }

export {
    listServices
};
