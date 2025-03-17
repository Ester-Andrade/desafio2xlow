import './App.css';
import Slider from './components/Slider/Slider';

function App() {
  const imagesArray = [
    {
      url: 'https://cobasiblog.blob.core.windows.net/production-ofc/2020/10/passaro-cardeal-capa.png',
      alt: 'Pássaro Cardeal-do-Norte',
      link: 'https://pt.wikipedia.org/wiki/Cardeal-do-nordeste',
    },
    {
      url: 'https://cobasiblog.blob.core.windows.net/production-ofc/2024/08/Design-sem-nome-2024-08-30T182242.097.webp',
      alt: 'Pássaro Tangará',
      link: 'https://pt.wikipedia.org/wiki/Tangar%C3%A1_(ave)',
    },
    {
      url: 'https://cobasiblog.blob.core.windows.net/production-ofc/2018/05/diamante-gould-ninho.webp',
      alt: 'Pássaro Diamante-de-gould',
      link: 'https://pt.wikipedia.org/wiki/Diamante-de-gould',
    },
    {
      url: 'https://cobasiblog.blob.core.windows.net/production-ofc/2024/08/Design-sem-nome-2024-08-30T184027.574.webp',
      alt: 'Pássaro Picoteiro-comum',
      link: 'https://pt.wikipedia.org/wiki/Picoteiro-comum',
    },
    {
      url: 'https://cobasiblog.blob.core.windows.net/production-ofc/2024/08/Design-sem-nome-2024-08-30T184554.214.webp',
      alt: 'Pássaro Gaturamo-verdadeiro',
      link: 'https://pt.wikipedia.org/wiki/Gaturamo-verdadeiro',
    },
  ];

  return (
    <div className='App'>
      <Slider images={imagesArray} />
    </div>
  );
}

export default App;
