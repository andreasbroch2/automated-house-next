import Post from './post';
import PropTypes from 'prop-types';

const PostGrid = ( {posts, sortBy = "views"} ) => {
    if ( sortBy === 'views' ) {
	posts?.sort( ( a, b ) => {
		const viewA = a?.node?.viewCount;
		const viewB = b?.node?.viewCount;
		return viewB - viewA;
	} );
    }
    if ( sortBy === 'date' ) {
        posts?.sort( ( a, b ) => {
                const dateA = a?.node?.date;
                const dateB = b?.node?.date;
                return dateB - dateA;
        } );
    }
    // Only get 4 posts
    posts = posts.slice(0, 4);
	return (
		<div className="all-blog-posts-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 my-8">
			{
				posts.map( ( post, index ) => {
					return (
						<div key={`${post?.node?.id}-${index}` ?? ''} className="post-box">
							<Post post={post?.node}/>
						</div>
					);
				} )
			}
		</div>
	);
};

PostGrid.propTypes = {
	posts: PropTypes.array
};

PostGrid.defaultProps = {
	posts: []
};

export default PostGrid;
