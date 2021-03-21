const countries = {
  get: async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/all`, {
        method: 'GET'
      });

      return response.json();
    } catch (error) {
      return error;
    }
  }
};

export default countries;
