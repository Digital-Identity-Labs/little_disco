import { inRange, isIP } from 'range_check'

async function getLocation(appConfig) {
  if (appConfig.request_geo === true) {
    try {
      const position = await getCurrentPosition()
      return {lat: parseFloat(position.coords.latitude), lon: parseFloat(position.coords.longitude)}
    } catch (error) {
      console.log(error)
      return null;
    }
  } else {
    return null;
  }
}
//
// function filterServices(services, userIP) {
//   return services.find((service) => {
//     if (!isIP(userIP)) {
//       return false;
//     } else if (!Array.isArray(service.ip) || !service.ip.length) {
//       return false;
//     } else {
//       return inRange(userIP, service.ip);
//     }
//   });
//
// }
//
// import { inRange, isIP } from 'range_check'
export {
  getLocation
}


function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error)
    )
  })
}