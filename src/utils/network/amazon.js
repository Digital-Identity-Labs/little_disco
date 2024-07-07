import * as backend from '@/utils/backend'

async function getIPAddress(config) {
  try {
    const address = await backend.fetchFile('https://checkip.amazonaws.com/');
    return address.trim();
  } catch (error) {
    console.error('Could not retrieve IP address from Amazon AWS')
    return null
  }

}

export {
  getIPAddress
}
