import React, { Component } from 'react';
import Post from './Post';
import If from './If';
import { SORT_BY } from './constants';

class PostList extends Component
{
    state = {
        sortBy: this.props.sortBy || SORT_BY.ASC,
    }

    componentDidMount()
    {
        console.log( "Componente PostListBurro montado." );
    }

    componentDidUpdate()
    {
        console.log( "Componente PostListBurro atualizado." );
    }

    // getDerivedStateFromProps()
    // {

    // }

    doSort = () =>
    {
        const { sortBy } = this.state;
        console.log( "Reordenando as publicações com", sortBy.name );
        return this.props.posts.slice().sort( sortBy.compare );
    }

    handleSort = ( sortBy ) =>
    {
        console.log( "Solicitando o reordenamento das publicações usando", sortBy.name );
        this.setState( {sortBy} );
    }

    render()
    {
        console.log( "Renderizando PostListBurro");
        const posts = this.doSort();
        
        return (
            <div>
                <button onClick={() => this.handleSort( SORT_BY.ASC )}>{SORT_BY.ASC.name}</button>
                <button onClick={() => this.handleSort( SORT_BY.DESC )}>{SORT_BY.DESC.name}</button>
                <If conditional={posts.length > 0}>
                    {posts.map( p => <Post key={p.id} post={p} onLike={this.props.onLike} onDislike={this.props.onDislike} onRemove={this.props.onRemove} /> )}
                </If>
                <If conditional={posts.length < 1}>
                    <p>Nenhuma publicação encontrada.</p>
                    <p>Caso queira começar a resenha, taca-lhê o dedo no botão abaixo.</p>
                    <button>Resenhar</button>
                </If>
            </div>
        );
    }
}

export default PostList;