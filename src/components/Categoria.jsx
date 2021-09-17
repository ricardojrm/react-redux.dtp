import React from 'react';
import { withRouter } from 'react-router-dom';
import PostList from './PostList';

function Categoria( props )
{
    const categoria = (props.match) ? props.match.params.categoria : "";

    return (
        <React.Fragment>
            <h2>{categoria}</h2>
            <PostList />
        </React.Fragment>
    );
}

export default withRouter( Categoria );