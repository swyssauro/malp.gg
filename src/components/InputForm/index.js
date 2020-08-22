import React, { useState } from 'react';
import { Form, Button, Input, Modal } from 'semantic-ui-react';
import api from '../../Backend';
import { FiSearch, FiChevronUp, FiInfo } from 'react-icons/fi';

export default function InputFrom() {
    
    const avatar = `http://ddragon.leagueoflegends.com/cdn/10.15.1/img/profileicon/${data.profileIconId}.png`;
    const [open, setOpen] = React.useState(false)
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

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
                            <img className="avatar-st"  alt="avatar" src={avatar} />
                            <Modal.Description>
                                <div className="user-data">
                                <FiInfo /> {data.name}
                                </div>
                                <div className="level-data">
                                <FiChevronUp /> {data.summonerLevel}
                                </div>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Input>
            </Form>
        </>
    );
}