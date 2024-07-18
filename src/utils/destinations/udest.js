import * as backend from '@/utils/backend.js'
import * as idUtils from '@/utils/entity_id_utils.js'
import { unknownDestination, verifyDestination } from './common.js'

async function lookupService(id, config, options = {}) {

  const transformedID = idUtils.hash(id)
  const url = `${config.dest_provider_url}/en/${transformedID}.json`

  try {
    const destination = await backend.fetchData(url).catch(() => null)
    if (verifyDestination(destination)) {
      return destination;
    } else {
      if (config.verification_policy === 'none') {
        return unknownDestination(id);
      } else {
       console.log('Invalid data for this destination')
      }
    }
  } catch (error) {
    if (config.verification_policy === 'strict') {
      throw new Error('Cannot find suitable information for this destination')
    }
  }
}

export {
  lookupService
}

