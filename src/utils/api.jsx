const fetchIMDBData = async (query) => {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${encodeURIComponent(query)}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '64c56f0a0emsh9f60f64c86655c2p19b5a8jsnfa4387c23249',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
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
  