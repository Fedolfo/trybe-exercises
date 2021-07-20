const api = require("../introdution_API");

describe("testando a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchURL");
  afterEach(apiURL.mockReset);

  test("testando requisição caso a promise resolva", async () => { // retorna 200 objetos podendo sobrecarregar
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});


// const requestReturn = [  // criado um requestReturn pra não ter sobrecarregamento, não sei usar direito
//   {
//     id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
//     name: "Spirit",
//     classification: "Spirit",
//     eye_colors: "Red",
//     hair_colors: "Light Orange",
//     url:
//       "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
//     people: [
//       "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
//     ],
//     films: [
//       "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
//     ]
//   }
// ];

// test("testando requisição caso a promise resolva", async () => {
//   apiURL = jest.fn().mockResolvedValue(requestReturn);

//   // Mesma aplicação dos testes do exemplo anterior...
// });