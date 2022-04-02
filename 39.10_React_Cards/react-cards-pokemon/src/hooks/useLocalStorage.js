import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue = []) => {
  // If local storage can retrieve the key, then the initial value for useState is what’s currently in the local storage for that key
  if (window.localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
  }
  const [state, setState] = useState(initialValue);

  // Every time the state and key change, the local storage is updated with the new state.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  // A modified useState using localStorage is returned
  return [state, setState];
};

export default useLocalStorage;