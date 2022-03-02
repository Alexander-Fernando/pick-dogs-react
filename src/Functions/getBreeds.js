export const getBreeds = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds';
  const response = await fetch(url);
  const dataBreeds = await response.json();

  return dataBreeds;
};
