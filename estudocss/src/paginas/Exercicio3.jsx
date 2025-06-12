export default function Exercicio3()
{
    const titulo = {
        color : "red",
        backgroundColor: "yellow",
        textAlign: "center",
        padding: "10px"
    };

    return (
        <div>
                <h2 style={titulo}>Exemplo de Estilos em objeto</h2>
                <p>
                    Este foi um exemplo de estilo em linha,mas utilizando 
                    uma variavel objeto para armazenar os estilos.
                </p>
        </div>
    );
}