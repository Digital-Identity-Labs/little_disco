
import * as bemBuiltin from '@/utils/origins/builtin.js'
import * as bemUdisco from '@/utils/origins/udisco.js'
import * as bemNone from '@/utils/origins/none.js'

function is(is) {
  switch (is) {
    case 'static':
    case 'builtin':
    case 'default':
      return bemBuiltin;
    case 'udisco':
      return bemUdisco;
    case 'none':
    case null:
      return bemNone;
    default:
      throw Error('Unknown provider for origins!');
  }
}

export {
  is
}
