import './assets/App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
            <Switch>
              <Route path="/nova-resenha">
                <div>
                  <label htmlFor="titulo">Título</label>:
                </div>
                <input id="titulo" type="text" />
                <div>
                  <label htmlFor="resenha">Resenha</label>:
                </div>
                <textarea id="resenha" type="textarea" rows="5" cols="5" />
                <div>
                  <button>Taca-lhe o pau!</button>
                </div>
              </Route>
              <Route path="/:categoria">
                <PostList />
              </Route>
              <Route exact path="/">
                <PostList />
              </Route>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;