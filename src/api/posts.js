import { SERVER_API } from "./config";

export const getPosts = function ( categoria )
{
    const args = ( categoria ) ? `?categoria=${categoria}` : '';

    return fetch( `${SERVER_API}/posts${args}` )
           .then( response => response.json() )
}

export const deletePost = function ( id )
{
    return fetch( `${SERVER_API}/posts/${id}` , { method: "DELETE" } )
           .then( response => response.json() );
}

export const savePost = function ( post )
{
    const settings = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( post ),
    };

    return fetch( `${SERVER_API}/posts` , settings )
           .then( response => response.json() );
}

export const likePost = function ( id )
{
    return votar( id, true );
}

export const dislikePost = function ( id )
{
    return votar( id, false );
}

const votar = function ( id, like )
{
    const data = { opcao: ( like ) ? "positivo" : "negativo" };
    const settings = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data ),
    };

    return fetch( `${SERVER_API}/posts/${id}/votar` , settings )
           .then( response => response.json() );
}