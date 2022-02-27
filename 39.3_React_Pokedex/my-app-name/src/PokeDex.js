import React from 'react';
import Pokecard from './Pokecard';

const PokeDex = ({ characters }) => {
    return (
    <div>
      <div>{characters.map(c => (
        <Pokecard name={c.name} type={c.type} exp={c.base_experience} id={c.id} />
      ))}
      </div>
    </div>
    )
}

export default PokeDex;