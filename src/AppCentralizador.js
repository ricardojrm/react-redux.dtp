import './assets/App.css';
import { Component } from 'react';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/MenuBurro';
import PostList from './components/PostListBurro';
import { getPosts, deletePost, likePost, dislikePost } from './api/posts';
import { getCategorias } from './api/categorias';

class AppCentralizador extends Component
{

  initialState = {
    categorias: [],
    posts: [],
  }

  state = this.initialState;

  fetchData()
  {
    console.log( "match" , this.props.match );

    const { categoria } = ( this.props.match ) ? this.props.match.params : [];
    console.log( categoria );

    // Fetch posts...
    // getPosts categoria ().then( data => { console.log( "Publicações recuperadas com sucesso!" , data ); return data; } )
              // .then( data => this.setState( {posts: data.posts} ) );

    // Fetch categorias...
    // getCategorias().then( data => { console.log( "Categorias recuperadas com sucesso!" , data ); return data; } )
                  //  .then( data => this.setState( {categorias: data} ) )

    getPosts( categoria ).then( data => { console.log( "Publicações recuperadas com sucesso!" , data.posts ); return data.posts; } )
              .then( posts => { 
                getCategorias().then( categorias => { console.log( "Categorias recuperadas com sucesso!" , categorias ); return categorias; } )
                               .then( categorias => this.setState( {posts, categorias} ) );
              } );
  }

  componentDidMount()
  {
    console.log( "Componente AppCentralizador montado" );
    this.fetchData();
  }

  componentDidUpdate()
  {
    console.log( "Componente AppCentralizador atualizado" );
  }
  
  handleLike = ( id ) =>
  {
      console.log( "Solicitado o like na publicação com identificador", id );
      likePost( id ).then( resultado => {
          // Se a solicitação for confirmada com sucesso pelo backend...
          // Removo a publicação que foi votada
          const filtrados = this.state.posts.filter( e => e.id !== id );
          // Adiciono ela novamente em seguida, mas agora com seus dados atualizados...
          const posts = filtrados.concat( resultado );
          this.setState( {posts} );
      } );
  }

  handleDislike = ( id ) =>
  {
      console.log( "Solicitado a dislike na publicação com identificador", id );
      dislikePost( id ).then( resultado => {
          // Se a solicitação for confirmada com sucesso pelo backend...
          // Removo a publicação que foi votada
          const filtrados = this.state.posts.filter( e => e.id !== id );
          // Adiciono ela novamente em seguida, mas agora com seus dados atualizados...
          const posts = filtrados.concat( resultado );
          this.setState( {posts} );
      } );
  }

  handleRemove = ( id ) =>
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
    console.log( "Renderizando AppCentralizador" );
    const { posts, categorias } = this.state;

    return (
      <div className="app">
        <BrowserRouter>
          <h1>Pilha Arretada</h1>
          <Menu categorias={categorias} />
          <hr />
          <Route exact path="/">
            <PostList posts={posts} onLike={this.handleLike} onDislike={this.handleDislike} onRemove={this.handleRemove} />
          </Route>
          <Route path="/:categoria">
            <PostList posts={posts} onLike={this.handleLike} onDislike={this.handleDislike} onRemove={this.handleRemove} />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default withRouter( AppCentralizador );