import {loginWrike as apiLoginWrike} from '../config/wrike_api'

export const loginWrike = async ( ) => {
    const response = await apiLoginWrike.get('')
    console.log(response)
}