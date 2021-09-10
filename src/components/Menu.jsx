import React, { Component } from 'react';
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
        console.log( categorias );

        return (
            <div id="menu">
                {categorias.map( categoria => 
                    <div>{categoria.nome}</div>
                )}
            </div>
        );
    }
}

export default Menu;