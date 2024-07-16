import * as bemHeader from '@/utils/network/header.js'
import * as bemCloudflare from '@/utils/network/cloudflare.js'
import * as bemAmazon from '@/utils/network/amazon.js'
import * as bemNone from '@/utils/network/none.js'

function is(is) {
  switch (is) {
    case 'header':
    case 'default':
      return bemHeader;
    case 'cloudflare':
      return bemCloudflare;
    case 'amazon':
      return bemAmazon;
    case 'none':
    case null:
      return bemNone;
    default:
      throw Error('Unknown provider for network hints!');
  }
}

export {
  is
}
