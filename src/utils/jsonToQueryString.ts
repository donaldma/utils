const jsonToQueryString = (json: object): string => {
  return Object.keys(json).filter((key) => json[key] !== undefined).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
  }).join('&')
}

export default jsonToQueryString