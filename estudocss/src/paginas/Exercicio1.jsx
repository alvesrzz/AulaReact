import "./estilos.css";

export default function Exercicio1()
{
    return (
        <div>
            <h2 className="titulo">Exemplo CSS Puro</h2>

            <p>
                Pode-se aplicar através de <span className="destaque">Folhas 
                de Estilo</span>, crie-se um arquivo separado com a extenção css, 
                e depois importa-o no arquivo do react com a extensão jsx.
            </p>
        </div>
    )
}