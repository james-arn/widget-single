export const fetchData = async (setFetchedData, error, setError) => {
  try {
    const data = await fetch("https://getgreenspark.mocklab.io/products");
    if (data.status !== 200) {
      throw new Error(error);
    }
    const response = await data.json();
    setFetchedData(response);
  } catch (error) {
    setError({ error: true, message: error.message });
  }
};
