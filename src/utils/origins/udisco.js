
import  * as entityIDUtils from '@/utils/entity_id_utils';
import  * as backend from '@/utils/backend';

 async function listServices(config) {
  const services = await backend.fetchData(config.df_provider_url);

  return services;
 }

export {
    listServices
};
