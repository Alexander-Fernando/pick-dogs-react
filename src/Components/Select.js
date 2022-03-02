import React, { useEffect, useState } from 'react';
import { getBreeds } from '../Functions/getBreeds';

const Select = ({ updateDataDog }) => {
  const [breeds, setBreeds] = useState([]);

  /*CARGA LAS RAZAS DEL SELECT */
  const uploadBreeds = async () => {
    const data = await getBreeds();
    setBreeds(data);
  };

  useEffect(() => {
    uploadBreeds();
  }, []);

  return (
    <select onChange={({ target: { value } }) => updateDataDog(value)}>
      {breeds.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
