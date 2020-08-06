import React from 'react'
import grace_hopper from '../imagenes/grace-hopper.png';
import katie_Bouman from "../imagenes/Katie-Bouman.png";
import Margaret_Hamilton from '../imagenes/Margaret_Hamilton.png';
import ERA from '../imagenes/An_E.R.A.Univac_1103_computer_in the_1950s.png';
import computers_operator from '../imagenes/Computer_operators_with_an_Eniac_the_world’s_first_programmable_general-purpose_computer.png';
import susan_kare from '../imagenes/susan-kare.png';

const Invitados =()=> {
    return (
        <div>
            <h1>Invitada/os estelares</h1>
            <img src={grace_hopper}/>
            <img src={katie_Bouman}/>
            <img src={Margaret_Hamilton}/>
            <img src={ERA}/>
            <img src={computers_operator}/>   
            <img src={susan_kare}/>
        </div>
    )
}

export default Invitados;
