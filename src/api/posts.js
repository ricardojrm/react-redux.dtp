const SERVER_API = "http://localhost:5000";

export const getPosts = function ()
{
    return fetch( SERVER_API + "/posts" )
           .then( response => response.json() )
}