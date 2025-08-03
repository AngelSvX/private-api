import type { LocalStorageType, returnLocalStorage } from '../types/LocalStorageType';

function useLocalStorage() : returnLocalStorage {

  const setLocalStorage = ({key, value} : LocalStorageType ) => {
    localStorage.setItem(key, value)
  }


  return {
    setLocalStorage
  }
}

export default useLocalStorage
