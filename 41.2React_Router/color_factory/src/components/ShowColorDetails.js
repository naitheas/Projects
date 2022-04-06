import React from 'react';
import { useParams } from 'react-router-dom';
import ColorDetails from './ColorDetails';

const ShowColorDetails = ({ colors }) => {
  const { color } = useParams();
  if (color) {
    const currColor = colors.find(
      (thisColor) => color.toLowerCase() === thisColor.name.toLowerCase()
    );
    return <ColorDetails color={currColor} />;
  }
  return null;
};

export default ShowColorDetails;