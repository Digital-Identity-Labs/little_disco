import * as bemBuiltin from '@/utils/menu/builtin.js'
import * as bemNone from '@/utils/network/none.js'

function is(is) {
  switch (is) {
    case 'builtin':
    case 'default':
      return bemBuiltin;
    case 'none':
      return bemNone;
    default:
      throw Error('Unknown provider for menu!');
  }
}

export {
  is
}
