export const getDog = async (idBreed) => {
  let url = '';
  if (idBreed === 0) {
    url = 'https://api.thedogapi.com/v1/images/search';
  } else {
    url = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${idBreed}`;
  }

  const response = await fetch(url);
  const [data] = await response.json();

  let {
    url: image,
    breeds: [breed],
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: 'Raza random',
    };
  }

  const dataDog = {
    image,
    breed,
  };

  return dataDog;
};
