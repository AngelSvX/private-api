export interface LocalStorageType {
  key: string,
  value: string
}

export interface returnLocalStorage {
  setLocalStorage: ({ key, value } : LocalStorageType ) => void
}