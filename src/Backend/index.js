import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/',
    headers: {
        'X-Riot-Token': "RGAPI-2247a4f7-e034-4826-bdd9-7bdd738c2418",
        'Access-Control-Allow-Origin': "false"
    }
});

export default api;