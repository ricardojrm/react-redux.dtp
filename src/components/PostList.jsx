import React from 'react';
import Post from './Post';
import If from './If';
import { SORT_BY } from './constants';

function PostList( props )
{
    let { posts, sortBy , onRemove } = props;

    function doSort()
    {
        // const sortBy = this.state.sortBy;
        console.log( "Reordenando as publicações com", sortBy.name );
        // return this.state.posts.slice().sort( sortBy.compare );
        return posts.sort( sortBy.compare );
    }

    function handleSort( newSortBy )
    {
        console.log( "Solicitando o reordenamento das publicações usando", newSortBy.name );
        sortBy = newSortBy;
        console.log( sortBy );
        // this.setState( {sortBy} );
    }

    return (
        <div>
            <button onClick={() => handleSort( SORT_BY.ASC )}>{SORT_BY.ASC.name}</button>
            <button onClick={() => handleSort( SORT_BY.DESC )}>{SORT_BY.DESC.name}</button>
            <If conditional={posts.length > 0}>
                {doSort().map( p => <Post key={p.id} post={p} onRemove={onRemove} /> )}
            </If>
            <If conditional={posts.length < 1}>
                <p>Nenhuma publicação encontrada.</p>
                <p>Caso queira começar a resenha, taca-lhê o dedo no botão abaixo.</p>
                <button>Resenhar</button>
            </If>
        </div>
    );
}

export default PostList;