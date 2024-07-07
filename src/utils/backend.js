import { normalize } from './entity_id_utils'
import wretch from 'wretch'
import { throttlingCache, dedupe, retry } from 'wretch/middlewares'

function fetchData(url) {

  return wretch(url).get().json()

}

function fetchFile(url) {

  return wretch(url).get().text()

}

function fetchHeaders(url) {
  // wretch(url).head().res(res => {
  //   return res.headers;
  // }).then(console.log)
  return wretch(url).head().res().then(res => res.headers);
}

export {
  fetchData,
  fetchFile,
  fetchHeaders
}
