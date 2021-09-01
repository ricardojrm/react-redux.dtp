import logo from './logo.svg';
import './App.css';

const posts = [
  {titulo: "Título da primeira publicação", resumo: "Resumo da primeira publicação.", },
  {titulo: "Título da segunda publicação", resumo: "Resumo da segunda publicação.", },
  {titulo: "Título da terceira publicação", resumo: "Resumo da terceira publicação.", },
  {titulo: "Título da quarta publicação", resumo: "Resumo da quarta publicação.", },
];


function App() 
{
  const publicarPost = function( post )
  {
    return (
      <div>
        <h5>{post.titulo}</h5>
        <p>{post.resumo}</p>
        <hr />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {posts.map( publicarPost )}
      </header>
    </div>
  );
}

export default App;
