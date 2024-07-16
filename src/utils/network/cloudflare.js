
import  * as backend from '@/utils/backend';

async function getIPAddress(config, options={}) {
  try {
    const text = await backend.fetchFile('https://www.cloudflare.com/cdn-cgi/trace');
    if (text) {
      const address = text.match(/ip=(.*)/)[1];
      return address.trim();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Could not retrieve IP address from Cloudflare Trace')
    console.error(error);
    return null
  }

}

export {
  getIPAddress
};
