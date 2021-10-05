import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { savePost } from '../api/posts';

function PostForm( {history} )
{
    const [titulo, setTitulo] = useState( "" );
    const [corpo, setCorpo] = useState( "" );
    const [autor, setAutor] = useState( "" );
    const [categoria, setCategoria] = useState( "" );

    function handleSubmit( event )
    {
        event.preventDefault();

        console.log( "Salvando a nova publicação." );
        savePost( {titulo, corpo, autor, categoria} ).then( data => history.push( "/" ) );
    }

    return (
        <form id="nova-resenha" onSubmit={handleSubmit}>
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
                <button>Taca-lhe o pau!</button>
                <button onClick={() => history.goBack()}>Dê ré, macho!</button>
            </div>
        </form>
    );
}

export default withRouter( PostForm );