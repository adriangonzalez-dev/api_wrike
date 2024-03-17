import { apiWrike } from "../config/wrike_api";

export const getDB = async () => {
    const response = await apiWrike.get(`/data_export`)
    return response
}
