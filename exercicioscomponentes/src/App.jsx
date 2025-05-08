import Exemplo1 from "./Componentes/exemplo1"


export default function App()
{
  return(
    <div>
      <h1>Exercícios de Componentes</h1>

      <h3>Chamada para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2}/>
      <Exemplo1 numero1={43} numero2={6}/>
      <Exemplo1 numero1={34} numero2={5.8}/>
      <Exemplo1 numero1={82} numero2={65}/>
      <hr />
      <h3>Exercicio 1</h3>
      <Exercicio1 fah={100} />
      <Exercicio1 fah={70} />
    </div>
    
  )
}