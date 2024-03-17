import axios from 'axios'
import { Environment } from './environment'

const env = new Environment()

const redirect_uri = env.get('REDIRECT_URI')

export const loginWrike = axios.create({
    baseURL: `https://login.wrike.com/oauth2/authorize/v4?client_id=${env.get('ID_CLIENT_WRIKE')}&response_type=code`
})

export const apiWrike = axios.create({
    baseURL: 'https://www.wrike.com/api/v4',
    headers: {
        Authorization: `Bearer ${env.get('TOKEN_WRIKE')}`,
    }
})