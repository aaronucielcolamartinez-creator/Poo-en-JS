class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        try {
            const respuesta = await fetch(`${this.baseURL}/${endpoint}`);
            if (!respuesta.ok) throw new Error("Error en la petición");
            return await respuesta.json();
        } catch (error) {
            console.error(error);
        }
    }
}

class PokemonModel {
    constructor(data) {
        this.nombre = data.name;
        this.id = data.id;
        this.imagen = data.sprites.front_default;
    }
}

// Uso asíncrono
// const api = new APIClient("https://pokeapi.co/api/v2");
// const datos = await api.get("pokemon/1");
// const pikachu = new PokemonModel(datos);
