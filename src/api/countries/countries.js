const countries = {
  get: async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`, {
      method: 'GET'
    });

    return response.json();
  }
};

export default countries;
