import React, { Component } from 'react';
import { SORT_BY } from './constants';
import If from './If';
import Post from './Post';
import { getPosts, deletePost } from '../api/posts';

class PostList extends Component
{
    state = {
        sortBy: this.props.sortBy || SORT_BY.ASC,
        posts: [],
    }

    fetchPosts()
    {
        // Fetch posts...
        // getPosts().then( data => console.log( "Publicações recuperadas com sucesso!" , data ) )
        //           .then( data => this.setState( {posts: data.posts} ) );
    
        const { categoria } = this.props.match.params;

        console.log( "categoria" , categoria );

        const response = getPosts( categoria );
        response.then( data => console.log( "Publicações recuperadas com sucesso!" , data.posts ) );
        response.then( data => this.setState( {posts: data.posts} ) );
    }

    componentDidMount()
    {
        console.log( "Componente PostList montado." );
        this.fetchPosts();
    }

    componentDidUpdate()
    {
        console.log( "Componente PostList atualizado." );
    }

    doSort = () =>
    {
        const { posts, sortBy } = this.state;
        console.log( "Reordenando as publicações com", sortBy.name );
        return posts.sort( sortBy.compare );
    }

    handleSort = ( sortBy ) =>
    {
        console.log( "Solicitando o reordenamento das publicações usando", sortBy.name );
        this.setState( {sortBy} );
    }

    removerPost = ( id ) =>
    {
        console.log( "Solicitado a remoção da publicação com identificador", id );
        deletePost( id ).then( resultado => {
            // Se a remoção da publicação for confirmada pelo backend...
            const posts = this.state.posts.filter( e => e.id !== id );
            this.setState( {posts} );
        } );
    }

    render()
    {
        console.log( "Renderizando PostList");
        const sortedPosts = this.doSort();
        
        return (
            <div>
                <button onClick={() => this.handleSort( SORT_BY.ASC )}>{SORT_BY.ASC.name}</button>
                <button onClick={() => this.handleSort( SORT_BY.DESC )}>{SORT_BY.DESC.name}</button>
                <If conditional={sortedPosts.length > 0}>
                    {sortedPosts.map( p => <Post key={p.id} post={p} onRemove={this.removerPost} /> )}
                </If>
                <If conditional={sortedPosts.length < 1}>
                    <p>Nenhuma publicação encontrada.</p>
                    <p>Caso queira começar a resenha, taca-lhê o dedo no botão abaixo.</p>
                    <button>Resenhar</button>
                </If>
            </div>
        );
    }
}

export default PostList;