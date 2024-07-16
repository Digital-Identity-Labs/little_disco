import * as bemBuiltin from '@/utils/menu/builtin.js'
import * as bemNone from '@/utils/menu/none.js'

function is(is) {
  switch (is) {
    case 'builtin':
    case 'default':
      return bemBuiltin;
    case 'none':
    case null:
      return bemNone;
    default:
      console.log('Undefined provider!')
      throw Error('Unknown provider for menu!');
  }
}

export {
  is
}
