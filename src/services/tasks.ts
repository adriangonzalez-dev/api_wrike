import { apiWrike } from "../config/wrike_api";

export const getTasks = async () => {
    const {data} = await apiWrike.get(`/spaces`)
    return data
}
