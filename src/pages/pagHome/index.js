import React from 'react';
import InputForm from '../../components/InputForm';
import './styles.css';
import malphgg from '../../imagens/malp.gg.svg';
import mallsmall from '../../imagens/small.svg';

function pagHome() {
  return (
    <>
      <div className="container">
      <img className="anim-logo" src={mallsmall} alt="mapsmall" />
      </div>
      <div className="input-name">
        <InputForm />
      </div>
      <img className="malp_svg" src={malphgg} alt="malphgg" />
    </>
  );
}

export default pagHome;