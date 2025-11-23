import React, { createContext, useState, useEffect } from 'react';
import { getEntries, saveEntry } from '../utils/storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    const data = await getEntries();
    setEntries(data);
  };

  const addEntry = async (entryData) => {
    const updatedList = await saveEntry(entryData);
    setEntries(updatedList);
  };

  return (
    <AppContext.Provider value={{ entries, addEntry, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};