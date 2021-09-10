const SERVER_API = "http://localhost:5000";

export const getCategorias = function ()
{
    return fetch( `${SERVER_API}/categorias` )
           .then( response => response.json() )
}