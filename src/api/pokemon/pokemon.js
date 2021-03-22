const pokemon = {
  get: async ({ limit, offset }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
      {
        method: 'GET'
      }
    );

    return response.json();
  },
  getByIdOrName: async nameOrId => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}/`,
      {
        method: 'GET'
      }
    );
    return response.json();
  }
};

export default pokemon;
