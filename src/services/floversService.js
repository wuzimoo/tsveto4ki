import {apiService} from "./axiosService";
import {urls} from "../config";

const floversService = {
    getAll: (page, type) => apiService.get(urls.getAllPositions(page, type)),
    getById: (id, same) => apiService.get(urls.positionById(id, same)),
    getCategory: () => apiService.get(urls.previousCatalog()),
    getSimilar: (count) => apiService.get(urls.randomPosition(count)),
    sendData: (data) => apiService.post(urls.sendData(), data)
}

export {floversService}