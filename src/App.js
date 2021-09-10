import './assets/App.css';
import { Component } from 'react';
import PostList from './components/PostList';
import { getPosts, deletePost } from './api/posts';
import { SORT_BY } from './components/constants';

class App extends Component
{

  initialState = {
    posts: [],
    sortBy: SORT_BY.ASC,
  }

  state = this.initialState;

  fetchData()
  {
    const response = getPosts();
    response.then( data => console.log( data ) );
    response.then( data => this.setState( {posts: data.posts} ) )
  }

  componentDidMount()
  {
    this.fetchData();
  }
  
  removerPost = ( id ) =>
  {
    console.log( "Solicitado a remoção da publicação com identificador", id );
    deletePost( id ).then( resultado => {
      // Se a remoção da publicação for confirmada pelo backend...
      const posts = this.state.posts.filter( e => e.id !== id );
      this.setState( {posts} );
    } );
  }

  reset = () =>
  {
    console.log( "Solicitando a reinicialização do estado da aplicação" );
    this.fetchData();
  }

  render()
  {
    const { posts, sortBy } = this.state;

    return (
      <div className="app">
          <h1>Pilha Arretada</h1>
          <hr />
          <PostList posts={posts} sortBy={sortBy} onRemove={this.removerPost} />
      </div>
    );
  }
}

export default App;