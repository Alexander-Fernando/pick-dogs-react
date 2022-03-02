import React from 'react';

const Card = ({
  dog: {
    image,
    breed: { id, name },
  },
  updateDataDog,
  loading,
}) => {
  return loading ? (
    <div className="lds-hourglass"></div>
  ) : (
    <div className="card" onClick={() => updateDataDog(id)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
