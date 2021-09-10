import './assets/App.css';
import { Component } from 'react';
import Menu from './components/Menu';
import PostList from './components/PostList';
import { getPosts, deletePost } from './api/posts';

class App extends Component
{

  initialState = {
    posts: [],
  }

  state = this.initialState;

  fetchData()
  {
    // Fetch posts...
    // getPosts().then( data => console.log( "Publicações recuperadas com sucesso!" , data ) )
    //           .then( data => this.setState( {posts: data.posts} ) );
  
    const response = getPosts();
    response.then( data => console.log( "Publicações recuperadas com sucesso!" , data ) );
    response.then( data => this.setState( {posts: data.posts} ) );

    // Fetch categorias...
    // getCategorias().then( data => console.log( "Categorias recuperadas com sucesso!" , data ) )
    //                .then( data => this.setState( {categorias: data} ) )

    // const response2 = getCategorias();
    // response2.then( data => console.log( "Categorias recuperadas com sucesso!" , data ) );
    // response2.then( data => this.setState( {categorias: data} ) );
  }

  componentDidMount()
  {
    console.log( "Componente App montado" );
    this.fetchData();
  }

  componentDidUpdate()
  {
    console.log( "Componente App atualizado" );
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
    console.log( "Renderizando App" );
    const { posts } = this.state;

    return (
      <div className="app">
          <h1>Pilha Arretada</h1>
          <Menu />
          <hr />
          <PostList posts={posts} onRemove={this.removerPost} />
      </div>
    );
  }
}

export default App;