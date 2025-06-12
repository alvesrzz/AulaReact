import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";
import Exercicio4 from "./paginas/Exercicio4";
function App() {

  return (
    <div>
      <h1>Aula 02 - Estudo do CSS no React</h1>

      <Exercicio1 />
      
      <hr />

      <Exercicio2 />

      <hr />
      <Exercicio3 />

      <hr />
      <Exercicio4 cor="red" />
      <Exercicio4 cor="blue" />
      <Exercicio4 cor="green" />
      <Exercicio4 cor="magenta" />
      
    </div>
  )
}

export default App