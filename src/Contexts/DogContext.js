import { createContext, useState } from 'react';

export const dogContext = createContext();

const DogProvider = () => {
  const [breeds, setBreeds] = useState([]);

  return (
    <dogContext.Provider
      value={{
        breeds,
        setBreeds,
      }}
    ></dogContext.Provider>
  );
};

export default DogProvider;
