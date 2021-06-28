import React from 'react';

import './quotes.css';


export default function Quotes(props) {

    return(
  <div className="Quotes">  
     <h1>FAMOUS QUOTES</h1>{/*titulo */}
      <p className="quotes">
      {props.quote}{/**aqui recibimos por props el array  de citas  */}
      <strong>{props.author}</strong>
      {/*en esta etiqueta <a>creamos el boton de twitter y lo enlazamos a la misma red social en una ventana en blanco */}
      <a href="https://twitter.com/UbaldoCervante7" rel="twitter" target="_blank"><img src="./icon-twitter.svg"/></a>
      </p>
  </div>

    );
}