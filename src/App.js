import './assets/App.css';
import { Component } from 'react';
import PostList from './components/PostList';
import { getPosts, deletePost } from './api/posts';
import { getCategorias } from './api/categorias';

class App extends Component
{

  initialState = {
    posts: [],
    categorias: [ 
      { nome: "primeira categoria", path: "/primeira-categoria"}, 
      { nome: "segunda categoria", path: "/segunda-categoria"}, 
    ],
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
    getCategorias().then( data => console.log( "Categorias recuperadas com sucesso!" , data ) )
                   .then( data => this.setState( {categorias: data} ) )

    const response2 = getCategorias();
    response2.then( data => console.log( "Categorias recuperadas com sucesso!" , data ) );
    response2.then( data => this.setState( {categorias: data} ) )
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
    const { posts, categorias } = this.state;

    return (
      <div className="app">
          <h1>Pilha Arretada</h1>
          {categorias.map( categoria => 
            <div>categoria.nome</div>
          )}
          <hr />
          <PostList posts={posts} onRemove={this.removerPost} />
      </div>
    );
  }
}

export default App;