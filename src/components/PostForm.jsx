import React from 'react';

function PostForm()
{
    return (
        <div id="nova-resenha">
            <div>
                <label htmlFor="titulo">Título</label>:
            </div>
            <input id="titulo" type="text" />
            <div>
                <label htmlFor="resenha">Resenha</label>:
            </div>
            <textarea id="resenha" type="textarea" rows="5" cols="17" />
            <div>
                <label htmlFor="autor">Autor</label>:
            </div>
            <input id="autor" type="text" />
            <div>
                <label htmlFor="categoria">Categoria</label>:
            </div>
            <input id="categoria" type="text" />
            <div>
                <button>Taca-lhe o pau!</button>
            </div>
        </div>
    );
}

export default PostForm;