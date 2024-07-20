
function laxReturnURL(id)  {
  if (id.startsWith('http')) {
    const baseURL = new URL(id);
    return baseURL.origin
  } else {
    const unlikelyDomain = id.split(':').reverse()[0];
    return 'https://' + unlikelyDomain + '/'
  }
}

export {
  laxReturnURL
}