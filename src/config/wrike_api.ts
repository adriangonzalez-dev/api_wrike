import axios from 'axios'
import { Environment } from './environment'

const env = new Environment()

export const apiWrike = axios.create({
    baseURL: 'https://www.wrike.com/api/v4',
    headers: {
        Authorization: `Bearer ${env.get('TOKEN_WRIKE')}`,
    }
})