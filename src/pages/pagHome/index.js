import React from 'react';
import InputForm from '../../components/InputForm';
import malphgg from '../../imagens/malp.gg.svg';
import mallsmall from '../../imagens/small.svg';
import './styles.css';

function pagHome() {
  return (
    <>
      <div className="container">
      <img className="anim-logo" src={mallsmall} alt="mapsmall" />
      </div>
      <div className="input-name"><InputForm /></div>
      <img className="malp_svg" src={malphgg} alt="malphgg" />
    </>
  );
}

export default pagHome;