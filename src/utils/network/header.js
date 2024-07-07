import * as backend from '@/utils/backend'

async function getIPAddress(appConfig) {
  try {
    const headers = await backend.fetchHeaders(appConfig.net_provider_url);
    if (headers) {
      return headers.get('LittleDisco-CIP');
    } else {
      return null;
    }
  } catch (error) {
    console.error('Could not retrieve IP address from server');
    console.error(error);
    return null;
  }

}

export {
  getIPAddress
}