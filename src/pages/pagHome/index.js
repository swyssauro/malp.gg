import React from 'react';
import { Button, Select, Input } from 'semantic-ui-react'
import './styles.css';
import malphgg from '../../imagens/malp.gg.svg';

import { FiSearch } from 'react-icons/fi';

const options = [
  { key: 'BR', text: 'BR', value: 'BR' }
]

function pagHome() {
  return (
    <>
      <div className="input-name">
      <Input type='text' placeholder='Search...' action>
        <input />
        <Select compact options={options} defaultValue='BR' />
        <Button type='submit'><FiSearch/></Button>
      </Input>
      </div>
      <img className="malp_svg" src={malphgg} alt="malphgg" />
    </>
  );
}

export default pagHome;