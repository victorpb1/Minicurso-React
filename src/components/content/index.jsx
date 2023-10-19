import { useEffect, useState } from "react";
import palavras from "./palavras.json";
import "./style.css";

const Content = () => {
  const [palavrasEscolhidas, setPalavrasEscolhidas] = useState([]);
  const [palavraEscolhida, setPalavraEscolhida] = useState(null);
  const [palavraDigitada, setPalavraDigitada] = useState(null);
  const [acertosDePalavras, setAcertosDePalavras] = useState(0);
  const [errosDePalavras, setErrosDePalavras] = useState(0);
  const [tentativasTotais, setTentativasTotais] = useState(0);
  const [posicoesAcertadas, setPosicoesAcertadas] = useState([]);
  const [palavraTentativa, setPalavraTentativa] = useState(null);

  const onChangePalavraDigitada = (event) => {
    setPalavraDigitada(event.target.value);
  };

  const escolheNovaPalavra = () => {
    let palavraJaFoiEscolhida = true;
    let posicaoAleatoria;
    let palavraAleatoria;
    do {
      posicaoAleatoria = Math.floor(Math.random() * 611);
      palavraAleatoria = palavras.palavras[posicaoAleatoria];
      palavraJaFoiEscolhida = palavrasEscolhidas.includes(palavraAleatoria);
    } while (palavraJaFoiEscolhida);

    setPalavrasEscolhidas((valorAntigo) => [...valorAntigo, palavraEscolhida]);
    setPalavraEscolhida(palavraAleatoria);
    setPalavraDigitada(null);
    setPalavraTentativa(null);
    setPosicoesAcertadas([]);
  };

  const checaPalavraDigitada = () => {
    const posicoesCorretas = [];
    palavraDigitada?.split("").map((letra, posicao) => {
      if (letra === palavraEscolhida[posicao]) {
        posicoesCorretas.push(posicao);
      }
    });
    if (posicoesCorretas.length === palavraEscolhida.length) {
      setAcertosDePalavras((valorAntigo) => ++valorAntigo);
    } else {
      setErrosDePalavras((valorAntigo) => ++valorAntigo);
    }
    setPosicoesAcertadas(posicoesCorretas);
    setPalavraTentativa(palavraDigitada);
    setTentativasTotais((valorAntigo) => ++valorAntigo);
  };

  useEffect(() => {
    escolheNovaPalavra();
  }, []);

  return (
    <>
      <h2>Acerte a palavra</h2>
      <h3>A palavra tem {palavraEscolhida?.length} letras</h3>
      <div className="card">
        <div className="card-input">
          <input value={palavraDigitada} onChange={onChangePalavraDigitada} />
          <button onClick={checaPalavraDigitada}>checar</button>
          <button onClick={escolheNovaPalavra}>nova palavra</button>
        </div>
        <p>
          {palavraTentativa?.split("").map((letra, posicao) => {
            if (posicoesAcertadas.includes(posicao)) {
              return <span className="letra-correta">{letra}</span>;
            }
            return <span className="letra-incorreta">{letra}</span>;
          })}
        </p>
      </div>
      <p className="read-the-docs">
        <b>Tentativas: </b> {tentativasTotais}
        <b>Acertos: </b> {acertosDePalavras}
        <b>Erros: </b> {errosDePalavras}
      </p>
    </>
  );
};

export default Content;