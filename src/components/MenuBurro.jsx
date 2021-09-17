import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBurro extends Component
{

    componentDidMount()
    {
      console.log( "Componente MenuBurro montado" );
    }

    componentDidUpdate()
    {
        console.log( "Componente MenuBurro atualizado." );
    }

    render()
    {
        console.log( "Renderizando MenuBurro" );
        const { categorias } = this.props;

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

export default MenuBurro;