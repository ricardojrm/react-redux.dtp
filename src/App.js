import './assets/App.css';
import { Component } from 'react';
import If from './components/If'
import Post from './components/Post';
import { getPosts } from './api/posts';

class App extends Component
{

  SORT_BY = {
    ASC: { name: "ASC", compare: function( a, b ) { return a.timestamp - b.timestamp; } },
    DESC: { name: "DESC", compare: function( a, b ) { return b.timestamp - a.timestamp; } },
  }

  initialState = {
    posts: [],
    sortBy: this.SORT_BY.ASC,
  }

  state = this.initialState;

  componentDidMount()
  {
    const response = getPosts();
    response.then( data => console.log( data ) );
    response.then( data => this.setState( {posts: data.posts} ) )
  }

  handleSort = ( sortBy ) =>
  {
    console.log( "Solicitando o reordenamento das publicações usando", sortBy.name );
    this.setState( {sortBy} );
  }
  
  removerPost = ( id ) =>
  {
    console.log( "Solicitado a remoção da publicação com identificador", id );
    const posts = this.state.posts.filter( e => e.id !== id );
    this.setState( {posts} );
  }

  reset = () =>
  {
    console.log( "Solicitando a reinicialização do estado da aplicação" );
    this.setState( this.initialState );
  }

  sortPosts = () =>
  {
    const sortBy = this.state.sortBy;
    console.log( "Reordenando as publicações com", sortBy.name );
    return this.state.posts.slice().sort( sortBy.compare );
  }

  render()
  {
    return (
      <div className="app">
          <button onClick={() => this.handleSort( this.SORT_BY.ASC )}>{this.SORT_BY.ASC.name}</button>
          <button onClick={() => this.handleSort( this.SORT_BY.DESC )}>{this.SORT_BY.DESC.name}</button>
          <If conditional={this.state.posts.length > 0}>
            {this.sortPosts().map( p => <Post key={p.id} post={p} onRemove={() => this.removerPost( p.id )} /> )}
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