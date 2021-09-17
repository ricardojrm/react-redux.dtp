import { SERVER_API } from "./config";

export const getCategorias = function ()
{
    return fetch( `${SERVER_API}/categorias` )
           .then( response => response.json() )
}