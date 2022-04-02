import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import useLocalStorage from './useLocalStorage';

const useAxios = (baseURL, key) => {
  const [data, setData] = useLocalStorage(key, []);
  const addData = async (ext = '') => {
    if (typeof ext === 'string') {
      const res = await axios.get(`${baseURL}${ext}`);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
    } else {
      const res = await axios.get(`${baseURL}`);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
    }
  };
  const clearData = () => {
    setData([]);
  };
  return [data, addData, clearData];
};

export default useAxios;