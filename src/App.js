import Select from './Components/Select';
import Card from './Components/Card';
import './Styles/DogApp.css';
import { useEffect, useState } from 'react';
import { getDog } from './Functions/getDog';

const initialValue = {
  image:
    'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg',
  breed: {
    id: 1,
    name: 'Labrador',
  },
};

const App = () => {
  const [dog, setDog] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  const updateDataDog = async (id = 1) => {
    const DogInfo = await getDog(id);
    setLoading(false);
    setDog(DogInfo);
  };

  useEffect(() => {
    updateDataDog();
  }, []);

  return (
    <div className="app">
      <h1>Perritos a montones :)</h1>
      <Select updateDataDog={updateDataDog} />
      <Card dog={dog} updateDataDog={updateDataDog} loading={loading} />
    </div>
  );
};

export default App;
