import React from 'react';

function Post( props )
{
    const { post, onRemove } = props;

    return (

        <div className="post">
            <h5>{post.titulo}</h5>
            <p>{post.corpo}</p>
            <p>{post.autor}</p>
            <p>{post.categoria}</p>
            <button onClick={() => onRemove( post.id )}>Excluir</button>
            <hr />
        </div>
      
    );
}

export default Post;