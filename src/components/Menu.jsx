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
      getCategorias().then( data => { console.log( "Categorias recuperadas com sucesso!" , data ); return data; } )
                     .then( data => this.setState( {categorias: data} ) );
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
            <ul id="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/nova-resenha">Nova Resenha</Link>
                </li>
                {categorias.map( categoria => 
                    <li key={categoria.path}>
                        <Link to={categoria.path}>
                            {categoria.nome}
                        </Link>
                    </li>
                )}
            </ul>
        );
    }
}

export default Menu;