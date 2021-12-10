import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetEmbed from 'react-tweet-embed';
import getBlueQuote from './libs/bluelytics';
import getBinanceQuote from './libs/binance';

function App() {
  const buyPrice = 1000;
  const btcAmount = 0.00009186;
  const [USDARS, setUSDARS] = useState(0);
  const [BTCUSD, setBTCUSD] = useState(0);
  const newValue = btcAmount * USDARS * BTCUSD;
  const increment = newValue / buyPrice;

  useEffect(() => {
    getBlueQuote().then(setUSDARS);
    getBinanceQuote().then(setBTCUSD);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Bienvenidos a Bit Socks</h1>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <div className='App-body'>
        {increment > 1 ? (
          <h2>
            <span>
              Ganancia hasta hoy: <b className='big'>+{increment}%</b>
            </span>
          </h2>
        ) : (
          ''
        )}

        <p>
          Recibió: <b>BTC {btcAmount}</b>
        </p>
        <p>
          Precio de compra: <b>ARS {buyPrice}</b>
        </p>
        <p>
          Precio hoy: <b>ARS {newValue.toFixed(2)}</b>
        </p>

        <h2>Qué es esto?</h2>
        <p>
          Es un sitio sigue la cotización de una compra por (6 pares de medias).
          pagada con Bitcoin a un vendedor ambulante.
        </p>

        <h2>Origen</h2>
        <div className='tweet_block'>
          <TweetEmbed id='1468355545031589891' />
        </div>
        <small>
          <i>Notesé el hate innecesario de las respuestas</i>
        </small>

        <h2>Para que es esta página?</h2>
        <p>
          La idea es demostrar de una manera empírica de que el Bitcoin no es
          una moneda exclusiva para un grupo de millonarios, sino más bien todo
          lo contrario.
        </p>
        <p>
          A los que más beneficia es precisamente a la gente que no tiene medios
          de ahorro.
        </p>

        <h2>Por qué la hiciste?</h2>
        <p>
          Despues de recibir tanta shitstorm de gente que proyecta su propia
          superioridad frente a un trabajador que tiene el mismo derecho de
          acceder a estas herramientas como cualquiera de nosotros.
        </p>
        <p>
          Estos trolls pretenden que la gente de clase baja quede
          permanentemente ignorante, sin capacidad de ahorro y sin posibilidad
          de escalar.
        </p>
        <p>Basicamente que se limiten a sobrevivir el día a día.</p>

        <h2>En qué consiste la movida?</h2>
        <p>
          El paso del tiempo dará la razón si esos Bitcoin recibidos por el
          comerciante permanecen subiendo de valor.
        </p>
        <p>
          Beneficiando económicamente al tenedor y premiandolo proporcionalmente
          al esfuerzo de conservarlos
        </p>
        <p>
          De esta forma, el participante (que accedió voluntariamente), tendrá
          como resultado una educación a traves de la experiencia que le
          enseñará una alternativa para guardar el fruto de su trabajo.
        </p>

        <h2>Datos de la Transacción</h2>
        <p>
          Fecha de compra: <b>24-05-2020</b>
        </p>
        <p>
          Dirección:
          bc1qh76mrcu0dpx7l809mdx7dqncwe7fw77l30y6ufrp7tq0kytuxlfsnfsk9n
        </p>
        <p>
          Transacción:{' '}
          <a
            rel='noreferrer'
            target='_blank'
            href='https://mempool.space/es/tx/baaa671f3dcac033c426a5ea020eb5b5993a833868f583e52fe731a3f8cda568'
          >
            Ver transacción
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
