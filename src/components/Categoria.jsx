import React from 'react';
import { withRouter } from 'react-router-dom';
import PostList from './PostList';

function Categoria( props )
{
    // Blindando o código caso o componente não tenha acesso as rotas de navegação.
    const categoria = (props.match) ? props.match.params.categoria : undefined;

    return (
        <React.Fragment>
            <h2>{categoria}</h2>
            <PostList categoria={categoria} />
        </React.Fragment>
    );
}

export default withRouter( Categoria );