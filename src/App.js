import './App.css';
import { Component } from 'react';
import If from './components/If'
import Post from './components/Post';

class App extends Component
{

  initialState = {
    posts: [
      {id: 1, titulo: "Título da primeira publicação", resumo: "Resumo da primeira publicação.", },
      {id: 2, titulo: "Título da segunda publicação", resumo: "Resumo da segunda publicação.", },
      {id: 3, titulo: "Título da terceira publicação", resumo: "Resumo da terceira publicação.", },
      {id: 4, titulo: "Título da quarta publicação", resumo: "Resumo da quarta publicação.", },
    ]
  }

  state = this.initialState;
  
  removerPost = ( id ) =>
  {
    console.log( "Solicitado a remoção da publicação com identificador", id );
    let newPosts = this.state.posts.filter( e => e.id !== id );
    this.setState( {posts: newPosts} );
  }

  reset = () =>
  {
    this.setState( this.initialState );
  }

  render()
  {
    return (
      <div className="app">
          <If conditional={this.state.posts.length > 0}>
            {this.state.posts.map( p => <Post post={p} removeHandle={() => this.removerPost( p.id )} /> )}
          </If>
          <If conditional={this.state.posts.length < 1}>
            <p>Nenhuma publicação encontrada.</p>
            <p>Caso queira recomeçar para o estado inicial, clique no botão abaixo.</p>
            <button onClick={this.reset}>Recomeçar</button>
          </If>
      </div>
    );
  }
}

export default App;
