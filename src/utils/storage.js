import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@daily_entries_v1';

export const saveEntry = async (newEntry) => {
  try {
    const existingData = await getEntries();
    const updatedData = [newEntry, ...existingData];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    return updatedData;
  } catch (e) {
    console.error("Kayıt hatası:", e);
    return [];
  }
};

export const getEntries = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Okuma hatası:", e);
    return [];
  }
};

export const clearEntries = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch(e) {
    console.error("Silme hatası:", e);
  }
};