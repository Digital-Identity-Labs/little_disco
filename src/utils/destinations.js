
import * as bemBuiltin from '@/utils/destinations/builtin.js'
import * as bemNone from '@/utils/destinations/none.js'

function is(is) {
  switch (is) {
    case 'static':
    case 'builtin':
    case 'default':
      return bemBuiltin;
    case 'none':
    case null:
      return bemNone;
    default:
      console.log('Undefined provider!')
      throw Error('Unknown provider for destinations!');
  }
}

export {
  is
}
