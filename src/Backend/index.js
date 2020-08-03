import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/',
    headers: {
        'X-Riot-Token': "RGAPI-72b525ab-23b3-443a-8a3b-b72a7f2cde5c",
        'Access-Control-Allow-Origin': "false"
    }
});

export default api;