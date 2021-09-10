import React from 'react';

function Post( props )
{
    const { post, onLike, onDislike, onRemove } = props;

    return (

        <div className="post">
            <h5>{post.titulo}</h5>
            <p>Autor: {post.autor}</p>
            <p>Categoria: {post.categoria}</p>
            <p>Nota: {post.nota}</p>
            <p>Resenha: {post.corpo}</p>
            <button onClick={() => onLike( post.id )}>Arretado!</button>
            <button onClick={() => onDislike( post.id )}>Diacho!</button>
            <button onClick={() => onRemove( post.id )}>Pega descendo!</button>
            <hr />
        </div>
      
    );
}

export default Post;