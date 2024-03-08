import 'dotenv/config'

type env_key = 'PORT' | 'TOKEN_WRIKE'

export class Environment {
    private readonly env: NodeJS.ProcessEnv
    constructor() {
        this.env = process.env
    }
    get(key: env_key): string | null{
        if (!this.env[key]){
            return null
        }
        return String(this.env[key])
    }
}