import * as entityIDUtils from './entity_id_utils'
import * as backend from './backend'
import * as bemBuiltin from '@/utils/origins/builtin.js'
import * as bemUdisco from '@/utils/origins/udisco.js'
import * as bemNone from '@/utils/origins/none.js'

function is(is) {
  console.log(is)
  switch (is) {
    case 'static':
    case 'builtin':
    case 'default':
      return bemBuiltin;
    case 'udisco':
      return bemUdisco;
    default:
      console.log("HITTING DEFAULT")
      return bemNone;
  }
}

export {
  is
}
