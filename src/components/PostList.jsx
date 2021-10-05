import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SORT_TYPE } from './constants';
import If from './If';
import Post from './Post';
import { getPosts, deletePost, dislikePost, likePost } from '../api/posts';

function PostList( props )
{
    const [posts, setPosts] = useState( [] );
    const [sortBy, setSortBy] = useState( props.sortBy || SORT_TYPE.ASC );

    useEffect( () => {
        console.log( "useEffect acionado!");
        fetchPosts();
    }
    , [] );

    function fetchPosts()
    {
        const { categoria } = props;
        
        // Fetch posts...
        getPosts( categoria ).then( data => { console.log( "Publicações recuperadas com sucesso!" , data ); return data; } )
                             .then( data => { setPosts( data.posts ); } );
    }

    // componentDidUpdate( prevProps )
    // {
    //     console.log( "Componente PostList atualizado." );
    //     // console.log( prevProps );
    //     if ( prevProps.categoria !== this.props.categoria )
    //     {
    //         this.fetchPosts();
    //     }
    // }

    function doSort()
    {
        console.log( "Reordenando as publicações com", sortBy.name );
        return posts.slice().sort( sortBy.compare );
    }

    function handleSort( sortBy )
    {
        console.log( "Solicitando o reordenamento das publicações usando", sortBy.name );
        setSortBy( sortBy );
    }

    function refreshPost( id, resultado )
    {
        console.log( "Renovando a publicação com identificador", id );
        // Se a solicitação for confirmada com sucesso pelo backend...
        // Renovando a publicação que acabou de ser votada...
        const filtrados = posts.filter( e => e.id !== id );
        const renovados = filtrados.concat( resultado );
        setPosts( renovados );
        
        return renovados;
    }

    function handleLike( id )
    {
        console.log( "Solicitado like na publicação com identificador", id );
        likePost( id ).then( resultado => refreshPost( id,  resultado ) );
    }

    function handleDislike( id )
    {
        console.log( "Solicitado dislike na publicação com identificador", id );
        dislikePost( id ).then( resultado => refreshPost( id,  resultado ) );
    }

    function handleDelete( id )
    {
        console.log( "Solicitado a remoção da publicação com identificador", id );
        deletePost( id ).then( resultado => {
            // Se a solicitação for confirmada com sucesso pelo backend...
            const filtrados = posts.filter( e => e.id !== id );
            setPosts( filtrados );
        });
    }

    console.log( "Renderizando PostList" );
    const sortedPosts = doSort();

    return (
        <div>
            <button onClick={() => handleSort( SORT_TYPE.ASC )}>{SORT_TYPE.ASC.name}</button>
            <button onClick={() => handleSort( SORT_TYPE.DESC )}>{SORT_TYPE.DESC.name}</button>
            <If conditional={sortedPosts.length > 0}>
                {sortedPosts.map( p => <Post key={p.id} post={p} onLike={handleLike} onDislike={handleDislike} onRemove={handleDelete} /> )}
            </If>
            <If conditional={sortedPosts.length < 1}>
                <p>Nenhuma publicação encontrada.</p>
                <p>Caso queira começar a resenha, taca-lhê o dedo no botão abaixo.</p>
                <Link to="/nova-resenha">
                    <button>Resenhar</button>
                </Link>
            </If>
        </div>
    );
}

export default PostList;