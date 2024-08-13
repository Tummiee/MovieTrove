const fetchIMDBData = async (query) => {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(query)}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_API_HOST
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Convert to JSON format
      return result.d; // Return the data part of the result
    } catch (error) {
      console.error('Error fetching IMDB data:', error);
      throw error;
    }
  };
  
  export default fetchIMDBData;
  