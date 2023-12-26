const baseURL = 'http://sinowrap.ru/back/api/';  // http://89.105.201.25:8000/api

const urls = {
    getAllPositions:(page, type) => `/positions/all?pag=${page}&page_size=12&category=${type}`,
    positionById:(id, same) => `/positions/?id=${id}&same=${same || 4}`,
    previousCatalog:() => '/positions/category',
    randomPosition:(count) => `/positions/random?count=${count}`,
    sendData: () => '/buy/'
}

export {
    baseURL, urls
}