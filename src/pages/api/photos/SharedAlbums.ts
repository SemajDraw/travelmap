import { Transport } from './Transport'
const BASE_PATH = "v1/sharedAlbums";

export class SharedAlbums {
    transport: Transport

    constructor(authToken: string) {
        this.transport = new Transport(authToken);
    }

    async get(shareToken) {
        return this.transport.get(`${BASE_PATH}/${shareToken}`);
    }

    async join(shareToken) {
        return this.transport.post(`${BASE_PATH}:join`, { shareToken });
    }

    async leave(shareToken) {
        return this.transport.post(`${BASE_PATH}:leave`, { shareToken });
    }

    async list(pageSize = 50, pageToken?) {
        return this.transport.get(BASE_PATH, { pageSize, pageToken });
    }
}
