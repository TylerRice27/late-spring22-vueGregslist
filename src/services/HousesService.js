import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"





class HousesService {
    async getAll() {
        const res = await api.get('api/houses')
        logger.log('Get me my houses', res.data)
        AppState.houses = res.data
    }

    async createHouse(houseData) {
        const res = await api.post('api/houses', houseData)
        logger.log('create a house', res.data)
        AppState.houses.push(res.data)

    }

}




export const housesService = new HousesService()