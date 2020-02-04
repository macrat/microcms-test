import Vue from 'vue';

import axios from 'axios';


export class APIClient {
    constructor(endpoint, apiKey) {
        this.endpoint = endpoint;
        this.apiKey = apiKey;
    }

    async getNewsList() {
        return (await axios.get(`${this.endpoint}/news`,  {
            headers: {'X-API-KEY': this.apiKey},
        })).data.contents;
    }

    async getNewsArticle(id, draftKey) {
        return (await axios.get(`${this.endpoint}/news/${id}`,  {
            params: {'draftKey': draftKey},
            headers: {'X-API-KEY': this.apiKey},
        })).data;
    }
};


export default ({app}, inject) => {
    inject('api', new APIClient(process.env.API_ENDPOINT, process.env.API_KEY));
};
