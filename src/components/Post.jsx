import React from 'react';

function Post( props )
{
    const post = props.post;
    const doRemove = props.removeHandle;

    return (

        <div key={post.id} className="post">
            <h5>{post.titulo}</h5>
            <p>{post.resumo}</p>
            <button onClick={doRemove}>Excluir</button>
            <hr />
        </div>
      
    );
}

export default Post;