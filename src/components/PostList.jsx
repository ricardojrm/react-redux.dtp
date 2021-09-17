import React, { Component } from 'react';
import { withRouter , Link } from 'react-router-dom';
import { SORT_BY } from './constants';
import If from './If';
import Post from './Post';
import { getPosts, deletePost, dislikePost, likePost } from '../api/posts';

class PostList extends Component
{
    state = {
        sortBy: this.props.sortBy || SORT_BY.ASC,
        posts: [],
    }

    fetchPosts()
    {
        const { categoria } = this.props.match.params;
        
        // Fetch posts...
        getPosts( categoria ).then( data => { console.log( "Publicações recuperadas com sucesso!" , data ); return data; } )
                             .then( data => { this.setState( {posts: data.posts} ); } );
    }

    componentDidMount()
    {
        console.log( "Componente PostList montado." );
        this.fetchPosts();
    }

    componentDidUpdate( prevProps )
    {
        console.log( "Componente PostList atualizado." );
        // console.log( prevProps );
        if ( prevProps.match.params.categoria !== this.props.match.params.categoria )
        {
            this.fetchPosts();
        }
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

    handleLike = ( id ) =>
    {
        console.log( "Solicitado o like na publicação com identificador", id );
        likePost( id ).then( resultado => {
            // Se a solicitação for confirmada com sucesso pelo backend...
            // Removo a publicação que foi votada
            const filtrados = this.state.posts.filter( e => e.id !== id );
            // Adiciono ela novamente em seguida, mas agora com seus dados atualizados...
            const posts = filtrados.concat( resultado );
            this.setState( {posts} );
        } );
    }

    handleDislike = ( id ) =>
    {
        console.log( "Solicitado a dislike na publicação com identificador", id );
        dislikePost( id ).then( resultado => {
            // Se a solicitação for confirmada com sucesso pelo backend...
            // Removo a publicação que foi votada
            const filtrados = this.state.posts.filter( e => e.id !== id );
            // Adiciono ela novamente em seguida, mas agora com seus dados atualizados...
            const posts = filtrados.concat( resultado );
            this.setState( {posts} );
        } );
    }

    handleDelete = ( id ) =>
    {
        console.log( "Solicitado a remoção da publicação com identificador", id );
        deletePost( id ).then( resultado => {
            // Se a solicitação for confirmada com sucesso pelo backend...
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
                    {sortedPosts.map( p => <Post key={p.id} post={p} onLike={this.handleLike} onDislike={this.handleDislike} onRemove={this.handleDelete} /> )}
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
}

export default withRouter( PostList );