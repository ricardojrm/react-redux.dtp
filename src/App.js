import './App.css';
import { Component } from 'react';
import If from './components/If'

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
  
  publicarPost = ( post ) =>
  {
    return (
      <div key={post.id} className="post">
        <h5>{post.titulo}</h5>
        <p>{post.resumo}</p>
        <button onClick={_ => this.removerPost( post.id )}>Excluir</button>
        <hr />
      </div>
    );
  }
  
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
            {this.state.posts.map( this.publicarPost )}
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
