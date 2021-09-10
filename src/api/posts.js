const SERVER_API = "http://localhost:5000";

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