import axios from 'axios';

const BASE_URL = 'https://photoslibrary.googleapis.com/'

export class Transport {

    authToken: string;

    constructor(authToken: string) {
        this.authToken = authToken;
    }

    async get(endpoint: string, params?: any) {
        return axios.get(BASE_URL + endpoint, {
            headers: this._getHeaders(),
            params,
        });
    }

    async post(endpoint: string, params?: any) {
        return axios
            .post(BASE_URL + endpoint, {
                headers: this._getHeaders(),
                json: params,
            });
    }

    _getHeaders() {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.authToken}`,
        };
    }
}