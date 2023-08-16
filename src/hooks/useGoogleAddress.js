import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAdress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA-d2AGRbY5y2hAw82a8tYSzkgazCU90rw`;

  const fetch = async () => {
    try {
      const response = await axios(API);
      // const datajson = await response.json();
      setMap(response.data.result[0].geometry.location);
    } catch (error) {
      console.error('se ha presentado un error', error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return map;
};

export default useGoogleAdress;
