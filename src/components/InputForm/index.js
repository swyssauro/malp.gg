import React, { useState } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import api from '../../Backend';
import { FiSearch } from 'react-icons/fi';

export default function InputFrom() {

    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const avatar = `http://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/${data.profileIconId}.png`

    async function handleLogin(e) {
        e.preventDefault();
        api.get(`summoner/v4/summoners/by-name/${name}`, {
        }).then(response => { setData(response.data); })
    }

    return (
         <>
            <Form onSubmit={handleLogin}>
                <Input type='text' value={name} placeholder='username' action>
                    <input name='name' onChange={e => setName(e.target.value)} />
                    <Button type='submit'><FiSearch /></Button>
                </Input>
            </Form>
         <h1>{data.name}</h1>
         <h1>{data.summonerLevel}</h1>
         <img src={avatar} alt="alt"/>
         </>
    );
}