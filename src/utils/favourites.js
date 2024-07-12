import { useStorage } from '@vueuse/core'

function loadFavourites(appConfig) {
  return useStorage('userFavorites', [])
}

function resetFavourites(favourites, appConfig) {
  favourites.value = []
  return favourites.value;
}

function addFavourite(service, favourites, appConfig) {
  const id = typeof service === 'string' ? service : service.id;
  const favSet = new Set(favourites.value);
  if (favSet.has(id)) {
    return favourites;
  } else {
    favSet.add(id);
    const favsExport = Array.from(favSet);
    favourites.value = favsExport.slice(0, 6);
    return favourites.value;
  }
}

function delFavourite(service, favourites, appConfig) {
  const id = typeof service === 'string' ? service : service.id;
  const favSet = new Set(favourites.value)

  if (favSet.has(id)) {
    favSet.delete(id);
    const favsExport = Array.from(favSet);
    favourites.value = favsExport;
    return favourites.value;
  } else {
    return favourites.value;
  }
}

export {
  loadFavourites,
  resetFavourites,
  addFavourite,
  delFavourite,
}
