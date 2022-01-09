type Value<T> = T | null;

function useReadLocalStorage<T>(key: string): Value<T> {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.warn(`Error reading localStorage key “${key}”:`, error);
    return null;
  }
}

export default useReadLocalStorage;
