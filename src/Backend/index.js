import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://br1.api.riotgames.com/lol/',
    headers: {
        'X-Riot-Token': " ", // TOKEN RIOT DEVELOPER
        'Access-Control-Allow-Origin': "false"
    }
});

export default api;