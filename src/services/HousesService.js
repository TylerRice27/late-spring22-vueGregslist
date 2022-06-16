import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
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

    async editHouse(houseData) {
        const res = await api.put('api/houses/' + houseData.id, houseData)
        logger.log('editing a house', res.data)
    }
    async removeHouse(id) {
        const res = await api.delete('api/houses/' + id)
        logger.log('deleting the house', res.data)
        AppState.houses = AppState.houses.filter(h => h.id != id)
    }


}




export const housesService = new HousesService()