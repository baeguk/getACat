import './css/style.css'
import { useState } from 'react';

function App() {
  const url = `https://api.thecatapi.com/v1/images/search`;
  const api_key = "live_n2dfJ3FMn6bfPmsp3plZmG6Jkop8yAu0mf7QQdWCqWcpneRx3amf06kdMzjQWYou";
  const [catUrl, setCatUrl] = useState('');

  const handleCat = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          'x-api-key': api_key
        }
      });
      const data = await response.json();
      if (data && data.length > 0 && data[0].url) {
        setCatUrl(data[0].url)
      } else {
        console.error('Erro ao buscar a imagem do gato')
      }
    } catch (error) {
      console.error('Erro ao buscar a imagem do gato: ', error)
    }
  };

  return (
    <div className='container'>
      <h1 className='h1'>Get a cat to be happy</h1>
      <div className='img'>
        {catUrl && <img src={catUrl} alt="Random cat" />}
      </div>
      <div className='botao'>
        <button onClick={handleCat}>CAT</button>
      </div>
    </div>
  );
}

export default App;
