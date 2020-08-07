import React, { useState } from 'react';
import { Header, Form, Button, Input, Image, Modal } from 'semantic-ui-react';
import api from '../../Backend';
import { FiSearch } from 'react-icons/fi';

export default function InputFrom() {

    const [open, setOpen] = React.useState(false)
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
                <Input className="anim-input" type='text' value={name} placeholder='username' action>
                    <input name='name' onChange={e => setName(e.target.value)} />
                    <Modal onClose={() => setOpen(false)}onOpen={() => setOpen(true)}open={open}trigger={<Button type='submit'><FiSearch /></Button>}>
                        <Modal.Content image>
                            <Image circular size='medium' src={avatar} wrapped />
                            <Modal.Description>
                                <Header>Nome: {data.name}</Header>
                                <h1>Level: {data.summonerLevel}</h1>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Input>
            </Form>
        </>
    );
}