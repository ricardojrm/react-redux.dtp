import React, { useState } from 'react';
import { savePost } from '../api/posts';

function PostForm()
{
    const [titulo, setTitulo] = useState("Título inicial");
    const [corpo, setCorpo] = useState("Resenha inicial");
    const [autor, setAutor] = useState("Autor inicial");
    const [categoria, setCategoria] = useState("Categoria inicial");

    function handleSubmit( event )
    {
        console.log( "Salvando a nova publicação." );
        savePost( {titulo, corpo, autor, categoria} );
    }

    return (
        <div id="nova-resenha">
            <div>
                <label htmlFor="titulo">Título</label>:
            </div>
            <input id="titulo" type="text" value={titulo} onChange={(e) => setTitulo( e.target.value )} />
            <div>
                <label htmlFor="resenha">Resenha</label>:
            </div>
            <textarea id="resenha" type="textarea" rows="5" cols="17" value={corpo} onChange={(e) => setCorpo( e.target.value )} />
            <div>
                <label htmlFor="autor">Autor</label>:
            </div>
            <input id="autor" type="text" value={autor} onChange={(e) => setAutor( e.target.value )} />
            <div>
                <label htmlFor="categoria">Categoria</label>:
            </div>
            <input id="categoria" type="text" value={categoria} onChange={(e) => setCategoria( e.target.value )} />
            <div>
                <button onClick={handleSubmit}>Taca-lhe o pau!</button>
            </div>
        </div>
    );
}

export default PostForm;