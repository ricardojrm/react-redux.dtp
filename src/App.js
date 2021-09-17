import './assets/App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Categoria from './components/Categoria';
import PostForm from './components/PostForm';

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
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/nova-resenha">
                <PostForm />
              </Route>
              <Route path="/:categoria">
                <Categoria />
              </Route>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;