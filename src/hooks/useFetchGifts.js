import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
};
