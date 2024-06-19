const consultarPokemonThen = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0").then(
    (response) => {
      response.json().then((data) => {
        console.log(data);
      });
    }
  );
};

const consultarPokemonAsync = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
  );
  const data = await response.json();
  return data.results;
};

const pintarPokemones = async () => {
  const data = await consultarPokemonAsync();
  const bodyTable = document.getElementById("bodyTable");
  let count = 1;
  data.forEach((pokemon) => {
    const tr = document.createElement("tr");
    const tdCount = document.createElement("td");
    const tdName = document.createElement("td");
    const tdURL = document.createElement("td");
    tdCount.textContent = count;
    tdName.textContent = pokemon.name;
    tdURL.textContent = pokemon.url;
    tr.appendChild(tdCount);
    tr.appendChild(tdName);
    tr.appendChild(tdURL);
    bodyTable.appendChild(tr);
    count++;
  });
};
pintarPokemones();
