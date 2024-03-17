import { apiWrike } from "../config/wrike_api";

export const getSpaces = async () => {
    const {data} = await apiWrike.get(`/spaces`)
    return data
}

export const getSpaceById = async (id:string) => {
    const {data} = await apiWrike.get(`/spaces/${id}`)
    return data
}

export const findSpaceByName = async (name:string) => {
    const {data} = await getSpaces()
    const result = await data.find((space:any)=>space.title.toLocaleLowerCase() === name.toLocaleLowerCase().trim())
    return result
}

export const getFolders = async () => {
    const {data} = await apiWrike.get(`/folders`)
    return data
}