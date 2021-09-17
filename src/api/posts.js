import { SERVER_API } from "./config";
import { VOTE_TYPE } from "../components/constants";

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
    return votar( id, VOTE_TYPE.LIKE );
}

export const dislikePost = function ( id )
{
    return votar( id, VOTE_TYPE.DISLIKE );
}

const votar = function ( id, voteType )
{
    const data = { opcao: voteType.value };
    const settings = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data ),
    };

    return fetch( `${SERVER_API}/posts/${id}/votar` , settings )
           .then( response => response.json() );
}