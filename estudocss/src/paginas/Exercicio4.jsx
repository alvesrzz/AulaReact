export default function Exercicio4({cor})
    {
        const border = {
            border: " 2px solid " + cor,
            textAlign: "center"
        };
        
        return(
            <div>
                <h2 style={border}>Exercicio 1 - Estilos CSS no React</h2>
                <p style={{color : cor}}> Este paragrafo está na cor {cor} !</p>
            </div>
        )
    }