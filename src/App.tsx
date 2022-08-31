import './App.css'

interface IPokemon {
  id: number;
  nome: string;
  kilos?: number;
  pokemon: boolean;
  categoria: string;
}

const pokemons: IPokemon[] = [
  {
    id: 1,
    nome: "bulbasaur",
    kilos: 6.9,
    pokemon: true,
    categoria: "semente",
  },
  {
    id: 2,
    nome: "charmander",
    kilos: 8.5,
    pokemon: true,
   categoria: "lagarto",
  },
  {
    id: 3,
    nome: "charizard",
    kilos: 95.5,
    pokemon: true,
    categoria: "chama",
  },
  {
    id: 4,
    nome: "ash",
    pokemon: false,
    categoria: "treinador",
  },
 ];


function App() {

  return (
    <div className="App">
      <ul>
        {
          pokemons.map(item => (
            <li className="item-card" key={item.id}>
              <span>Id: {item.id}</span>
              <span>Nome: {item.nome}</span>
              <span>Peso: {item.kilos}</span>
              <span>{item.pokemon ? 'É pokemon' : 'Não é pokemon'}</span>
              <span>Categoria: {item.categoria}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
