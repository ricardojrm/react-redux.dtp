import './assets/App.css';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu';
import PostList from './components/PostList';

class App extends Component
{

  componentDidMount()
  {
    console.log( "Componente App montado" );
  }

  componentDidUpdate()
  {
    console.log( "Componente App atualizado" );
  }

  render()
  {
    console.log( "Renderizando App" );

    return (
      <div className="app">
          <BrowserRouter>
            <h1>Pilha Arretada</h1>
            <Menu />
            <hr />
            <Route exact path="/">
              <PostList />
            </Route>
            <Route path="/:categoria">
              <PostList />
            </Route>
            <Route path="/:categoria" component={PostList} />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;