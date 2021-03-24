const auth = {
  signup: async userData => {
    const response = await fetch(
      `http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup`,
      {
        method: 'POST',
        body: { ...userData }
      }
    );

    return response.json();
  }
};

export default auth;
