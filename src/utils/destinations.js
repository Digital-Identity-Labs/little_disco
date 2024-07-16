
import * as bemBuiltin from '@/utils/destinations/builtin.js'
import * as bemNone from '@/utils/destinations/none.js'

function is(is) {
  switch (is) {
    case 'static':
    case 'builtin':
    case 'default':
      return bemBuiltin;
    case 'none':
      return bemNone;
    default:
      throw Error('Unknown provider for destinations!');
  }
}

export {
  is
}
