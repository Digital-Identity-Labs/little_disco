import { useStorage } from '@vueuse/core'

function loadFavourites(appConfig) {
  return useStorage('userFavorites', [])
}

function resetFavourites(appConfig) {
  const favs = loadFavourites(appConfig)
  favs.value = []
  return favs
}

function addFavourite(service, appConfig) {
  const favs = loadFavourites(appConfig)
  const id = typeof service === 'string' ? service : service.id;
  const favSet = new Set(favs.value);
  if (favSet.has(id)) {
    return favs;
  } else {
    favSet.add(id);
    const favsExport = Array.from(favSet);
    favs.value = favsExport.slice(0, 6);
    return favs;
  }
}

function delFavourite(service, appConfig) {
  const favs = loadFavourites(appConfig)
  const id = typeof service === 'string' ? service : service.id;
  const favSet = new Set(favs.value)
  if (favSet.has(id)) {
    favSet.delete(id);
    const favsExport = Array.from(favSet);
    favs.value = favsExport;
    return favs
  } else {
    return favs;
  }
}

export {
  loadFavourites,
  resetFavourites,
  addFavourite,
  delFavourite,
}
