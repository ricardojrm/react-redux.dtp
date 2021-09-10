import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategorias } from '../api/categorias';

class Menu extends Component
{
    state = {
        categorias: [],
    }

    fetchData()
    {
      // Fetch categorias...
    //   getCategorias().then( data => console.log( "Categorias recuperadas com sucesso!" , data ) )
                    //  .then( data => this.setState( {categorias: data} ) );
  
      const response = getCategorias();
      response.then( data => console.log( "Categorias recuperadas com sucesso!" , data ) );
      response.then( data => this.setState( {categorias: data} ) );
    }

    componentDidMount()
    {
      console.log( "Componente Menu montado" );
      this.fetchData();
    }

    render()
    {
        console.log( "Renderizando Menu" );
        const { categorias } = this.state;

        return (
            <div id="menu">
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                {categorias.map( categoria => 
                    <div key={categoria.path}>
                        <Link to={categoria.path}>
                            {categoria.nome}
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default Menu;